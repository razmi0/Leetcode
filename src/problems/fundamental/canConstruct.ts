// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false;
  const hashmap: Record<string, number> = {};
  for (let i = 0; i < magazine.length; i++) {
    hashmap[magazine[i]] = (hashmap[magazine[i]] || 0) + 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!hashmap[ransomNote[i]]) return false;
    if (hashmap[ransomNote[i]]) hashmap[ransomNote[i]]--;
    if (hashmap[ransomNote[i]] < 0) return false;
  }
  return true;
}
