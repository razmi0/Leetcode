function findRelativeRanks(score: number[]): string[] {
  let original = [...score],
    res = [],
    idx = 0,
    medals = ["Gold Medal", "Silver Medal", "Bronze Medal"],
    temp = "";

  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    idx = score.indexOf(original[i]);
    if (idx < 3) {
      temp = medals[idx];
    } else {
      temp = (idx + 1).toString();
    }
    res.push(temp);
  }

  return res;
}

function findRelativeRanks2(score: number[]): string[] {
  const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  const sortedScore = [...score].sort((a, b) => b - a);
  const result = new Map<number, string>();
  for (let i = 0; i < sortedScore.length; i++) {
    result.set(sortedScore[i], medals[i] ?? (i + 1).toString());
  }
  return score.map((r) => result.get(r) || "");
}
