function convertToTitle(columnNumber: number): string {
  let res = "",
    normal = "A".charCodeAt(0),
    base = 26;

  do {
    res = String.fromCharCode((--columnNumber % base) + normal) + res;
    columnNumber = (columnNumber / base) | 0;
  } while (columnNumber > 0);

  return res;
}

function titleToNumber(columnTitle: string): number {
  let res = 0,
    normal = "A".charCodeAt(0),
    base = 26,
    length = columnTitle.length;

  do {
    res += (columnTitle.charCodeAt(0) - normal + 1) * Math.pow(base, --length);
    columnTitle = columnTitle.slice(1);
  } while (columnTitle);

  return res;
}
