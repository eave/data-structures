var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.qSize = 0;
  someInstance.front = 1;
  someInstance.back = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.back++;
  this.qSize++;
  this.storage[this.back] = value;
  return true;
};

queueMethods.dequeue = function(){
  if (this.qSize === 0) {
    console.log("Cannot dequeue an empty queue.");
    return false;
  }
  var result = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  this.qSize--;
  return result;
};

queueMethods.size = function(){
  return this.qSize;
};
