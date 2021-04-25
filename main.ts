class TreeNode {
  data: number;
  left: TreeNode;
  right: TreeNode;

  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  add(data: number) {
    const node = this.root;
    if (node === null) {
      this.root = new TreeNode(data);
      return;
    } else {
      const searchTree = (node: TreeNode) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new TreeNode(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new TreeNode(data);
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  remove(data: number) {
    const removeNode = (node: TreeNode, data: number) => {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();

bst.add(9);
bst.add(3);
bst.add(4);

console.log("bst : ", JSON.stringify(bst));
