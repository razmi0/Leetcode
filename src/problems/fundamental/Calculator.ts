class Calculator {
  public v: number;
  constructor(value: number) {
    this.v = value;
  }

  add(value: number): Calculator {
    this.v += value;
    return this;
  }

  subtract(value: number): Calculator {
    this.v -= value;
    return this;
  }

  multiply(value: number): Calculator {
    this.v *= value;
    return this;
  }

  divide(value: number): Calculator {
    if (value === 0) throw new Error("Division by zero is not allowed");
    this.v /= value;
    return this;
  }

  power(value: number): Calculator {
    this.v **= value;
    return this;
  }

  getResult(): number {
    return this.v;
  }
}
