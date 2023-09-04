declare global {
  interface Number {
    [Symbol.iterator](): Generator<number, void, unknown>;
    fibonacci: () => number[];
  }
  interface NumberConstructor {
    [Symbol.iterator](): Generator<number, void, unknown>;
  }
}

Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i < this.valueOf(); i++) {
    yield i;
  }
};

Number.prototype.fibonacci = function (): number[] {
  const temp: number[] = [];
  const gen = fibGenerator();
  for (let i = 0; i < this.valueOf(); i++) {
    temp.push(gen.next().value);
  }
  return temp;
};

function* fibGenerator(): Generator<number, any, number> {
  yield 0; // premiere appel [0]
  yield 1; // deuxieme appel [0,1]

  let a = 0;
  let b = 1;

  while (true) {
    const c = a + b; // c = 0 + 1 // c = 1 + 1
    a = b; // a = 1 // a = 1
    b = c; // b = 1 // a = 2
    yield c; // 1
  }
}

console.log([...20]);
console.log(typeof [...20]);

console.log("fib gen : " + (20).fibonacci()); // Array
