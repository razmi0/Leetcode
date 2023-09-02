import { memoryUsage } from "node:process";
import chalk from "chalk";

type Data = {
  sum: number | string;
  mY: number | string;
  stock: number[];
};
type Dressable = Record<string, unknown> | string;
type Utils = {
  mem: {
    units: string[];
    factors: number[];
  };

  time: {
    units: string[];
    factors: number[];
  };
};
type UtilType = {
  units: string[];
  factors: number[];
};

export function asyncPerf(fn: Function, args: unknown[], cap: number): string {
  let [times, heaps, temp, utils] = init();

  for (let i = 0; i < cap; i++) temp = memTest(fn, args, heaps, temp);
  for (let i = 0; i < cap; i++) temp = speedTest(fn, args, times, temp);

  [times.sum, times.mY] = stats(times.stock);
  [heaps.sum, heaps.mY] = stats(heaps.stock);

  times.sum = convert(times.sum, utils.time);
  times.mY = convert(times.mY, utils.time);
  heaps.sum = convert(heaps.sum, utils.mem);
  heaps.mY = convert(heaps.mY, utils.mem);

  return log(times, heaps, cap, temp);
}

function stats(stock: number[]) {
  let sum = 0; // ms // bytes
  for (let i = 0; i < stock.length; i++) {
    sum += stock[i];
  }
  return [sum, sum / stock.length];
}

function dress(temp: Dressable): string {
  let arr: any[][] = Object.entries(temp);
  arr = arr.map((entry) => {
    return entry.map((value) => {
      typeof value === "function" || (value && value.constructor === RegExp)
        ? (value = value.toString())
        : value;
      return value;
    });
  });
  temp = Object.fromEntries(arr);
  temp = JSON.stringify(temp, null, 15);
  return temp;
}

function speedTest(fn: Function, args: unknown[], times: Data, temp: unknown) {
  const start_time = performance.now();
  temp = fn(...args);
  times.stock.push(performance.now() - start_time);
  return temp;
}

function memTest(fn: Function, args: unknown[], heaps: Data, temp: unknown) {
  const start_mem_xp = memoryUsage().rss;
  temp = fn(...args);
  heaps.stock.push(memoryUsage().rss - start_mem_xp);
  return temp;
}

function log(times: Data, heaps: Data, cap: number, temp: unknown) {
  if (isObject(temp)) temp = dress(temp);
  return `
    \n
    ${chalk.blue("Total Time             : ")}${times.sum}
    ${chalk.blue("Average Time/Fn        : ")}${times.mY}
    ---
    ${chalk.blue("Total Heap used        : ")}${heaps.sum}
    ${chalk.blue("Average Heap used/Fn   : ")}${heaps.mY}
    ---
    ${chalk.blue("Performed              : ")}${cap} times
    ${chalk.blue("Last Result            : ")}${temp}
    \n`;
}

function isObject(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}

function convert(data: number, utils: UtilType) {
  const { units, factors } = utils;
  let i = 0;
  let holdSum: number = data;
  for (; i < factors.length; i++) {
    data /= factors[i];
    if (data > 0 && data < 1000) {
      break;
    }
    data = holdSum;
  }
  return `${data.toFixed(2)} ${units[i]}`;
}

function init(): [Data, Data, string | unknown, Utils] {
  const times: Data = {
    sum: 0,
    mY: 0,
    stock: [] as number[],
  };
  const heaps: Data = {
    sum: 0,
    mY: 0,
    stock: [] as number[],
  };
  const utils = {
    mem: {
      units: ["bytes", "kb", "mb", "gb"],
      factors: [1, 1e3, 1e6, 1e9],
    },
    time: {
      units: ["ns", "μs", "ms", "s", "m", "h"],
      factors: [1e-6, 1e-3, 1, 1e3, 0.06, 3.6],
    },
  };
  return [times, heaps, "", utils];
}
