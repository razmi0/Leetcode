const isValid = (s: string): boolean => {
  if (s.length % 2 !== 0) return false;
  let stack = [];
  let str = s.split("");
  const open = ["(", "[", "{"];
  const close = [")", "]", "}"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < open.length; j++) {
      if (str[i] === open[j]) {
        stack.push(close[j]);
      }
      if (str[i] === close[j]) {
        if (stack[stack.length - 1] === close[j]) {
          stack.pop();
        } else if (stack[stack.length - 1] !== close[j]) {
          return false;
        }
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
};

console.log(isValid("("));
console.log(isValid("()(((())))"));
console.log(isValid("()[]"));
console.log(isValid("()["));
