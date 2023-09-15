class NumArray {
  private sums: number[];
  constructor(nums: number[]) {
    this.sums = this.getSums(nums);
  }

  sumRange(left: number, right: number): number {
    this.sums.unshift(0);
    return this.sums[right + 1] - this.sums[left];
  }

  getSums(nums: number[]) {
    let s = 0;
    return nums.map((n) => (s += n));
  }
}
