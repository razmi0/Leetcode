/**
 Do not return anything, modify nums1 in-place instead.
 */
type N = number;
function merge(nums1: N[], m: N, nums2: N[], n: N): void {
  for (let i = m, j = 0; i < m + n; i++, j++) {
    nums1[i] = nums2[j];
  }
  nums1.sort((a, b) => a - b);
}
