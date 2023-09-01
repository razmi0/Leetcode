import { perf } from "../perf.js";

type MultidimensionalArray = (MultidimensionalArray | number)[];

function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
  // Helper function to perform inorder traversal recursively
  function* traverse(node: any): any {
    if (Array.isArray(node)) {
      for (let subArray of node) {
        yield* traverse(subArray);
      }
    } else {
      yield node;
    }
  }

  yield* traverse(arr);
}

const gen = inorderTraversal([1, [2, 3]]);
console.log(
  gen.next().value, // 1
  gen.next().value, // 2
  gen.next().value // 3
);
perf(() => gen.next().value, [], 100);
