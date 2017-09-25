const Node = require('./node');

class LinkedList {
    constructor() {
      const head = new Node();
      const tail = new Node();
      this._head = head;
      this._tail = tail;
      head.next = tail;
      tail.prev = head;
      this.length = 0;
    }

    append(data) {
      const nd = new Node(data, this._tail.prev, this.tail);
      this._tail.prev.next = nd;
      this._tail.prev = nd;
      this.length += 1;
      return this;
    }

    head() {
      return this._head.next.data;
    }

    tail() {
      return this._tail.prev.data;
    }

    at(index) {
      let nd = this._head.next;
      for (let i = 0; i < index; i++) {
        nd = nd.next;
      }
      return nd.data;
    }

    insertAt(index, data) {
      let nd = this._head.next;
      for (let i = 0; i < index; i++) {
        nd = nd.next;
      }
      const newnd = new Node(data, nd.prev, nd);
      nd.prev.next = newnd;
      nd.prev = newnd;
      return newnd.data;
    }

    isEmpty() {
      return !!!this.length;
    }

    clear() {
      if (!this.isEmpty()) {
        this._head.next = this._tail;
        this._tail.prev = this._head;
        this.length = 0;
      }
      return this;
    }

    deleteAt(index) {
      let nd = this._head.next;
      for (let i = 0; i < index; i++) {
        nd = nd.next;
      }
      nd.prev.next = nd.next;
      nd.next.prev = nd.prev;
      this.length -= 1;
      return this;
    }

    reverse() {
      if (this.length > 1) {
        let hnd = this._head.next, tnd = this._tail.prev, temp;
        for (let i = 1; i <= this.length / 2; i++) {
          temp = hnd.data;
          hnd.data = tnd.data;
          tnd.data = temp;
          hnd = hnd.next;
          tnd = tnd.prev;
        }
      }
      return this;
    }

    indexOf(data) {
      let nd = this._head.next;
      for (let i = 0; i < this.length; i++) {
        if (nd.data == data) {
          return i;
        }
        nd = nd.next;
      }
      return -1;
    }
}

module.exports = LinkedList;
