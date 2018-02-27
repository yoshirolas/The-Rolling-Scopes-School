const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.prev =  this._tail;
            this._tail = node;

        }
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }
    at(index) {
        var node = this._head;
        for (var i = 0; i < index; i++) {
            node = node.next;
        }
        return node.data;
    }

    insertAt(index, data) {
        var insertNode = new Node(data);
        var node = this._head;
        for (var i = 0; i < index; i++) {
            node = node.next;
        }
        var prevNode = node.prev;
        insertNode.prev = node.prev;
        insertNode.next = node;
        node.prev = insertNode;
        prevNode.next = insertNode;
        this.length++;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        else { 
            return false; 
        }
    }

    clear() {
        this.length = 0;
        this._tail.data = null;
        this._head.data = null;
    }

    deleteAt(index) {
        var node = this._head;
        for (var i = 0; i < index; i++) {
            node = node.next;
        }
        var prevNode = node.prev;
        var nextNode = node.next;
        prevNode.next = node.next;
        nextNode.prev = node.prev;
        this.length--;
    }

    reverse() {
        var arr = [];
        var node = this._head;
        for (var i = 0; i < this.length; i++) {
            arr.push(node);
            node = node.next;
        }
        arr.reverse();
        this._head = this._tail;
        for (var i = 0; i < arr.length; i++) {
            node = arr[i];
            this._tail = node;
        }            
    }

    indexOf(data) {
        var node = this._head;
        var index = -1;
        for (var i = 0; i < this.length; i++) {
            if (node.data == data) {
                index = i;
            }
            node = node.next;
        }
        return index;
    }
}

module.exports = LinkedList;
