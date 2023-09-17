function maxSubArray(nums: number[]): number {
  let [sum, max] = [0, nums[0]];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}
