// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without
// disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = (s: string, t: string): boolean => {
  let i = 0,
    tLen = t.length,
    j = 0,
    sLen = s.length;

  if (sLen > tLen) return false;
  if (sLen == 0) return true;

  do {
    if (s[i] == t[j]) {
      i++;
    }
    j++;
  } while (i < sLen && j < tLen);

  return i == sLen;
};
