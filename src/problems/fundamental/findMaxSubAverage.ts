function findMaxAverage(nums: number[], k: number): number {
  let sum = 0,
    j = 0,
    max = -Infinity,
    av = 0;

  for (let i = 0; i < nums.length - k + 1; i++) {
    for (j = i, sum = 0; j < k + i; j++) {
      sum += nums[j];
    }
    av = sum / k;
    max = Math.max(max, av);
  }

  return max;
}
