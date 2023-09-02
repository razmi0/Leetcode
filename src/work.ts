import { asyncPerf } from "./asyncPerf.js";

console.log(
  asyncPerf(
    (arg: string) => {
      return arg;
    },
    ["---"],
    100
  )
);
