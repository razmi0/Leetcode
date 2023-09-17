function canWinNim(n: number): boolean {
  while (n > 0) {
    if (n <= 3) return true;
    n -= 4;
  }
  return false;
}
