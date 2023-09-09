import { memoryUsage } from "node:process";
import chalk from "chalk";
import Time from "./Time.js";
import Mem from "./Mem.js";
import Trash from "./Trash.js";

type Data = {
  sum: Mem | Time;
  mean: Mem | Time;
  std_dev: Mem | Time;
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

type Fn<Y> = (...args: Y[]) => any;
type Args<Y> = Y[];

export const perf = async <T>(fn: Fn<T>, args: Args<T>, cap: number = 100000): Promise<string> => {
  return new Promise((resolve) => {
    //init
    const trash = new Trash();
    let [times, heaps, { stats_time, stats_mem }] = init();

    // test
    for (let i = 0; i < cap; i++) trash.pick(memTest(fn, args, heaps.stock, trash));
    for (let i = 0; i < cap; i++) trash.pick(speedTest(fn, args, times.stock, trash));

    // stats
    [times.sum.value, times.mean.value, times.std_dev.value] = stats(times.stock);
    [heaps.sum.value, heaps.mean.value, heaps.std_dev.value] = stats(heaps.stock);

    // treat
    let key: keyof Result;
    for (key in stats_time) stats_time[key] = times[key].convert().read();
    for (key in stats_mem) stats_mem[key] = heaps[key].convert().read();

    // return
    resolve(log(fn.name, stats_time, stats_mem, cap, trash.dress()));
  });
};

function init(): [Data, Data, Results] {
  const times = {
    sum: new Time(0, "ms"),
    mean: new Time(0, "ms"),
    std_dev: new Time(0, "ms"),
    stock: [] as number[],
  } as Data;
  const heaps = {
    sum: new Mem(0, "bytes"),
    mean: new Mem(0, "bytes"),
    std_dev: new Mem(0, "bytes"),
    stock: [] as number[],
  } as Data;
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
  return [times, heaps, results];
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

function log(fnName: string, t_stats: Result, h_stats: Result, cap: number, trash: unknown) {
  return `
    ${chalk.blue("Function             : ")}${fnName}
    ${chalk.blue("Total Runtime        : ")}${t_stats.sum}
    ${chalk.blue("Average Runtime/Fn   : ")}${t_stats.mean}
    ${chalk.blue("SD                   : ")}± ${t_stats.std_dev}
    ---
    ${chalk.blue("Total Heap used      : ")}${h_stats.sum}
    ${chalk.blue("Average Heap used/Fn : ")}${h_stats.mean}
    ${chalk.blue("SD                   : ")}± ${h_stats.std_dev}
    ---
    ${chalk.blue("Performed            : ")}${cap} times
    ${chalk.blue("Last Result          : ")}${trash}
    `;
}
