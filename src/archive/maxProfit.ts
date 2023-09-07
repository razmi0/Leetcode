function maxProfit(prices: number[]): number {
  let profit = 0;
  let min = Infinity;

  prices.map((nbr) => {
    let diff = nbr - min;
    let inferior = diff < 0;
    if (inferior) min = nbr;
    if (!inferior && nbr - min > profit) profit = diff;
  });

  return profit;
}
