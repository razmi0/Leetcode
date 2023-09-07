declare global {
  interface Number {
    isPalindrome(): boolean;
  }
  interface NumberConstructor {
    isPalindrome(): boolean;
  }
}

Number.prototype.isPalindrome = function (): boolean {
  return Number(this.toString().split("").reverse().join("")) === this;
};

console.log((121).isPalindrome());
