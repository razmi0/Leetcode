function intersection2(nums1: number[], nums2: number[]): number[] {
  let res: Set<number> = new Set();
  for (const n of nums1) {
    for (const m of nums2) {
      if (n === m) {
        res.add(n);
      }
    }
  }
  return [...res];
}

function intersection1(nums1: number[], nums2: number[]): number[] {
  let res: number[] = [];
  for (const n of nums1) {
    for (const m of nums2) {
      if (n === m) {
        res.push(n);
      }
    }
  }
  return [...new Set(res)];
}

function intersection(nums1: number[], nums2: number[]): number[] {
  const hashTable = new Set(nums1);
  return nums2.filter((num) => hashTable.delete(num));
}
