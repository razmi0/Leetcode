function intersection2(nums1: number[], nums2: number[]): number[] {
  // slow
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

function intersect(nums1: number[], nums2: number[]): number[] {
  let res: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      if (nums1[i] === nums2[j]) {
        res.push(nums1[i]);
        nums2.splice(j, 1);
        break;
      }
    }
  }
  return res;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
