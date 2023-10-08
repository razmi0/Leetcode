function maxCount(m: number, n: number, ops: number[][]): number {
  if (ops.length == 0) return m * n;
  let arr = ops.flat(),
    rows = [],
    cols = [];

  for (let i = 0; i < arr.length; i += 2) {
    rows.push(arr[i]);
    cols.push(arr[i + 1]);
  }

  return Math.min(...rows) * Math.min(...cols);
}

function maxCount2(m: number, n: number, ops: number[][]): number {
  for (let [x, y] of ops) {
    if (x < m) m = x;
    if (y < n) n = y;
  }

  return m * n;
}
