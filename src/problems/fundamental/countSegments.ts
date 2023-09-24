function countSegments(s: string): number {
  const matches = s.match(/[\w!@#$%^&*()_+\-=',.:]+/g);
  return matches ? matches.length : 0;
}
