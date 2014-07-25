var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (this.tail === null) {
      this.tail = makeNode(value);
      this.head = this.tail;
    } else {
      this.tail.next = makeNode(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function(){
    var temp = this.head.value;
    this.head = this.head.next;
    return temp;
  };

  list.contains = function(target, node){
    var result = false;
    node = node || this.head;
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    } else if (node.value !== target) {
      result = this.contains(target, node.next);
    } else {
      result = true;
    }
    return result;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * .addToTail = constant
 * .removeHead = constant
 * .contains = n
 */
