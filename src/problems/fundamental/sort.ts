import { cL } from "../../index.js";

declare global {
  interface Array<T> {
    bubbleSort(this: number[]): number[];
  }
}

// Bubble sort
// --
Array.prototype.bubbleSort = function (this: number[]) {
  let swapped;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        swapped = true;
      }
    }
  }

  return this;
};

cL([8, 3, 0, 1, 9, 3, 9, 6, 7, 8].bubbleSort());
