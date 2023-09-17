function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  return (
    obj != null &&
    typeof classFunction === "function" &&
    Object(obj) instanceof classFunction
  );
}

class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

console.log(`Number(p) : ${checkIfInstanceOf(5, Number)} // true`); // true
console.log(`String(p) : ${checkIfInstanceOf(5, String)} // false`); // true
console.log(`Bool(p) : ${checkIfInstanceOf(false, Boolean)} // true`); // true
console.log(`Date : ${checkIfInstanceOf(new Date(), Date)} // true`); // true
const dog = new Animal("Nita");
console.log(`Animal : ${checkIfInstanceOf(dog, Animal)} // true`); // true
console.log(`Array : ${checkIfInstanceOf([], Array)} // true`); // true
console.log(`? : ${checkIfInstanceOf(5n, BigInt)} // true`); // true
