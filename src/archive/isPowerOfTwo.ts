function isPowerOfTwo(n: number) {
  if (n <= 0) return false;
  return (n & (n - 1)) == 0 ? true : false;
}
