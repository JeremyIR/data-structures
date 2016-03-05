var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function(value) {
  var newNode;
  if (this.head === null && this.tail === null) {
    this.tail = new Node(value);
    this.head = this.tail;
    return;
  } else {
    newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};
  
DoublyLinkedList.prototype.removeHead = function() {
  var result = this.head.value;
  if (this.head.next === null) {
    this.head = null;
    this.tail = null;
    return result;
  }
  this.head = this.head.next;
  this.head.prev = null;
  return result;
};
  
DoublyLinkedList.prototype.contains = function(value) {
  var current = this.head;

  while (current !== null) {
    if (current.value === value) {
      return true;
    }
    current = current.next;
  }

  return false;
};

DoublyLinkedList.prototype.removeTail = function() {
  var result = this.tail.value;
  if (this.tail.prev === null) {
    this.head = null;
    this.tail = null;
    return result;
  }

  this.tail = this.tail.prev;
  this.tail.next = null;
  return result;
};

DoublyLinkedList.prototype.addToHead = function(value) {
  var newNode;
  if (this.head === null && this.tail === null) {
    this.tail = new Node(value);
    this.head = this.tail;
    return;
  } else {
    newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }
};

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};