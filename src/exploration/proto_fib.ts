declare global {
    interface Number {
        [Symbol.iterator](): Generator<number, void, unknown>;
        fibonacci: () => number[];
    }
    interface NumberConstructor {
        [Symbol.iterator](): Generator<number, void, unknown>;
    }

    interface String {
        [Symbol.iterator](): Generator<string, void, unknown>;
    }
    interface StringConstructor {
        [Symbol.iterator](): Generator<string, void, unknown>;
    }
}

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

Number.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < this.valueOf(); i++) {
        yield i + 1;
    }
};

String.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < this.valueOf().length; i++) {
        yield this.valueOf()[i];
    }
    return undefined;
};

[...1, ...2, ...10, ...20, ...3, ...7, ...2].map((i) => console.log(i));

console.log("coucou".split(""));
console.log([..."coucou"]);

for (const x of "COUCOU") console.log(x);

//
//
// console.log([(i: number) => setTimeout(() => console.log(` ${i} `), i)].copyWithin(-1, 0, 2));
// console.log([...5]); // [ 0, 1, 2, 3, 4 ]
// for (const i of 5) console.log(i); // 0 1 2 3 4

// console.log("fib gen : " + (20).fibonacci()); // Array
