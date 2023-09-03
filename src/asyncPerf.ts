import { memoryUsage } from "node:process";
import chalk from "chalk";

type TimeUnit = "ns" | "μs" | "ms" | "s" | "m" | "h" | "unknown";
type TimeFactor = 1e-6 | 1e-3 | 1 | 1e3 | 0.06 | 3.6;
type MemUnit = "bytes" | "kb" | "mb" | "gb" | "unknown";
type MemFactor = 1 | 1e3 | 1e6 | 1e9;
type Data = {
  sum: number;
  mean: number;
  std_dev: number;
  unit: TimeUnit | MemUnit;
  stock: number[];
};
type Results = {
  stats_time: Result;
  stats_mem: Result;
};
type Result = {
  sum: string;
  mean: string;
  std_dev: string;
};
type Dressable = Record<string, unknown> | string;
type Utils = {
  mem: UtilType<MemUnit, MemFactor>;
  time: UtilType<TimeUnit, TimeFactor>;
};
type UtilType<U, F> = {
  units: U[];
  factors: F[];
};
type Fn<Y> = (...args: Y[]) => any;
type Args<Y> = Y[];

class Trash {
  public value: unknown | Record<string, unknown> | (string & {});
  public dressed: string | null = null;
  private isObject(): this is { value: Record<string, unknown> } {
    return typeof this.value === "object" && this.value !== null && !Array.isArray(this.value);
  }
  dress(): this | string {
    if (this.isObject()) {
      let arr: any[][] = Object.entries(this.value);
      arr = arr.map((entry) => {
        return entry.map((value) => {
          typeof value === "function" || (value && value.constructor === RegExp)
            ? (value = value.toString())
            : value;
          return value;
        });
      });
      this.value = Object.fromEntries(arr);
      return (this.dressed = JSON.stringify(this.value, null, 15));
    }
    return this;
  }
  valueOf() {
    return this.dress() || this.value;
  }
  pick(value: unknown) {
    this.value = value;
    return this;
  }
  get() {
    return this.value;
  }
}

export const asyncPerf = async <T>(fn: Fn<T>, args: Args<T>, cap: number): Promise<string> => {
  return new Promise((resolve) => {
    //init
    const trash = new Trash();
    let [times, heaps, utils, { stats_time, stats_mem }] = init();

    // test
    for (let i = 0; i < cap; i++) trash.pick(memTest(fn, args, heaps.stock, trash));
    for (let i = 0; i < cap; i++) trash.pick(speedTest(fn, args, times.stock, trash));

    // stats
    [times.sum, times.mean, times.std_dev] = stats(times.stock);
    [heaps.sum, heaps.mean, heaps.std_dev] = stats(heaps.stock);

    // treat
    let key: keyof Result;
    for (key in stats_time) stats_time[key] = convert(times[key], utils.time).join(" ");
    for (key in stats_mem) stats_mem[key] = convert(heaps[key], utils.mem).join(" ");
    resolve(log(stats_time, stats_mem, cap, trash.dress()));
  });
};

function init(): [Data, Data, Utils, Results] {
  const times = {
    sum: 0,
    mean: 0,
    std_dev: 0,
    unit: "ms",
    stock: [] as number[],
  } as Data;
  const heaps = {
    sum: 0,
    mean: 0,
    std_dev: 0,
    unit: "bytes",
    stock: [] as number[],
  } as Data;
  const utils = {
    mem: {
      units: ["bytes", "kb", "mb", "gb"] as MemUnit[],
      factors: [1, 1e3, 1e6, 1e9] as MemFactor[],
    } as UtilType<MemUnit, MemFactor>,
    time: {
      units: ["ns", "μs", "ms", "s", "m", "h"] as TimeUnit[],
      factors: [1e-6, 1e-3, 1, 1e3, 0.06, 3.6] as TimeFactor[],
    } as UtilType<TimeUnit, TimeFactor>,
  } as Utils;
  const results: Results = {
    stats_time: {
      sum: "",
      mean: "",
      std_dev: "",
    },
    stats_mem: {
      sum: "",
      mean: "",
      std_dev: "",
    },
  };
  return [times, heaps, utils, results];
}

function speedTest(fn: Function, args: unknown[], stock: number[], trash: unknown) {
  const start_time = performance.now();
  trash = fn(...args);
  const end_time = performance.now();
  stock.push(end_time - start_time);
  return trash;
}

function memTest(fn: Function, args: unknown[], stock: number[], trash: unknown) {
  const start_mem_xp = memoryUsage().rss;
  trash = fn(...args);
  const end_mem_xp = memoryUsage().rss;
  stock.push(end_mem_xp - start_mem_xp);
  return trash;
}

function stats(stock: number[]): [number, number, number] {
  let sum = 0; // ms // bytes
  let mean = 0; // ms // bytes
  let std_dev = 0; // ms // bytes
  sum = stock.reduce((a, b) => a + b, 0);
  mean = sum / stock.length;
  std_dev = Math.sqrt(
    stock.map((num) => (num - mean) ** 2).reduce((a, b) => a + b, 0) / stock.length
  );
  return [sum, mean, std_dev];
}

function convert(
  data: number,
  utils: UtilType<MemUnit | TimeUnit, MemFactor | TimeFactor>
): [number, TimeUnit | MemUnit] {
  const { units, factors } = utils;
  let holdSum: number = data;
  for (let i = 0; i < factors.length; i++) {
    data /= factors[i];
    if (data < 1000 && data > 0) {
      return [+data.toFixed(2), units[i]];
    }
    data = holdSum;
  }
  return [data, "unknown"];
}

function log(times: Result, heaps: Result, cap: number, trash: unknown) {
  return `
    ${chalk.blue("Total Runtime        : ")}${times.sum}
    ${chalk.blue("Average Runtime/Fn   : ")}${times.mean}
    ${chalk.blue("SD                   : ")}± ${times.std_dev}
    ---
    ${chalk.blue("Total Heap used      : ")}${heaps.sum}
    ${chalk.blue("Average Heap used/Fn : ")}${heaps.mean}
    ${chalk.blue("SD                   : ")}± ${heaps.std_dev}
    ---
    ${chalk.blue("Performed            : ")}${cap} times
    ${chalk.blue("Last Result          : ")}${trash}
    `;
}
