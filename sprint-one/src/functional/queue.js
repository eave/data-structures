var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var front = 1;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    back++;
    size++;
    storage[back] = value;
    return true;
  };

  someInstance.dequeue = function(){
    if (size === 0) {
      console.log("Cannot dequeue an empty queue.");
      return false;
    }
    var result = storage[front];
    delete storage[front];
    front++;
    size--;
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
