var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null && list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
      return;
    }
    list.tail.next = Node(value);
    list.tail = list.tail.next;
  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;

  };

  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
      if (target === current.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
