type Callback = (...args: any[]) => any;
type Values = {
  callbacks: Callback[];
};
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  public events: Map<string, Values>;
  constructor() {
    this.events = new Map();
  }
  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, {
        callbacks: [],
      });
    }
    const { callbacks } = this.events.get(eventName) ?? { callbacks: [] };
    callbacks.push(callback);

    return {
      unsubscribe: () => {
        const { callbacks } = this.events.get(eventName) ?? { callbacks: [] };
        callbacks.splice(callbacks.indexOf(callback), 1);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    const { callbacks } = this.events.get(eventName) ?? { callbacks: [] };
    return callbacks.map((cb) => cb(...args)) ?? [];
  }
}

class EventEmitterWithSet {
  // Rewrite with Map<string, Set<Callback>> // less scalable but wide memory improvement
  private events = new Map<string, Set<Callback>>();

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events.has(eventName)) this.events.set(eventName, new Set());
    this.events.get(eventName)?.add(callback);
    return {
      unsubscribe: () => {
        this.events.get(eventName)?.delete(callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    const results: ReturnType<Callback>[] = [];
    for (const callback of this.events.get(eventName)?.values() ?? results) {
      results.push(callback(...args));
    }
    return results;
  }
}
