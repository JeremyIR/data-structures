var Queue = function() {
    var someInstance = {};

    // Use an object with numeric keys to store values
    var storage = {};
    var items = 0;

    // Implement the methods below

    someInstance.enqueue = function(value) {
        storage[items] = value;
        items++;
    };

    someInstance.dequeue = function() {
        items--;
        if (items < 0) {
            items = 0;
            return;
        }
        var result = storage[0];
        for (var i = 0; i < items; i++) {
            storage[i] = storage[i + 1];
            delete storage[i + 1];
        }
        return result;
    };

    someInstance.size = function() {
        return items;
    };

    return someInstance;
};
