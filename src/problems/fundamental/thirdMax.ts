function thirdMax(nums: number[]): number {
  nums = Array.from(new Set(nums)).sort((a, b) => b - a);
  return nums.length < 3 ? nums[0] : nums[2];
}
