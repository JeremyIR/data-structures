var Stack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var someInstance = {
        'items': 0,
        'storage': {}
    };

    _.extend(someInstance, stackMethods);
    return someInstance;
};

var stackMethods = {
    'size': function() {
        return this.items;
    },

    'pop': function() {
        this.items--;
        if (this.items < 0) {
            this.items = 0;
        }
        return this.storage[this.items];
    },

    'push': function(value) {
        this.storage[this.items] = value;
        this.items++;
    }
};
