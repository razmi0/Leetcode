function addDigits2(num: number): number {
  const digits = num
    .toString()
    .split("")
    .map((x) => +x);
  for (let i = 0; i < digits.length; i++) {
    if (digits.length === 1) {
      return digits[0];
    }
    if (i === digits.length - 1) {
      return addDigits(digits.reduce((a, b) => a + b));
    }
  }
  return 0;
}

function addDigits(num: number): number {
  return 1 + ((num - 1) % 9);
}
