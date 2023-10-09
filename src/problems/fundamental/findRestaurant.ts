function findRestaurant(list1: string[], list2: string[]): string[] {
  let map = new Map(),
    idx = [],
    sum = 0;

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] == list2[j]) {
        sum = i + j;
        idx.push(sum);
        if (map.has(sum)) {
          map.set(sum, [...map.get(sum), list1[i]]);
        } else {
          map.set(sum, [list1[i]]);
        }
      }
    }
  }

  idx.sort((a, b) => a - b);

  return map.get(idx[0]);
}
