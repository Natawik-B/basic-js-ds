const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    if (!this.root) {
      return null;
    } else {
      return this.root;
    }
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  has(data) {
    function searchTree2(node, data) {
      if (!node) {
        return false;
      }
      if (node.data == data) {
        return true;
      }
      if (data < node.data) {
        return searchTree2(node.left, data);
      } else {
        return searchTree2(node.right.data);
      }
    }
    return searchTree2(this.root, data);
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    let item = this.root;
    while (item.data !== data) {
      if (data < item.data) {
        item = item.left;
      } else if (data > item.data) {
        item = item.right;
      } else {
        return item;
      }
      if (item === null) {
        return null;
      }
    }
    return null;
  }

  remove(data) {
    const removeItem = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        let itemNode = node.right; // if 2 child has!?
        while (itemNode.left !== null) {
          itemNode = itemNode.left;
        }
        node.data = itemNode.data;
        node.right = removeItem(node.right, itemNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeItem(node.left, data);
        return node;
      } else {
        node.right = removeItem(node.right, data);
        return node;
      }
    }
    this.root = removeItem(this.root, data);
  }

  min() {
    if (!this.root) return;
    let current = this.root;
    while (current.left) {
      current = current.left;
    } return current.data;
  }

  max() {
    if (!this.root) return;
    let current = this.root;
    while (current.right) {
      current = current.right;
    } return current.data;
  }
};

module.exports = {
  BinarySearchTree
};