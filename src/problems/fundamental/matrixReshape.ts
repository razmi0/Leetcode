function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  let matFlat = mat.flat();
  if (matFlat.length != r * c) return mat;

  const reshaped = Array.from({ length: r }, (_) => new Array());

  for (let i = 0, j = 0; i < matFlat.length; i++) {
    if (i % c == 0 && i != 0) j++;
    reshaped[j].push(matFlat[i]);
  }
  return reshaped;
}
