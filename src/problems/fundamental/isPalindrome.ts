declare global {
  interface Number {
    isPalindrome(this: number): boolean;
  }
  interface NumberConstructor {
    isPalindrome(this: number): boolean;
  }
  interface String {
    isPalindrome(this: string): boolean;
  }
  interface StringConstructor {
    isPalindrome(this: string): boolean;
  }
}

Number.prototype.isPalindrome = function (this: number): boolean {
  return Number(this.toString().split("").reverse().join("")) === this;
};

String.prototype.isPalindrome = function (this: string): boolean {
  let s = this.toLowerCase();
  const arr = s.split("").filter((char) => /[A-Za-z0-9]/.exec(char));
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    if (arr[i] !== arr[j]) return false;
  }
  return true;
};

export {};
