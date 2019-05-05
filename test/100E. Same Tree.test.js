import { isSameTree, isSameTree_0 } from '../src/100E. Same Tree';
import { TreeNode } from '../utils/BinaryTree';

const p = new TreeNode(1);

p.left = new TreeNode(2);
p.right = new TreeNode(3);

const q = new TreeNode(1);

q.left = new TreeNode(2);
q.right = new TreeNode(3);

test('isSameTree', () => {
  expect(isSameTree(p, q)).toBe(true);
});

test('isSameTree_0', () => {
  expect(isSameTree_0(p, q)).toBe(true);
});
