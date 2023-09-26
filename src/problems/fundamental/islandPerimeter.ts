function islandPerimeter(grid: number[][]): number {
  let coast = 0,
    row = [],
    prevRow = [],
    nextRow = [],
    left = 0,
    right = 0,
    above = 0,
    below = 0;

  for (let i = 0; i < grid.length; i++) {
    row = grid[i];
    prevRow = i > 0 ? grid[i - 1] : [];
    nextRow = i < grid.length - 1 ? grid[i + 1] : [];

    for (let j = 0; j < row.length; j++) {
      if (row[j] == 1) {
        left = j > 0 ? row[j - 1] : 0;
        right = j < row.length - 1 ? row[j + 1] : 0;
        above = prevRow.length > 0 ? prevRow[j] : 0;
        below = nextRow.length > 0 ? nextRow[j] : 0;

        coast += 4 - (left + right + above + below);
      }
    }
  }

  return coast;
}
