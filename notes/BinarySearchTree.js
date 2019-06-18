class Node {
  constructor(key) {
    this.key = key;

    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _insertNode(root, node) {
    if (node.key < root.key) {
      if (root.left) {
        this._insertNode(root.left, node);
      } else {
        root.left = node;
      }
    } else {
      if (root.right) {
        this._insertNode(root.right, node);
      } else {
        root.right = node;
      }
    }
  }

  insert(key) {
    const node = new Node(key);

    if (this.root) {
      this._insertNode(this.root, node);
    } else {
      this.root = node;
    }
  }

  _preOrderNode(node, handler) {
    if (node !== null) {
      handler(node.key);
      this._preOrderNode(node.left, handler);
      this._preOrderNode(node.right, handler);
    }
  }

  preOrder(handler) {
    this._preOrderNode(this.root, handler);
  }
}

const bst = new BinarySearchTree();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);

bst.preOrder(function(val) {
  console.log(val);
});
