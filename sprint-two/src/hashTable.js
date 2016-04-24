var HashTable = function() {
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
    this._items = 0;
};

HashTable.prototype.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var subIndex, bucket, insertIndex;

    if (typeof this._storage.get(index) === 'undefined') {
        bucket = LimitedArray(8);
        bucket.set(0, 1);
        this._storage.set(index, bucket);
    } else {
        bucket = this._storage.get(index);
    }

    subIndex = bucket.get(0);
    insertIndex = subIndex;

    bucket.each(function(item, index, arr) {
        if (item === k && (index + 1) % 2 === 0) {
            insertIndex = index;
        }
    });

    bucket.set(insertIndex, k);
    bucket.set(insertIndex + 1, v);
    bucket.set(0, subIndex + 2);

    this._items++;
    this._checkToDouble();
};

HashTable.prototype.retrieve = function(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(index);
    var result;

    bucket.each(function(item, index, arr) {
        if (item === k && (index + 1) % 2 === 0) {
            result = arr[index + 1];
        }
    });
    return result;
};

HashTable.prototype.remove = function(k) {
    var index = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(index);
    var subLength = bucket.get(0);

    bucket.each(function(item, index, arr) {
        if (item === k && (index + 1) % 2 === 0) {
            for (var i = index + 2; i < arr[0]; i++) {
                arr[i - 2] = arr[i];
            }
            arr[subLength - 1] = undefined;
            arr[subLength - 2] = undefined;
            arr[0] = subLength - 2;
        }
    });

    this._items--;
    this._checkToHalve();
};

HashTable.prototype._checkToDouble = function() {
    if (this._items >= (this._limit * .75)) {
        this._doubleStorageSize();
    }
};

HashTable.prototype._checkToHalve = function() {
    if (this._items <= (this._limit * .25)) {
        this._halveStorageSize();
    }
};

HashTable.prototype._doubleStorageSize = function() {
    var oldStorage = this._storage;
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
    this._items = 0;

    oldStorage.each(function(item, index, storage) {
        console.log(this);
        if (typeof item !== 'undefined') {
            item.each(function(element, i, arr) {
                console.log(this);
                if ((i + 1) % 2 === 0) {
                    this.insert(element, arr[i + 1]);
                }
            }.bind(this));
        }
    }.bind(this));

};

HashTable.prototype._halveStorageSize = function() {
    var oldStorage = this._storage;
    this._limit = this._limit / 2;

    this._storage = LimitedArray(this._limit);
    this._items = 0;

    oldStorage.each(function(item, index, storage) {
        console.log(this);
        if (typeof item !== 'undefined') {
            item.each(function(element, i, arr) {
                console.log(this);
                if ((i + 1) % 2 === 0) {
                    this.insert(element, arr[i + 1]);
                }
            }.bind(this));
        }
    }.bind(this));

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
