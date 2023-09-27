function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let res = [],
    idx = 0;
  for (let i = 0; i < nums1.length; i++) {
    idx = nums2.indexOf(nums1[i]);
    for (let j = idx; j < nums2.length; j++) {
      if (nums2[idx] < nums2[j]) {
        res.push(nums2[j]);
        break;
      }
      if (j == nums2.length - 1) {
        res.push(-1);
        break;
      }
    }
  }
  return res;
}
