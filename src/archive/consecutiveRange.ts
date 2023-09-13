function summaryRanges(nums: number[]): string[] {
  let res: string[] = [],
    consecutive: string = "";

  for (let i = 0; i < nums.length; i++) {
    consecutive = `${nums[i]}`;
    if (isConsecutive(nums, i)) {
      while (isConsecutive(nums, i)) i++;
      consecutive += `-->${nums[i]}`;
    }
    res.push(consecutive);
  }

  return res;
}

function isConsecutive(nums: number[], i: number): boolean {
  return nums[i] + 1 === nums[i + 1] ? true : false;
}
