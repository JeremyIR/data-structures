var Queue = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var someInstance = {
        'items': 0,
        'storage': {}
    };
    _.extend(someInstance, queueMethods);

    return someInstance;
};

var queueMethods = {
    'size': function() {
        return this.items;
    },

    'enqueue': function(value) {
        this.storage[this.items] = value;
        this.items++;
    },

    'dequeue': function() {
        this.items--;
        if (this.items < 0) {
            this.items = 0;
        }

        var result = this.storage[0];

        for (var i = 0; i < this.items; i++) {
            this.storage[i] = this.storage[i + 1];
        }

        delete this.storage[i + 1];

        return result;

    }
};
