var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods); 
  someInstance.items = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};
stackMethods.size = function() {
  return this.items;
};

stackMethods.push = function(value) {
  this.storage[this.items] = value;
  this.items++;
};

stackMethods.pop = function() {
  this.items--;
  if (this.items < 0) {
    this.items = 0;
    return;
  }
  return this.storage[this.items];
};





