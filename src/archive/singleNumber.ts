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

// Inside the loop, it updates the mask variable using the XOR (^) operation.
// The XOR operation has the property that if you XOR the same number twice,
// the result is 0. Therefore, when you XOR all the numbers in the array, the
// numbers that appear twice will cancel each other out, leaving only the number
// that appears once in the mask variable.
