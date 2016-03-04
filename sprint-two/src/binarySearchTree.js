var BinarySearchTree = function(value) {

  var someInstance = Object.create(BSTMethods);
  someInstance.left = null;
  someInstance.right = null;
  someInstance.value = value;

  return someInstance;

};

var BSTMethods = {};

BSTMethods.insert = function(value) {
  if (this.value > value) {
    this.left = value;
  } else {
    this.right = value;
  }
};

BSTMethods.contains = function() {};

BSTMethods.depthFirstLog = function() {};





/*
 * Complexity: What is the time complexity of the above functions?
 */
