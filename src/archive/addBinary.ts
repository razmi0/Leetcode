function addBinary(a: string, b: string) {
  let binSum: number | BigInt = 0;
  if (a.length < 16 && b.length < 16) {
    binSum = parseInt(a, 2) + parseInt(b, 2);
  } else {
    binSum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  }
  return binSum.toString(2);
}
