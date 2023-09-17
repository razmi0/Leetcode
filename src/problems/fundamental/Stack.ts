class MyStack {
  private stack: number[];
  private size: number;
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(x: number): void {
    this.stack.push(x);
    this.size++;
  }

  pop(): number {
    this.size--;
    return this.stack.pop() || 0;
  }

  top(): number {
    let temp = 0;
    temp = this.stack[this.size - 1];
    return temp;
  }

  empty(): boolean {
    return this.size === 0 ? true : false;
  }
}
