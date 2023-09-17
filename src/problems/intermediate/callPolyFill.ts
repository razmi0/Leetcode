declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any;
  }
}

// Function.prototype.callPolyfill = function (context, ...args): any {
//   return this.bind(context)(...args);
// };

Function.prototype.callPolyfill = function (context, ...args): any {
  const functionId = Symbol() as unknown as string;
  context[functionId] = this;
  // bind the function id (Symbol) to `this` which in this case is a function
  //! we are using symbol because symbol is unique so it won't override any existing property
  //! and symbol is not visible when executing Object.keys()

  return context[functionId](...args);
};

function increment(this: { count: number }) {
  this.count++;
  return this.count;
}
increment.callPolyfill({ count: 1 }); // 2
