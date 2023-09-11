function singleNumber2(nums: number[]): number {
  let lookup: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    if (!Object.hasOwn(lookup, nums[i])) {
      lookup[nums[i]] = 1;
      continue;
    }
    delete lookup[nums[i]];
  }
  return +Object.entries(lookup)[0][0];
}

function singleNumber(nums: number[]): number {
  let mask = 0;

  for (const num of nums) {
    mask ^= num;
  }

  return mask;
}
