function arrangeCoins(n: number): number {
  let rowSize = 0;

  while (n > 0) {
    rowSize++;
    n -= rowSize;
  }
  return n < 0 ? rowSize - 1 : rowSize;
}
