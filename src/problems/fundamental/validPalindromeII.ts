function validPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;

  let deletionCount = 0;

  while (i < j) {
    if (s[i] !== s[j]) {
      let rigthEqual = s[i] == s[j - 1];
      let leftEqual = s[i + 1] == s[j];
      if (!leftEqual && !rigthEqual) {
        return false;
      }
      if (leftEqual && !rigthEqual) {
        deletionCount++;
        i++;
      }
      if (rigthEqual && !leftEqual) {
        deletionCount++;
        j--;
      }
    }

    if (deletionCount > 1) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}
