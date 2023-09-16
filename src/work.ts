function intersect(nums1: number[], nums2: number[]): number[] {
  let res: number[] = [],
    sm: number[],
    lg: number[];

  if (nums1.length > nums2.length) {
    [sm, lg] = [nums2, nums1];
  } else {
    [sm, lg] = [nums1, nums2];
  }

  for (let i = 0; i < sm.length; i++) {
    for (let j = lg.length - 1; j >= 0; j--) {
      if (sm[i] === lg[j]) {
        res.push(sm[i]);
        lg.splice(j, 1);
        break;
      }
    }
  }
  return res;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
