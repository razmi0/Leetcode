declare global {
  interface Array<T> {
    hasDuplicate(): boolean;
  }
}

Array.prototype.hasDuplicate = function (): boolean {
  return new Set(this).size !== this.length;
};

console.log([1, 2, 3, 1].hasDuplicate());
