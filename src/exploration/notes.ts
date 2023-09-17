// UTILS
// Bitwise operators & bit manipulation
// Operators: & | ^ ~ << >> >>>

import chalk from "chalk";

const n = 12;
console.log(chalk.red("n = " + n));
console.log(chalk.blue("multiplication "));
console.log(chalk.green("by 2 : ") + chalk.yellow(n << 1));
console.log(chalk.green("by 4 : ") + chalk.yellow(n << 2));
console.log(chalk.green("by 8 : ") + chalk.yellow(n << 3));
console.log(chalk.green("by 16 : ") + chalk.yellow(n << 4));

//
console.log(chalk.blue("division ")); // >>> for unsigned
console.log(chalk.green("by 2 : ") + chalk.yellow(n >> 1));
console.log(chalk.green("by 4 : ") + chalk.yellow(n >> 2));
console.log(chalk.green("by 8 : ") + chalk.yellow(n >> 3));
console.log(chalk.green("by 16 : ") + chalk.yellow(n >> 4));

console.log(chalk.blue("odd or even ? "));
let a = (n & 1) == 0;
let b = (n & 0) == 0;
console.log(chalk.green("odd : ") + chalk.yellow(a));
console.log(chalk.green("even : ") + chalk.yellow(b));

console.log(chalk.blue("set to odd or even "));
console.log(chalk.green("set number to odd : ") + chalk.yellow(n | 1));
console.log(chalk.green("set number to even : ") + chalk.yellow(n & ~1));

// ^
console.log(chalk.blue("toggle bits"));
console.log(chalk.green("toggle bit 1 : ") + chalk.yellow(n ^ 1));
console.log(chalk.green("toggle bit 2 : ") + chalk.yellow(n ^ 2));

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
