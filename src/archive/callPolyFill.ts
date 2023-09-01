declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any;
  }
}

Function.prototype.callPolyfill = function (context, ...args): any {
  return this.bind(context)(...args);
};

function tax(this: { item: string }, price: number, taxRate: number) {
  const totalCost = price * (1 + taxRate);
  console.log(`The cost of ${this.item} is ${totalCost}`);
}

tax.callPolyfill({ item: "salad" }, 10, 0.1);

function increment(this: { count: number }) {
  this.count++;
  return this.count;
}

function execute(this: { any: any }, fn: Function) {
  const arrOfCounters = [{ count: 1 }, { count: 2 }, { count: 3 }];
  const res = arrOfCounters.map((_) => {
    return fn.callPolyfill(_);
  });
  console.log(res);
}

execute.callPolyfill({ count: 0 }, increment);

increment.callPolyfill({ count: 1 }); // 2
