export function imageSmoother1(img: number[][]): number[][] {
  let avTemp = [],
    av = Array.from({ length: img.length }, (_) =>
      Array.from({ length: img[0].length }, (_) => 0)
    ),
    addRow = 0,
    addCol = 0,
    k = -1,
    l = -1;

  for (let row = 0; row < img.length; row++) {
    for (let col = 0; col < img[row].length; col++) {
      k = -1;
      while (k < 2) {
        addRow = row + k;
        if (img[addRow] === undefined) {
          k++;
          continue;
        }
        l = -1;
        while (l < 2) {
          addCol = col + l;
          if (img[addRow][addCol] === undefined) {
            l++;
            continue;
          }
          avTemp.push(img[addRow][addCol]);
          l++;
        }
        k++;
      }
      av[row][col] = Math.floor(
        avTemp.reduce((acc, cur) => {
          return (acc += cur);
        }, 0) / avTemp.length
      );
      avTemp = [];
    }
  }
  return av;
}

export function imageSmoother2(img: number[][]): number[][] {
  let avTemp = [],
    av = Array.from({ length: img.length }, (_) =>
      Array.from({ length: img[0].length }, (_) => 0)
    ),
    addRow = 0,
    addCol = 0;
  for (let row = 0; row < img.length; row++) {
    for (let col = 0; col < img[row].length; col++) {
      for (let k = -1; k < 2; k++) {
        addRow = row + k;
        if (img[addRow] === undefined) continue;
        for (let l = -1; l < 2; l++) {
          addCol = col + l;
          if (img[addRow][addCol] === undefined) continue;
          avTemp.push(img[addRow][addCol]);
        }
      }
      av[row][col] = Math.floor(
        avTemp.reduce((acc, cur) => {
          return (acc += cur);
        }, 0) / avTemp.length
      );
      avTemp = [];
    }
  }
  return av;
}

export function imageSmoother3(img: number[][]): number[][] {
  let avTemp = [],
    av = Array.from({ length: img.length }, (_) =>
      Array.from({ length: img[0].length }, (_) => 0)
    ),
    addRow = 0,
    addCol = 0,
    k = -1,
    l = -1;
  for (let row = 0; row < img.length; row++) {
    for (let col = 0; col < img[row].length; col++) {
      k = -1;

      do {
        addRow = row + k;
        if (addRow == -1 || img[addRow] === undefined) {
          k++;
          continue;
        }
        l = -1;
        do {
          addCol = col + l;
          if (addCol == -1 || img[addRow][addCol] === undefined) {
            l++;
            continue;
          }
          avTemp.push(img[addRow][addCol]);
          l++;
        } while (l < 2);

        k++;
      } while (k < 2);
      av[row][col] = Math.floor(
        avTemp.reduce((acc, cur) => {
          return (acc += cur);
        }, 0) / avTemp.length
      );
      avTemp = [];
    }
  }
  return av;
}

export function imageSmoother4(img: number[][]): number[][] {
  const rows = img.length;
  const cols = img[0].length;
  const smoothedImage: number[][] = Array.from({ length: rows }, () => []);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let sum = 0;
      let count = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i;
          const newCol = col + j;

          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            sum += img[newRow][newCol];
            count++;
          }
        }
      }

      smoothedImage[row][col] = Math.floor(sum / count);
    }
  }

  return smoothedImage;
}

export function imageSmoother5(img: number[][]): number[][] {
  const rows = img.length;
  const cols = img[0].length;
  const smoothedImage: number[][] = Array.from({ length: rows }, () => []);

  let row = 0;
  while (row < rows) {
    let col = 0;
    while (col < cols) {
      let sum = 0;
      let count = 0;

      let i = -1;
      while (i <= 1) {
        let j = -1;
        while (j <= 1) {
          const newRow = row + i;
          const newCol = col + j;

          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            sum += img[newRow][newCol];
            count++;
          }
          j++;
        }
        i++;
      }

      smoothedImage[row][col] = Math.floor(sum / count);
      col++;
    }
    row++;
  }

  return smoothedImage;
}

export function imageSmoother6(img: number[][]): number[][] {
  const rows = img.length;
  const cols = img[0].length;
  const smoothedImage: number[][] = Array.from({ length: rows }, () => []);

  let row = 0;
  do {
    let col = 0;
    do {
      let sum = 0;
      let count = 0;

      let i = -1;
      do {
        let j = -1;
        do {
          const newRow = row + i;
          const newCol = col + j;

          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            sum += img[newRow][newCol];
            count++;
          }
          j++;
        } while (j <= 1);
        i++;
      } while (i <= 1);

      smoothedImage[row][col] = Math.floor(sum / count);
      col++;
    } while (col < cols);
    row++;
  } while (row < rows);

  return smoothedImage;
}
