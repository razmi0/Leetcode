function findComplement(num: number): number {
  return parseInt(
    num
      .toString(2)
      .split("")
      .map((digit) => (digit == "1" ? "0" : "1"))
      .join(""),
    2
  );
}
