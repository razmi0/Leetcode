function romanToInt(s: string): number {
  let sum = 0;
  const roman_values = [1, 5, 10, 50, 100, 500, 1000];
  const roman_keys = ["I", "V", "X", "L", "C", "D", "M"];
  const length = roman_keys.length;
  const regExps: [RegExp, number][] = [];
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      regExps.push([
        new RegExp(`${roman_keys[i]}${roman_keys[j]}`, "g"),
        roman_values[j] - roman_values[i],
      ]);
    }
  }
  for (let i = 0; i < length; i++) {
    regExps.push([new RegExp(`${roman_keys[i]}`, "g"), roman_values[i]]);
  }
  let matches = 0;
  for (let i = 0; i < regExps.length; i++) {
    matches = s.match(regExps[i][0])?.length || 0;
    if (matches > 0) {
      s = s.replace(regExps[i][0], "");
      sum += regExps[i][1] * matches;
      if (s.length < 1) break;
    }
  }
  return sum;
}
function intToRoman(num: number): string {
  const romans_keys = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const roman_values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let length = roman_values.length;
  let res = "";
  let n = 0;
  for (let i = 0; i < length; i++) {
    n = num / roman_values[i];
    if (n >= 1) {
      res += romans_keys[i].repeat(n);
      num = num % roman_values[i];
    }
    if (num === 0) break;
  }
  return res;
}
