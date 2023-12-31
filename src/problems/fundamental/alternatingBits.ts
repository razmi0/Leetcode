function hasAlternatingBits(n: number): boolean {
  let bits = n.toString(2),
    i = 0;
  do {
    if (bits[i] == bits[i + 1]) return false;

    i++;
  } while (i < bits.length - 1);

  return true;
}
