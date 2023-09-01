interface TTLValue {
  value: number;
  timer: ReturnType<typeof setTimeout>;
}

class TimeLimitedCache {
  cache = new Map<number, TTLValue>();

  set(key: number, value: number, duration: number): boolean {
    const exists = this.cache.has(key);
    if (exists) clearTimeout(this.cache.get(key)?.timer);
    this.cache.set(key, { value, timer: setTimeout(() => this.cache.delete(key), duration) });
    return exists;
  }

  get(key: number): number {
    const res = this.cache.has(key) ? this.cache.get(key)?.value : -1;
    return res as number;
  }

  count(): number {
    return this.cache.size;
  }
}

//set(key, value, duration)
/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 **/ const obj = new TimeLimitedCache();

console.log("set : ", obj.set(1, 42, 1));
console.log("set : ", obj.set(12, 42, 10));
console.log("set : ", obj.set(13, 42, 100));
console.log("get : ", obj.get(1));
console.log("get : ", obj.get(12));
console.log("set : ", obj.set(12, 50, 1));
setTimeout(() => {
  console.log("get : ", obj.get(1));
}, 133);
console.log("get : ", obj.get(1));
console.log(obj.count());
