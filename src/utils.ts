// UTILS
// Bitwise operators & bit manipulation
// Operators: & | ^ ~ << >> >>>

const n = 2;
console.log("multiplication by 2 : " + (n << 1));
console.log("multiplication by 4 : " + (n << 2));
console.log("multiplication by 8 : " + (n << 3));
console.log("multiplication by 16 : " + (n << 4));

console.log("division by 2 : " + (n >> 1));
console.log("division by 2 (without sign) : " + (n >>> 1));
console.log("division by 4 : " + (n >> 2));
console.log("division by 4 (without sign) : " + (n >>> 2));
console.log("check if number is odd : " + (n & 1));
console.log("check if number is even : " + (n & 2));
console.log("set number to odd : " + (n | 1));
console.log("set number to even : " + (n & ~1));
