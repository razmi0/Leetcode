function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
    if (i === nums.length - 1) return nums.length;
  }
  return 1;
}
