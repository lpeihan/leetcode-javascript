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

  // 插入
  insert(key) {
    const node = new Node(key);

    if (this.root === null) {
      this.root = node;
    } else {
      this._insertNode(this.root, node);
    }
  }

  // 前序遍历
  preOrder(callback) {
    this._preOrderNode(this.root, callback);
  }

  // 中序遍历
  inOrder(callback) {
    this._inOrderNode(this.root, callback);
  }

  // 后序遍历
  postOrder(callback) {
    this._postOrderNode(this.root, callback);
  }

  // 层序遍历
  levelOrder(callback) {
    const queue = [];

    queue.push(this.root);

    while (queue.length) {
      const node = queue.shift();
      callback(node.key);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  // 最大值
  max() {
    let current = this.root;

    if (current) {
      while (current.right) {
        current = current.right;
      }
      return current.key;
    }

    return null;
  }

  // 最小值
  min() {
    let current = this.root;

    if (current) {
      while (current.left) {
        current = current.left;
      }

      return current.key;
    }

    return null;
  }

  // 检查是否存在某个 key 值
  search(key) {
    return this._searchNode(this.root, key);
  }

  remove(key) {
    return this._removeNode(this.root, key);
  }

  _removeNode(root, key) {
    let current = root;
    let parent = root;
    let isLeftChild = true;

    // 开始查找节点
    while (current.key !== key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }

      // 如果发现current已经指向null, 那么说明没有找到要删除的数据
      if (current === null) return false;
    }

    // 删除的结点是叶结点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    // 删除有一个子节点的节点
    else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    }

    // 删除有两个节点的节点
    else {
      // 获取后继节点
      let successor = this.getSuccessor(current);

      // 判断是否是根节点
      if (current === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }

      // 3.将删除节点的左子树赋值给successor
      successor.left = current.left;
    }

    return true;
  }

  // 寻找后继，也就是要删除的右子树的最小值
  // 也可以寻找前驱，也就是要删除的左子树的最大值
  // 不管是前驱或者后继，都是最接近要删除的节点的 key 值
  _getSuccessor(delNode) {
    // 使用变量保存临时的节点
    let successorParent = delNode;
    let successor = delNode;
    let current = delNode.right; // 要从右子树开始找

    // 寻找节点
    while (current) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    if (successor !== delNode.right) {
      successorParent.left = successorParent.right;
      successor.right = delNode.right;
    }
  }

  _searchNode(node, key) {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return this._searchNode(node.left, key);
    } else if (key > node.key) {
      return this._searchNode(node.right, key);
    } else {
      return true;
    }
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

  _preOrderNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this._preOrderNode(node.left, callback);
      this._preOrderNode(node.right, callback);
    }
  }

  _inOrderNode(node, callback) {
    if (node !== null) {
      this._preOrderNode(node.left, callback);
      callback(node.key);
      this._preOrderNode(node.right, callback);
    }
  }

  _postOrderNode(node, callback) {
    if (node !== null) {
      this._preOrderNode(node.left, callback);
      this._preOrderNode(node.right, callback);
      callback(node.key);
    }
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

bst.levelOrder(function(val) {
  console.log(val);
});

// bst.preOrder(function(val) {
//   console.log(val);
// });

// console.log(bst.remove(3));
// console.log(bst.min());
