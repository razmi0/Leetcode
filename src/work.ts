// type Fn = (...params: any) => any;

// const box = {
//   u_keys: new Set<string>(),
//   keys: [] as any[],
//   values: [] as any[],
// };
// console.log(box);
// function memoize(fn: Fn): Fn {
//   return function (...args) {
//     const key = args.join(",");
//     if (!box.u_keys.has(key)) {
//       box.u_keys.add(key);
//       const res = fn(...args);
//       box.values.push(res);
//       box.keys.push(key);
//       return res;
//     }
//     return box.values[box.keys.indexOf(key)];
//   };
// }

type Fn = (...params: any) => any;

const box = {
  keys: new Map(),
  values: [] as any[],
};
console.log(box);
function memoize(fn: Fn): Fn {
  const box = new Map();

  return function (...args) {
    let key = JSON.stringify(args);
    if (box.has(key)) {
      return box.get(key);
    } else {
      let ans = fn(...args);
      box.set(key, ans);
      return ans;
    }
  };
}

const memoizedSum = memoize(function (a: number, b: number): number {
  return a + b;
});

const memoizedFib = memoize(function (n: number): number {
  if (n <= 1) {
    return 1;
  }

  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

const memoizedFactorial = memoize(function (n: number): number {
  if (n <= 1) {
    return 1;
  }

  return memoizedFactorial(n - 1) * n;
});

console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5

console.log(memoizedFib(5)); // Output: Computing fib, 8
console.log(memoizedFib(5)); // Output: 8

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
