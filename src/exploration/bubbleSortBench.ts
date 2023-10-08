import { cL } from "../index.js";
import { perfSync } from "../utils/perf/perf.js";

const bubbleSort = (arr: number[]): number[] => {
  const len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

const bubbleSort2 = (arr: number[]): number[] => {
  const len = arr.length;
  let swapped;

  while (true) {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements arr[i] and arr[i + 1] using destructuring
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }

    if (!swapped) {
      // If no swaps were made in a pass, the array is sorted
      break;
    }
  }

  return arr;
};

const bubbleSort3 = (arr: number[]): number[] => {
  const len = arr.length;
  let swapped;

  for (let i = 0; i < len - 1; i++) {
    swapped = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements arr[j] and arr[j + 1] using destructuring
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      // If no swaps were made in a pass, the array is sorted
      break;
    }
  }

  return arr;
};

const arr = [5, 8, 2, 9, 0, 3, 7, 4, 8, 4, 2, 2, 5, 6, 8];

cL(perfSync(bubbleSort, [arr], 1000000));
cL(perfSync(bubbleSort2, [arr], 1000000));
cL(perfSync(bubbleSort3, [arr], 1000000));
