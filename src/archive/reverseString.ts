function reverseString(s: string[]): void {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) [s[i], s[j]] = [s[j], s[i]];
}

function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const sArr = s.split("");
  let matches: number[] = [];

  for (let i = 0; i < sArr.length; i++) {
    if (vowels.includes(sArr[i])) {
      matches.push(i);
    }
  }

  // console.log(matches);
  matches.reverse();
  // console.log(matches);

  for (let i = 0, j = 0; i < sArr.length; i++) {
    if (vowels.find((vowel) => vowel === sArr[i])) {
      sArr[i] = s[matches[j]];
      j++;
    }
  }

  return sArr.join("");
}

function reverseVowels2(s: string): string {
  const vowels: string[] = s.match(/[aeiou]/gi) || [];

  if (vowels.length < 2) {
    return s;
  }
  return s.replace(/[aeiou]/gi, () => vowels.pop() || "");
}
