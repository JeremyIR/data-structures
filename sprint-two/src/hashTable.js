

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (typeof this._storage.get(index) === 'undefined') {
    var bucket = LimitedArray(8);
    bucket.set(0, 1);
    this._storage.set(index, bucket);
  } else {
    var bucket = this._storage.get(index);
  }
  for (var i = 1; i < bucket.get(0); i += 2) {
    if (bucket.get(i) === k) {
      bucket.set(i + 1, v);
      return;
    }
  }
  var subIndex = bucket.get(0);
  bucket.set(subIndex, k);
  bucket.set(subIndex + 1, v);
  bucket.set(0, subIndex + 2); 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 1; i < bucket.get(0); i += 2) {
    if (bucket.get(i) === k) {
      return bucket.get(i + 1);
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 1; i < bucket.get(0); i += 2) {
    if (bucket.get(i) === k) {
      for (var j = i + 2; j < bucket.get(0); j++) {
        bucket.set(j - 2, bucket.get(j));
      }
      bucket.set(bucket.get(0), undefined);
      bucket.set(bucket.get(0) + 1, undefined);
      bucket.set(0, bucket.get(0) - 2);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


