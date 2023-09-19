import TreeNode from "./utils/TreeNode.js";

const sumOfLeftLeaves = (root: TreeNode | null): number => {
  let sum: number = 0;

  const rec = (node: TreeNode | null) => {
    if (node?.left) {
      const { left, right } = node.left; // child left right
      if (!left && !right) {
        sum += node?.left?.val || 0;
        rec(node.left);
      }
    }
    if (node?.right) rec(node.right);
  };
  rec(root);

  return sum;
};
console.log(9 + 15);
// [3, 9, 20, null, null, 15, 7]
const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(sumOfLeftLeaves(tree));
