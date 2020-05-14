/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  // if (root === null) {
  //   return 0;
  // }

  // let max = 0;

  // for (let i = 0; i < root.children.length; i++) {
  //   let len = maxDepth(root.children[i]);

  //   if (len > max) {
  //     max = len;
  //   }
  // }

  // return max + 1;

  // if (root === null) {
  //   return 0;
  // }

  // const queue = [root];
  // let max = 0;

  // while (queue.length) {
  //   const len = queue.length;
  //   max++;

  //   for (let i = 0; i < len; i++) {
  //     const node = queue.shift();

  //     for (const child of node.children) {
  //       queue.push(child);
  //     }
  //   }
  // }

  // return max;
  if (root === null) {
    return 0;
  }

  let max = 0;

  function backtrack(node, l) {
    if (node.children.length === 0) {
      if (l > max) {
        max = l;
      }

      return;
    }

    for (let i = 0; i < node.children.length; i++) {
      backtrack(node.children[i], l + 1);
    }
  }

  backtrack(root, 0);

  return max + 1;
};
