function reverseStr(s: string, k: number): string {
  if (k >= s.length) return s.split("").reverse().join("");
  let arr = [],
    temp = [],
    reverseIt = false;

  for (let i = 0; i < s.length; i++) {
    temp.push(s[i]);

    if (i % k == 0) reverseIt = !reverseIt;
    if (temp.length == k && reverseIt) {
      arr.push(temp.reverse());
      temp = [];
    } else if (temp.length == k && !reverseIt) {
      arr.push(temp);
      temp = [];
    }
  }

  if (temp.length > 0) arr.push(temp);

  return arr.flat().join("");
}
