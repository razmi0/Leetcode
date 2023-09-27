function constructRectangle2(area: number): number[] {
  let sqRoot = Math.sqrt(area);
  if (Number.isInteger(sqRoot)) return [sqRoot, sqRoot];
  else {
    sqRoot = Math.floor(sqRoot);
    let limit = 0,
      product = 0,
      sizes = [sqRoot, sqRoot];

    while (product != area) {
      product = sizes[0] * sizes[1];
      limit++;
      if (product > area) sizes[1]--;
      if (product < area) {
        sizes[0]++;
      }
    }
    return sizes;
  }
}

function constructRectangle(area: number): number[] {
  const sqrt = Math.floor(Math.sqrt(area));
  for (let i = sqrt; i >= 1; i--) {
    if (area % i == 0) return [area / i, i];
  }
  return [area, 1];
}
