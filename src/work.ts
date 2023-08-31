class TimeLimitedCache {
  public timeLimit: (duration: number, key: number) => NodeJS.Timeout;
  public key: number;
  public value: number;
  public box: Map<number, number>;

  constructor() {
    this.key = 0;
    this.value = 0;
    this.timeLimit = (duration: number) =>
      setTimeout(() => {
        return false;
      }, duration);
    this.box = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    this.box.set(key, value);
    return true;
  }

  get(key: number): number {
    return -1;
  }

  count(): number {
    return this.box.size;
  }
}

//set(key, value, duration)
/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
