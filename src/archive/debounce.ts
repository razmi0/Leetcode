type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let ref: number;
  return function (...args) {
    console.log(ref);
    clearTimeout(ref);
    ref = setTimeout(fn, t, ...args);
  };
}

const log = debounce(console.log, 5);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
log("Hello"); // Logged at t=100ms
log("Hello"); // Logged at t=100ms
log("Hello"); // Logged at t=100ms
log("Hello"); // Logged at t=100ms
log("Hello"); // Logged at t=100ms

/**
 */
