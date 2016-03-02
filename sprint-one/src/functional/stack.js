var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.pop = function() {
    items--;
    if (items < 0) {
      items = 0;
    }
    return storage[items];
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
