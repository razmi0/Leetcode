async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  return new Promise(async (resolve, reject) => {
    let results: T[] = new Array(functions.length);
    let count = 0;
    functions.map((fn, i) => {
      fn()
        .then((result) => {
          results[i] = result;
          count++;
          if (count === functions.length) resolve(results);
        })
        .catch((err) => reject(err));
    });
  });
}
