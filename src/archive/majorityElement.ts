function majorityElement(nums: number[]): number {
  const arr: Map<number, number> = new Map();
  let target = nums.length >> 1;
  let n = 0;
  let new_val = 0;
  for (let i = 0; i < nums.length; i++) {
    n = nums[i];
    if (arr.has(n)) {
      new_val = (arr.get(n) || 0) + 1;
      if (new_val > target) break;
      arr.set(n, new_val);
    } else {
      arr.set(n, 1);
    }
  }
  return n;
}

function majorityElement2(nums: number[]): number {
  let candidate = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}
