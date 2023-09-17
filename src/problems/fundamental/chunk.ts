import chalk from "chalk";

function chunk(arr: any[], size: number): any[][] {
  let beginIdx = 0;
  if (arr.length === 0) {
    return arr;
  }
  if (size > arr.length) {
    return [arr];
  }
  let array_size = Math.ceil(arr.length / size);
  let result = Array.from({ length: array_size }, () => []);
  result.map((el: any[]) => {
    for (let i = 0; i < size; i++) {
      if (arr[beginIdx] || arr[beginIdx] === 0) {
        el.push(arr[beginIdx]);
      }
      beginIdx++;
    }
  });

  return result;
}

console.log(`${chalk.blue("[RESULT]")} : ${chunk([4, 5, 6, 7, 8, 9], 3)}`);
console.log(`${chalk.blue("[RESULT]")} : ${chunk([1, 2, 3, 4, 5], 1)}`);
console.log(`${chalk.blue("[RESULT]")} : ${chunk([1, 9, 6, 3, 2], 3)}`);
console.log(`${chalk.blue("[RESULT]")} : ${chunk([8, 5, 3, 2, 6], 6)}`);
console.log(`${chalk.blue("[RESULT]")} : ${chunk([], 1)}`);
console.log(
  `${chalk.blue("[RESULT]")} : ${chunk(
    [42, 10, 19, 6, 8, 7, 9, 325, 0, 428, 23, 757],
    3
  )}`
);
