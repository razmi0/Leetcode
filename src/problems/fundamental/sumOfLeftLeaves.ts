import TreeNode from "../../utils/TreeNode.js";

function sumOfLeftLeaves(root: TreeNode | null, isLeft?: true): number {
  if (!root) return 0;
  if (!root.left && !root.right && isLeft) return root.val;
  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
}
