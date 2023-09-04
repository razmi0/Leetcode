import { perf } from "./perf.js";
perf((a, b) => a + b, [1, 2], 1000).then(console.log);
