declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const obj: Record<string, any> = {};
  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]); // key
    if (obj[key]) {
      obj[key].push(this[i]);
    } else {
      obj[key] = [this[i]];
    }
  }
  return obj;
};

console.log(
  [{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(function (item) {
    return item.id;
  })
); // {"1":[1],"2":[2],"3":[3]}
