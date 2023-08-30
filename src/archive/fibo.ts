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

export function fib(size: number): number[] {
  const temp: number[] = [];
  const gen = fibGenerator();
  for (let i = 0; i < size; i++) {
    temp.push(gen.next().value);
  }
  return temp;
}
