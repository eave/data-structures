var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.stackSize = 0;

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
	this.storage[this.stackSize] = value;
	this.stackSize++;
};

stackMethods.pop = function(){
	this.stackSize && this.stackSize--;
	var result = this.storage[this.stackSize];
	delete this.storage[this.stackSize];
	return result;
};

stackMethods.size = function(){
	return this.stackSize;
};


// NOTE TO INSTRUCTORS: The Bookstrap instructions say that we MUST use the 'this' keyword,
// but the spec runner is testing to ensure 'this' is NOT used!
