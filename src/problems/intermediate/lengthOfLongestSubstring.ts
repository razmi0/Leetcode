function lengthOfLongestSubstring(s: string) {
  let res: string[] = [];
  let max = 0;

  for (const char of s) {
    const index = res.indexOf(char);
    if (index !== -1) {
      res = res.slice(index + 1);
    }
    res.push(char);
    max = Math.max(max, res.length);
  }

  return max;
}
