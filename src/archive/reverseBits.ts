function reverseBits(n: number) {
  if (!n) return 0;

  let ans = 0;

  for (let i = 0; i < 32; i++) {
    ans = ans * 2 + (n & 1);
    n >>>= 1;
  }

  return ans;
}

function hammingWeight(n: number): number {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & 1) === 1) {
      count++;
    }
    n >>= 1;
  }
  return count;
}
