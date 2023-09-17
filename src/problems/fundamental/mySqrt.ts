function mySqrt(x: number): number {
  if (x === 0) return 0;
  let length = Math.ceil(x.toString().length / 2);
  let n = 1 * length;
  while (true) {
    if (n * n > x) {
      return n - 1;
    }
    n += 1;
  }
}
