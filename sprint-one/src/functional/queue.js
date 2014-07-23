var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    if (size === 0) {
      storage[size] = value;
      size++;
    } else {
      for (var i = size - 1; i > -1; i--) {
        storage[i+1] = storage[i];
      }
      storage[0] = value;
      size++; 
    };
  };

  someInstance.dequeue = function(){
    size && size--; //size will pass if > 0, and will then evaluate the second half of the statement
    var result = storage[size];
    delete storage[size];
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
