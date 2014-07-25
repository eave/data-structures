// a binary search tree (BST), sometimes also called an ordered or sorted
// binary tree, is a node-based binary tree data structure where each node
// has a comparable key (and an associated value) and satisfies the
// restriction that the key in any node is larger than the keys in all
// nodes in that node's left subtree and smaller than the keys in all
// nodes in that node's right sub-tree.

// The common properties of binary search trees are as follows:[1]

// * The left subtree of a node contains only nodes with keys less than the node's key.
// * The right subtree of a node contains only nodes with keys greater than the node's key.
// * The left and right subtree each must also be a binary search tree.
// * Each node can have up to two successor nodes.
// * There must be no duplicate nodes.
// * A unique path exists from the root to every other node.



var makeBinarySearchTree = function(value){
  return new BST(value);
};

var BST = function(value) {
  this.value = value;
  this.left; // undefined
  this.right; // undefined
}

BST.prototype.insert = function(valueToInsert) {
  if (valueToInsert < this.value) { // heading left
    (this.left) ? this.left.insert(valueToInsert)
                : this.left = makeBinarySearchTree(valueToInsert);
  } else { // heading right
    (this.right) ? this.right.insert(valueToInsert)
                 : this.right = makeBinarySearchTree(valueToInsert);
} }; // end else (heading right)


BST.prototype.contains = function(target) {};

BST.prototype.depthFirstLog = function(fn) {};

/*
 * Complexity: What is the time complexity of the above functions?
 */
