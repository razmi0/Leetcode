// UTILS
// Bitwise operators & bit manipulation
// Operators: & | ^ ~ << >> >>>

const n = 4;
console.log("multiplication by 2  : " + (n << 1));
console.log("multiplication by 4  : " + (n << 2));
console.log("multiplication by 8  : " + (n << 3));
console.log("multiplication by 16 : " + (n << 4));

//
console.log("division by 2 : " + (n >> 1));
console.log("division by 2 (without sign) : " + (n >>> 1));
console.log("division by 4 : " + (n >> 2));
console.log("division by 4 (without sign) : " + (n >>> 2));
console.log("check if number is odd : " + (n & 1));
console.log("check if number is even : " + (n & 2));
console.log("set number to odd : " + (n | 1));
console.log("set number to even : " + (n & ~1));

// ^
console.log("toggle the 3rd bit : " + (n ^ 4));
console.log("toggle the 3rd bit : " + (n ^ 8));
console.log("toggle the 3rd bit : " + (n ^ 16));

// Looping multiple times over object/array
// let i = 0,
//   arr = [1, 2, 3, 4, 5],
//   nbrOfLoop = 2,
//   front = 0;
// while (i < arr.length * nbrOfLoop) {
//   front = arr.shift() || 0;
//   // Instructions
//   arr.push(front);
// }
