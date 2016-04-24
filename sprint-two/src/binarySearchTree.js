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
        if (this.left === null) {
            this.left = BinarySearchTree(value);
        } else {
            this.left.insert(value);
        }
    } else {
        if (this.right === null) {
            this.right = BinarySearchTree(value);
        } else {
            this.right.insert(value);
        }
    }
};

BSTMethods.contains = function(target) {

    if (this.value === target) {
        return true;
    }

    if (target < this.value) {
        if (this.left === null) {
            return false;
        } else {
            return this.left.contains(target);
        }
    }

    if (target > this.value) {
        if (this.right === null) {
            return false;
        } else {
            return this.right.contains(target);
        }
    }

};

BSTMethods.depthFirstLog = function(cb) {

    cb(this.value);


    if (this.left !== null) {
        this.left.depthFirstLog(cb);
    }

    if (this.right !== null) {
        this.right.depthFirstLog(cb);
    }

};





/*
 * Complexity: What is the time complexity of the above functions?
 */
