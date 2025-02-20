declare global {
    interface Number {
        [Symbol.iterator](): Generator<number, void, unknown>;
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

Number.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < this.valueOf(); i++) {
        yield 0;
    }
};

String.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i < this.valueOf().length; i++) {
        yield this.valueOf()[i];
    }
    return undefined;
};

const l = 1_000_000;
// Very slow :Time (mean ± σ):     178.0 ms ±   1.6 ms    [User: 164.7 ms, System: 26.3 ms]
// --
[...l];
[..."coucou".repeat(l)];

// Slow : Time (mean ± σ):      42.1 ms ±   2.5 ms    [User: 35.8 ms, System: 7.7 ms]
// --
Array.from({ length: l }).fill(0);
"coucou".repeat(l).split("");

// Faster :  Time (mean ± σ):      16.5 ms ±   1.0 ms    [User: 13.5 ms, System: 5.2 ms]
// --
const arrf = new Array(l);
for (let i = 0; i < l; i++) {
    arrf[i] = 0;
}

// Faster + : Time (mean ± σ):      16.2 ms ±   0.4 ms    [User: 13.5 ms, System: 5.1 ms]
// --
const arrw = new Array(l);
let i = 0;
while (i < l) {
    arrw[i] = 0;
    i++;
}
// to run benchmark : ./bench.sh
