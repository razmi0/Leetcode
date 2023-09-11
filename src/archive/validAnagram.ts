function subsets(nums: number[]): number[][] {
  let result: number[][] = [[]];

  function recurse(index: number, currArr: number[]) {
    for (let i = index; i < nums.length; i++) {
      currArr.push(nums[i]);
      result.push([...currArr]);
      recurse(i + 1, currArr);
      currArr; // backtrack
    }
  }
  recurse(0, []);
  return result;
}

// TEST

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let map: Record<string, number> = {};

  for (let letter of s) {
    map[letter] = (map[letter] || 0) + 1;
  }
  for (let letter of t) {
    console.log(map);
    if (!map[letter]) return false;
    map[letter]--;
  }
  return true;
}

// TEST
