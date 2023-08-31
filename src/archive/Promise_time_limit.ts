type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const pT = new Promise((resolve, reject) =>
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t)
    );
    const pFn = fn(...args);

    return Promise.race([pFn, pT]);
  };
}

function timeLimitOther(fn: Fn, t: number): Fn {
  return function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((resolve, reject) => {
        return setTimeout(reject, t, "Time Limit Exceeded");
      }),
    ]);
  };
}

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(200).catch(console.log); // "Time Limit Exceeded" at t=100ms
const limitedOther = timeLimitOther(
  (t) => new Promise((res) => setTimeout(res, t)),
  100
);
limited(200).catch(console.log); // "Time Limit Exceeded" at t=100ms
