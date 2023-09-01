type Obj = Record<string, any> | Array<any>;

function compactObject(obj: Obj): Obj {
  return Array.isArray(obj)
    ? obj.filter(Boolean).map(compactObject)
    : obj && typeof obj === "object"
    ? Object.assign(
        {},
        ...Object.keys(obj).map((key) =>
          obj[key] ? { [key]: compactObject(obj[key]) } : {}
        )
      )
    : obj;
}
// console.log(compactObject([null, 0, false, 1, 2, 3]));
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
