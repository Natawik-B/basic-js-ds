const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    if (!this.node) {
      return null;
    } else {
      return this.node;
    }
  }

  add(data) {
    const cur1 = this.node;
    if (cur1 === null) {
      this.node = new Node(data);
      return;
    } else {
      const searchTree = function(cur1) {
        if (data < cur1.data) {
          if (cur1.left === null) {
            cur1.left = new Node(data);
            return;
          } else if (cur1.left !== null) {
            return searchTree(cur1.left);
          }
        } else if (data > cur1.data) {
          if (cur1.right === null) {
            cur1.right = new Node(data);
            return;
          } else if (cur1.right !== null) {
            return searchTree(cur1.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(cur1);
    }
  }

  has(data) {
    if (this.find(data) === null) {
      return false;
    } else {
      return true;
    }
  }

  find(data) {
    let item = this.node;
    while (item) {
      if (data < item.data) {
        item = item.left;
      } else if (data > item.data) {
        item = item.right;
      } else if (data == item.data) {
        return item;
      }
    }
    return null;
  }

  remove(data) {
    const removeItem = function(cur2, data) {
      if (cur2 == null) {
        return null;
      }
      if (data === cur2.data) {
        if (cur2.left === null && cur2.right === null) {
          return null;
        }
        if (cur2.left === null) {
          return cur2.right;
        }
        if (cur2.right === null) {
          return cur2.left;
        }

        let itemNode = cur2.right; // if 2 child has!?
        while (itemNode.left !== null) {
          itemNode = itemNode.left;
        }
        cur2.data = itemNode.data;
        cur2.right = removeItem(cur2.right, itemNode.data);
        return cur2;
      } else if (data < cur2.data) {
        cur2.left = removeItem(cur2.left, data);
        return cur2;
      } else {
        cur2.right = removeItem(cur2.right, data);
        return cur2;
      }
    }
    this.node = removeItem(this.node, data);
  }

  min() {
    if (!this.node) return;
    let current = this.node;
    while (current.left) {
      current = current.left;
    } return current.data;
  }

  max() {
    if (!this.node) return;
    let current = this.node;
    while (current.right) {
      current = current.right;
    } return current.data;
  }
};

module.exports = {
  BinarySearchTree
};