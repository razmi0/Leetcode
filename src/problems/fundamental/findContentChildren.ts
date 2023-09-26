function findContentChildren2(g: number[], s: number[]): number {
  let res = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  let j = 0;

  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      res++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return res;
}

function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;

  for (let j = 0; i < g.length && j < s.length; j++) {
    if (g[i] <= s[j]) i++;
  }

  return i;
}
