function licenseKeyFormatting(s: string, k: number): string {
  let res = [],
    div = 0,
    arr = s.split("").filter((l) => l != "-");

  for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    div = j % k;
    if (div == 0 && j != 0) res.push("-");
    res.push(arr[i].toUpperCase());
  }

  return res.reverse().join("");
}
