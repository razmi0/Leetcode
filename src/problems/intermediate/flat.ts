type MultiDimensionalArray = (number | MultiDimensionalArray)[];
var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n === 0) {
    return arr;
  }
  const result: MultiDimensionalArray = [];
  arr.forEach((el) => {
    if (typeof el === "number") {
      result.push(el);
    } else {
      result.push(...flat(el, n - 1));
    }
  });
  return result;
};

console.log(
  flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2)
);
