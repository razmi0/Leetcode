import { perf } from "../perf.js";
// console.log(
//   perf(
//     (arg: string) => {
//       return arg;
//     },
//     ["---"],
//     729
//   )
// );

function wordPattern(pattern: string, s: string): boolean {
  const sA = s.split(" ");
  if (sA.length !== pattern.length) {
    return false;
  }
  let l = "";
  const mp = new Map();
  const ms = new Map();
  for (let i = 0; i < s.length; i++) {
    l = pattern[i];
    if (ms.has(l) && ms.get(pattern[i]) !== sA[i]) return false;
    if (mp.has(sA[i]) && mp.get(sA[i]) !== l) return false;
    ms.set(l, sA[i]);
    mp.set(sA[i], l);
  }
  return true;
}
(async () => {
  const a = perf(wordPattern, ["abba", "dog cat cat fish"], 10) // false
    .then(console.log);
})();
