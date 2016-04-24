var Stack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    this.items = 0;
    this.storage = {};
};

Stack.prototype.size = function() {
    return this.items;
};

Stack.prototype.push = function(value) {
    this.storage[this.items] = value;
    this.items++;
};

Stack.prototype.pop = function() {
    this.items--;

    if (this.items < 0) {
        this.items = 0;
        return;
    }

    return this.storage[this.items];
};
