var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.qSize = 0;
  this.front = 1;
  this.back = 0;
};

Queue.prototype.enqueue = function(value){
  this.back++;
  this.qSize++;
  this.storage[this.back] = value;
  return true;
};

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
  return this.qSize;
};
