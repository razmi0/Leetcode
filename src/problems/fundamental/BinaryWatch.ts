import { perf } from "../../utils/perf/perf.js";
// A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59).
// Each LED represents a zero or one, with the least significant bit on the right.
// For example, the below binary watch reads "4:51".

// Given a non-negative integer n which represents the number of LEDs that are currently on,
// return all possible times the watch could represent.

// Example:
// Input: n = 1
// Output: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16",
// "0:32"]

// Note:
// The order of output does not matter.

// The hour must not contain a leading zero, for example "01:00" is not valid,
// it should be "1:00".

// The minute must be consist of two digits and may contain a leading zero,
// for example "10:2" is not valid, it should be "10:02".

class BinaryWatch {
  clock: string[] = [];
  constructor(turnOn: number) {
    this.clock = this.read(turnOn);
  }
  countOnes(num: number): number {
    return num.toString(2).split("1").length - 1;
  }
  read(turnOn: number): string[] {
    let times = [];
    for (let h = 0; h < 12; h++) {
      for (let m = 0; m < 60; m++) {
        if (this.countOnes(h) + this.countOnes(m) === turnOn) {
          times.push(`${h}:${String(m).padStart(2, "0")}`);
        }
      }
    }
    return times;
  }
}

const bW = new BinaryWatch(1);
console.log(bW.clock);

const readBinaryWatch = (turnedOn: number): string[] => {
  const times = [];

  const countOnes = (num: number) => {
    return num.toString(2).split("1").length - 1;
  };

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (countOnes(h) + countOnes(m) === turnedOn) {
        times.push(`${h}:${String(m).padStart(2, "0")}`);
      }
    }
  }

  return times;
};

// perf(readBinaryWatch, [1], 1).then(console.log);
