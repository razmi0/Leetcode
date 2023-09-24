function longestPalindrome(s: string): number {
  const occMap: Record<string, number> = {
    remains: 0,
    count: 0,
  };

  for (let i = 0; i < s.length; i++) {
    if (!occMap[s[i]]) {
      occMap[s[i]] = 1;
      occMap.remains++;
      continue;
    }
    occMap[s[i]]++;
    if (occMap[s[i]] > 1) {
      occMap[s[i]] = 0;
      occMap.remains--;
      occMap.count += 2;
    }
  }

  return occMap.remains > 0 ? occMap.count + 1 : occMap.count;
}
console.log(longestPalindrome("abbcccbba")); // 4
// console.log(longestPalindrome("acbba")); // 0
// console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("abccccdd")); // 1
// dccaccd

// finalArr = [],
// halfEndArr = [],

// finalArr.push(letter);
// halfEndArr.push(letter);

// if (remains.length > 0) {
// finalArr.push(remains[0]);
// count++;
// }
// finalArr = finalArr.concat(halfEndArr.reverse());

// console.log("remain  :  ", remains);
// console.log("arr  :  ", finalArr);
