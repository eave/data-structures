var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[i] === undefined) {
    this._storage[i] = {};
    this._storage[i][k] = v;
  }
  this._storage[i][k] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[i] === undefined) {
    return null;
  } else {
    return this._storage[i][k];
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][k] = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
