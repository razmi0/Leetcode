function isPowerOfTwo(n: number) {
  if (n <= 0) return false;
  return (n & (n - 1)) == 0 ? true : false;
}

declare global {
  interface Number {
    isPowerOf(this: number, n: number): boolean;
  }
}

Number.prototype.isPowerOf = function (this: number, n: number) {
  return n > 0 && (Math.log10(n) / Math.log10(this)) % 1 === 0;
};

const n = 2;
