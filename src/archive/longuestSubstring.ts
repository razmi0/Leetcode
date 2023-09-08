declare global {
  interface Array<T extends string> {
    longestCommonPrefix(this: string[]): string;
    longestCommonPrefixFast(this: string[]): string;
    longestCommonPrefix3FASTER(this: string[]): string;
  }
}

Array.prototype.longestCommonPrefix = function (this: string[]): string {
  let prefix = "";
  for (let i = 0; i < this[0].length; i++) {
    prefix = this[0].substring(0, i + 1);
    for (let j = 0; j < this.length; j++) {
      if (this[0].charAt(i) !== this[j].charAt(i) || !this[j].charAt(i)) {
        return prefix.substring(0, prefix.length - 1);
      }
    }
  }
  return prefix;
};

Array.prototype.longestCommonPrefixFast = function (this: string[]): string {
  this.sort();
  const first = this[0];
  const last = this[this.length - 1];
  let i = 0;

  while (i < first.length && i < last.length && first[i] === last[i]) i++;

  return first.substring(0, i);
};

Array.prototype.longestCommonPrefix3FASTER = function (this: string[]): string {
  const shortest = this.reduce((acc, str) => Math.min(str.length, acc), Infinity);
  let commonPrefix = this[0].slice(0, shortest + 1);

  while (commonPrefix.length > 0) {
    if (this.every((str) => str.startsWith(commonPrefix))) {
      break;
    }
    commonPrefix = commonPrefix.slice(0, commonPrefix.length - 1);
  }

  return commonPrefix;
};

console.log(["flower", "flow", "flight"].longestCommonPrefix3FASTER());
console.log(["aaaagg", "aaaagg", "aaaagg"].longestCommonPrefixFast());

console.log(["dog", "racecar", "car"]);
console.log([""]);
console.log(["a"]);
