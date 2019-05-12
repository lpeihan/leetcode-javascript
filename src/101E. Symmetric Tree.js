/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  function isMirror(p, q) {
    // Create two stacks
    const s1 = [p];
    const s2 = [q];

    // Perform preorder traversal
    while (s1.length > 0 || s2.length > 0) {
      const n1 = s1.pop();
      const n2 = s2.pop();

      // Two null nodes, let's continue
      if (!n1 && !n2) continue;

      // Return false as long as there is a mismatch
      if (!n1 || !n2 || n1.val !== n2.val) return false;

      // Scan tree s from left to right
      // and scan tree t from right to left
      s1.push(n1.left);
      s1.push(n1.right);
      s2.push(n2.right);
      s2.push(n2.left);
    }

    return true;
  }

  return isMirror(root.left, root.right);
};
