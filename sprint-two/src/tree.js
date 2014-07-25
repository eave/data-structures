var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var result = false;
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length && result !== true; i++) {
    result = this.children[i].contains(target);
  }

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
