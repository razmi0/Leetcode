import chalk from "chalk";
import process from "node:process";

// UTILS
// Bitwise operators & bit manipulation
// Operators: & | ^ ~ << >> >>>

const _ = console.log;
const cY = chalk.yellow;
const cR = chalk.red;
const cG = chalk.green;
const cB = chalk.blue;
let n: number = +process.argv[2];

_(cR("n = " + n));
_(cB("multiplication "));
_(cG("by 2 : ") + cY(n << 1));
_(cG("by 4 : ") + cY(n << 2));
_(cG("by 8 : ") + cY(n << 3));
_(cG("by 16 : ") + cY(n << 4));

//
_(cB("division ")); // >>> for unsigned
_(cG("by 2 : ") + cY(n >> 1));
_(cG("by 4 : ") + cY(n >> 2));
_(cG("by 8 : ") + cY(n >> 3));
_(cG("by 16 : ") + cY(n >> 4));

_(cB("odd or even ? "));
_(cG("odd : ") + cY(n & 1));
_(cG("even : ") + cY(n & 0));

_(cB("set to odd or even "));
_(cG("set number to odd : ") + cY(n | 1));
_(cG("set number to even : ") + cY(n & ~1));

// ^
_(cB("toggle bits"));
_(cG("toggle bit 1 : ") + cY(n ^ 1));
_(cG("toggle bit 2 : ") + cY(n ^ 2));
_(cG("toggle bit 3 : ") + cY(n ^ 3));

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
