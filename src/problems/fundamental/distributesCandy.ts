function distributeCandies(candyType: number[]): number {
  const advice = candyType.length / 2;
  const nbrtypes = new Set(candyType).size;

  return advice >= nbrtypes ? nbrtypes : advice;
}
