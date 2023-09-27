function detectCapitalUse(word: string): boolean {
  let sum = 0,
    first = false;
  for (let i = 0, hint = 0; i < word.length; i++, hint = 0) {
    if (word.charCodeAt(i) - 90 <= 0) hint = 1;
    if (i == 0 && hint == 1) first = true;
    sum += hint;
  }

  return sum == word.length || sum == 0 || (sum == 1 && first) ? true : false;
}

// All letters in this word are capitals, like "USA". // sum == word.length
// All letters in this word are not capitals, like "leetcode". sum == 0
// Only the first letter in this word is capital, like "Google". sum == 1

// upper : 65 à 90
// lower : 97 à 122
