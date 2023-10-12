function calPoints(operations: string[]): number {
  let i = 0,
    scores: number[] = [],
    int = 0,
    el = "";
  do {
    int = +operations[i];
    el = operations[i];
    if (!isNaN(int)) scores.push(int);
    else if (operations[i] == "+")
      scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
    else if (operations[i] == "D") scores.push(scores[scores.length - 1] * 2);
    else if (operations[i] == "C") scores.pop();
    i++;
  } while (i < operations.length);
  return scores.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
}
