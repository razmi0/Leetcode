function isValid(s: string): boolean {
  let isValid = true;
  let sArr = s.split("");
  const open = ["(", "[", "{"];
  const close = [")", "]", "}"];
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < open.length; j++) {
      if (sArr[i] === open[j]) {
        sArr.splice(i, 1, "");
        sArr.findLast((el) => el !== close[j]);
        let idx = sArr.indexOf(close[j]);
        if (idx === -1) {
          isValid = false;
          break;
        } else {
          sArr.splice(idx, 1, "");
        }
      } else if (sArr[i] === close[j]) {
        isValid = false;
        break;
      }
      if (!isValid) break;
    }
    if (!isValid) {
      break;
    }
  }
  return isValid;
}

console.log(isValid("{()[}]")); // true
console.log(isValid("()]")); // false
console.log(isValid("}()]")); // false
console.log(isValid("([)]")); // false
