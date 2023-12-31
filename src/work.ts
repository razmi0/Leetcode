// import { perf } from "./perf.js";
// import { fib } from "./archive/fibo.js";
// import { asyncPerf } from "./asyncPerf.js";

// export { perf, fib, asyncPerf };

// perf(fib, [10]);

declare global {
  interface Number {
    [Symbol.iterator](): Generator<number, void, unknown>;
  }
  interface NumberConstructor {
    [Symbol.iterator](): Generator<number, void, unknown>;

    [Symbol.asyncIterator](): AsyncGenerator<number, void, unknown>;

    [Symbol.toStringTag]: string;

    [Symbol.hasInstance](instance: any): boolean;

    [Symbol.isConcatSpreadable]: boolean;

    [Symbol.unscopables]: {
      [Symbol.toStringTag]: boolean;
    };
  }
}

declare global {
  interface Number {
    convert(): number;
    fib(): number;
  }
  interface NumberConstructor {
    convert(): number;
    fib(): number;
  }
}

declare global {
  interface Object {
    [Symbol.iterator](): Generator<any, void, unknown>;
  }
  interface ObjectConstructor {
    [Symbol.iterator](): Generator<any, void, unknown>;
  }
}

// Number.prototype[Symbol.iterator] = function* () {
//   for (let i = 0; i < (this as number); i++) {
//     yield i;
//   }
// };

Number.prototype.convert = function (): number {
  return this.valueOf() + 10;
};

Number.prototype[Symbol.iterator] = function* () {
  yield 0;
  let a = 1;
  let b = 1;
  while (this.valueOf() > a) {
    yield a;
    [a, b] = [b, a + b];
  }
};

console.log("Symbol.iterator :>> ...5 "); // fib
console.log(...20);
console.log("end");

console.log((5).convert()); // 0.005

// Here we will see how to use the iterator protocol to iterate over objects and arrays.

// Object.prototype[Symbol.iterator] = function* () {
//   for (let key in this) {
//     yield (this as any)[key];
//   }
// };
// now that we call Object.constructor.prototype[Symbol.iterator] = function* () {} we can iterate over any object
// for example:

const obj23 = {
  a: "Here ",
  b: 2,
  c: 3,
};

// Here
// 2
// 3

// console.log("incredible : ", ...obj23); // with Object.prototype[Symbol.iterator] = function* () {} we can iterate over any object

console.log([...20]); // [0, 1, 2, 3, 4]
console.log(typeof [...20]); // object
console.log(Object.keys([...10]));
console.log(Object.values([...10]));

const arr = [1, 2, 3, 4, 5];
const it = arr[Symbol.iterator]();
// console.log(it.next()); // { value: 1, done: false }
// console.log(it.next()); // { value: 2, done: false }
// console.log(it.next()); // { value: 3, done: false }
// console.log(it.next()); // { value: 4, done: false }
// console.log(it.next()); // { value: 5, done: false }
// console.log(it.next()); // { value: undefined, done: true }

const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    for (let key in this) {
      yield (this as any)[key] + 40 + " units";
    }
  },
};
//   },

console.log([...obj]); // [1, 2, 3]

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    yield this.a;
    yield this.b;
    yield this.c;
  },
};

console.log([...obj2]); // [1, 2, 3]

const obj3 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    yield* Object.values(this);
  },
};

console.log([...obj3]); // [1, 2, 3]

const obj4 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    yield* Object.entries(this);
  },
};

console.log([...obj4]); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

const obj5 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    yield* Object.keys(this);
  },
};

console.log([...obj5]); // [ 'a', 'b', 'c' ]

const obj6 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    yield* Object.getOwnPropertyNames(this);
  },
};

console.log([...obj6]); // [ 'a', 'b', 'c' ]

const obj7 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function* () {
    yield* Object.getOwnPropertySymbols(this);
  },
};

console.log([...obj7]); // [ Symbol(a), Symbol(b), Symbol(c) ]

const obj8 = {
  a: 1,
  b: 289,
  c: 3,
  [Symbol.iterator]: function* () {
    yield Object.getOwnPropertyDescriptors(this);
  },
};

console.log([...obj8]); // [ { value: 1, writable: true, enumerable: true, configurable: true }, { value: 2, writable: true, enumerable: true, configurable: true }, { value: 3, writable: true, enumerable: true, configurable: true } ]
