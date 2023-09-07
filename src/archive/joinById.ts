export default function joinById(arr1: any[], arr2: any[]): any[] {
  const combinedArray = arr1.concat(arr2); // concat des deux array
  const merged: { [key: number]: any } = {};

  combinedArray.map((obj) => {
    // pour chaque objet dans cA
    const id = obj.id;
    if (!merged[id]) {
      merged[id] = { ...obj };
    } else {
      merged[id] = { ...merged[id], ...obj };
    }
  });

  const joinedArray = Object.values(merged);
  joinedArray.sort((a, b) => a.id - b.id);

  return joinedArray;
}
