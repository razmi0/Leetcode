function checkRecord(s: string): boolean {
  if (s.length == 1) return true;
  let maxConsecutiveLate = 0,
    absences = 0,
    lates = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "A") {
      absences++;
      if (absences >= 2) return false;
    }
    if (s[i] == "L") {
      lates++;
      if (lates > maxConsecutiveLate) {
        maxConsecutiveLate = lates;
        if (maxConsecutiveLate >= 3) return false;
      }
    } else {
      lates = 0;
    }
  }
  return true;
}
