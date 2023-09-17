declare global {
  interface Number {
    split(this: number, separator: string): number[];
  }
}

Number.prototype.split = function (this: number, separator: string): number[] {
  return this.toString()
    .split(separator)
    .map((n) => +n);
};

function isHappy(n: number): boolean {
  let res = 0;
  let arrN = n.split("");
  while (res !== 1) {
    res = arrN.reduce((acc, cur) => (acc += Math.pow(cur, 2)), 0);
    if (res === 4) return false;
    arrN = res.split("");
  }
  return true;
}

console.log(isHappy(19));
