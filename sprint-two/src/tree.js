// a tree is a widely used abstract data type (ADT) or data
// structure implementing this ADT that simulates a hierarchical
// tree structure, with a root value and subtrees of children,
// represented as a set of linked nodes.



var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {}; // use this for these

treeMethods.addChild = function(value){
	this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var result = false;

  var doesContain = function(node, target) {
    if (node.value === target) {
      result = true;
    } else if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        doesContain(node.children[i], target);
      }
    }
  };

  doesContain(this, target);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
