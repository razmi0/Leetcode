function findLengthOfLCIS(nums: number[]): number {
  let max = 1,
    i = 0,
    c = 1;

  do {
    if (nums[i + 1] > nums[i]) {
      c++;
    } else {
      c = 1;
    }
    if (c > max) max = c;

    i++;
  } while (i < nums.length);

  return max;
}
