// a tree is a widely used abstract data type (ADT) or data
// structure implementing this ADT that simulates a hierarchical
// tree structure, with a root value and subtrees of children,
// represented as a set of linked nodes.



var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods); // added, may not be necessary; should arg1 be makeTree?
  return newTree;
};

var treeMethods = {}; // use this for these

treeMethods.addChild = function(value){
	this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
	for (var i = 0; i < this.children.length; i++) {

	}
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
