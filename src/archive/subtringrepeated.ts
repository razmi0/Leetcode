declare global {
  interface String {
    repeatedSubstringPattern(this: string): boolean;
  }
  interface StringConstructor {
    repeatedSubstringPattern(this: string): boolean;
  }
}

String.prototype.repeatedSubstringPattern = function (this: string): boolean {
  return this.repeat(2).slice(1, -1).includes(this);
};
