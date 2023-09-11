function generate(numRows: number): number[][] {
  const table: number[][] = [[1]];
  if (numRows === 0) {
    return [[]];
  }
  if (numRows === 1) {
    return table;
  }
  numRows -= 1;

  for (let i = 0, newCol = 0, newRow = []; i < table.length; i++, newCol = 0, newRow = []) {
    let prevRow = table[i];
    newRow.push(1);

    for (let j = 0; j < prevRow.length - 1; j++) {
      newCol = prevRow[j] + prevRow[j + 1];
      newRow.push(newCol);
    }

    newRow.push(1);

    table.push(newRow);

    numRows--;
    if (numRows < 1) {
      break;
    }
  }

  return table;
}

function getRow(rowIndex: number): number[] {
  const row = new Array(rowIndex + 1);
  row[0] = 1;
  row[rowIndex] = 1;
  for (let i = 1; i < row.length - 1; i++) {
    row[i] = (row[i - 1] * (rowIndex - (i - 1))) / i;
  }
  return row;
}
