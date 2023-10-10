function findErrorNums(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const res = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] == nums[i]) {
      res[0] = nums[i];
    }
  }
  for (let i = nums.length; i >= 1; i--) {
    if (nums.indexOf(i) === -1) {
      res[1] = i;
    }
  }
  return res;
}
