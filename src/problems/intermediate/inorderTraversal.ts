type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  // Helper function to perform inorder traversal recursively

  function* traverse(node: any): any {
    Array.isArray(node) ? yield* rec(node) : yield node;
  }

  function* rec(node: any) {
    for (let subArray of node) {
      yield* traverse(subArray);
    }
  }
  yield* traverse(arr);
}

function* inorderTraversal2(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  for (const x of arr) Array.isArray(x) ? yield* inorderTraversal(x) : yield x;
}

const gen = inorderTraversal([1, [2, 3], 2, 8]);
console.log(
  gen.next().value, // 1
  gen.next().value, // 2
  gen.next().value, // 3
  gen.next().value,
  gen.next().value,
  gen.next().value,
  gen.next().value,
  gen.next().value
);
