function checkPerfectNumber1(num: number): boolean {
  if (num == 1) return false;
  let div = 1,
    sum = 0;
  do {
    if (num % div == 0) sum += div;
    div++;
  } while (div < num);
  return sum == num ? true : false;
}

function checkPerfectNumber(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  let sum = 1; // 1 is always a divisor

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) {
        // Avoid adding the same divisor twice for perfect squares
        sum += num / i;
      }
    }
  }

  return sum === num;
}
