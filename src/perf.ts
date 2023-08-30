import { memoryUsage } from "node:process";
import chalk from "chalk";

export function perf(fn: Function, args: unknown[], cap: number) {
  const times = {
    sum: 0,
    mY: 0,
    arr: [] as number[],
  };
  const heaps = {
    sum: 0,
    mY: 0,
    arr: [] as number[],
  };
  let temp: any;
  for (let i = 0; i < cap; i++) {
    // TIME PERF
    const start_time = performance.now();
    temp = fn(...args);
    times.arr.push(performance.now() - start_time);

    // MEM PERF
    const start_mem_xp = memoryUsage().rss;
    temp = fn(...args);
    heaps.arr.push(memoryUsage().rss - start_mem_xp);
  }
  [times.sum, times.mY] = stats(times.arr);
  [heaps.sum, heaps.mY] = stats(heaps.arr);

  // LOG
  if (typeof temp === "object") {
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
  }

  console.log(
    `\n
    ${chalk.blue("Time        : ")}${times.mY} ms
    ${chalk.blue("Heap used   : ")}${heaps.mY} bytes
    ${chalk.blue("Performed   : ")}${cap} times
    ${chalk.blue("Last Result : ")}\n${temp}
    \n`
  );
}

function stats(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return [sum, sum / arr.length];
}
