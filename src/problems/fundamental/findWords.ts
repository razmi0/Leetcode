function findWords(words: string[]): string[] {
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"],
    res = [],
    match = 0;

  for (const row of rows) {
    for (const word of words) {
      let match = 0;
      for (const letter of word.toLowerCase()) {
        if (!row.includes(letter)) break;
        match++;
      }
      if (match === word.length) {
        res.push(word);
      }
    }
  }

  return res;
}
