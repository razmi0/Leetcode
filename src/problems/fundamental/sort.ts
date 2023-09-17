declare global {
  interface Array<T> {
    mySort(this: number[]): number[];
  }
}

// Bubble sort
// --
Array.prototype.mySort = function (this: number[]) {
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
