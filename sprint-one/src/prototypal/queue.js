var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.items = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.items;
};

queueMethods.enqueue = function(value) {
  this.storage[this.items] = value; 
  this.items++;
};

queueMethods.dequeue = function() {
  this.items--;
  if (this.items < 0) {
    this.items = 0;
    return;
  }
  var result = this.storage[0];
  for (var i = 0; i < this.items; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.items];
  return result; 
};

