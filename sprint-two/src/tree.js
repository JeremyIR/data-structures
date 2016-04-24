var Tree = function(value) {
    var newTree = {};
    newTree.value = value;
    newTree.parent = null;

    // your code here
    newTree.children = [];
    _.extend(newTree, treeMethods);

    return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
    var newTree = Tree(value);
    newTree.parent = this;
    this.children.push(newTree);
};

treeMethods.contains = function(target) {
    if (this.value === target) {
        return true;
    }
    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
            return true;
        }
    }
    return false;
};

treeMethods.removeFromParent = function() {
    var parentsChildren = this.parent.children;

    for (var i = 0; i < parentsChildren.length; i++) {
        if (parentsChildren[i] === this) {
            parentsChildren.splice(i, 1);
        }
    }

    this.parent = null;

    return this;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
