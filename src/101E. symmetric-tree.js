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
var isSymmetric = function(root) {
  if (root === null) {
    return true;
  }

  const queue = [root];

  while (queue.length) {
    const len = queue.length;
    const arr = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
        arr.push(node.left.val);
      } else {
        arr.push(null);
      }

      if (node.right) {
        queue.push(node.right);
        arr.push(node.right.val);
      } else {
        arr.push(null);
      }
    }

    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      if (arr[left++] !== arr[right--]) {
        return false;
      }
    }
  }

  return true;
};
