function findLHS(nums: number[]): number {
  let c = 0,
    sum = 0,
    max = 0,
    withMax = false;

  // nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    (c = 0), (withMax = false);

    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[j] - nums[i];
      if (sum == 0 && withMax) c++;
      if (sum == 1) {
        c++;
        withMax = true;
      }
      if (c == 1) c++;
      if (c > max) max = c;
    }
  }
  return max;
}
