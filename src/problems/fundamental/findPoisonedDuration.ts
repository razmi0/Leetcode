function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let seconds = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    timeSeries[i] + duration > timeSeries[i + 1]
      ? (seconds += timeSeries[i + 1] - timeSeries[i])
      : (seconds += duration);
  }
  return seconds;
}
