// a hash table (also hash map) is a data structure used to implement
// an associative array, a structure that can map keys to values.

// A hash table uses a hash function to compute an index into an array
// of buckets or slots, from which the correct value can be found.

// PS: JavaScript Objects are essentially all hash tables (though not necessarily literally)


var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
