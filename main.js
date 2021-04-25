var TreeNode = /** @class */ (function () {
    function TreeNode(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return TreeNode;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.add = function (data) {
        var node = this.root;
        if (node === null) {
            this.root = new TreeNode(data);
            return;
        }
        else {
            var searchTree_1 = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new TreeNode(data);
                        return;
                    }
                    else {
                        return searchTree_1(node.left);
                    }
                }
                else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new TreeNode(data);
                    }
                    else {
                        return searchTree_1(node.right);
                    }
                }
                else {
                    return null;
                }
            };
            return searchTree_1(node);
        }
    };
    BST.prototype.remove = function (data) {
        var removeNode = function (node, data) {
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
                var tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }
            else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            }
            else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    };
    return BST;
}());
var bst = new BST();
bst.add(9);
bst.add(3);
bst.add(4);
console.log("bst : ", bst);
//# sourceMappingURL=main.js.map