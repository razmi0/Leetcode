function maximumProduct(nums: number[]): number {
  const s = nums.sort((a, b) => a - b);
  return Math.max(
    s[0] * s[1] * s[s.length - 1],
    s[s.length - 1] * s[s.length - 2] * s[s.length - 3]
  );
}
