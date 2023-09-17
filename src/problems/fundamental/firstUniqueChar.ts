// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

function firstUniqChar(s: string): number {
  const hashmap: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    hashmap[s[i]] = (hashmap[s[i]] || 0) + 1;
  }

  for (let letter in hashmap) {
    if (hashmap[letter] == 1) {
      return s.indexOf(letter);
    }
  }

  return -1;
}
