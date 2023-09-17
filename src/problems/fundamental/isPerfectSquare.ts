function isPerfectSquare(num: number): [number, boolean] {
  if (num == 1) return [1, true];
  let left = 0,
    right = num,
    pivot = 0,
    temp = 0;

  while (left <= right) {
    pivot = Math.floor(left + (right - left) / 2);
    temp = pivot ** 2;
    if (temp == num) return [pivot, true];
    if (temp > num) {
      right = pivot - 1;
    } else if (temp < num) {
      left = pivot + 1;
    } else {
      return [pivot, true];
    }
  }
  return [pivot, false];
}
