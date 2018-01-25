'use strict';

class _Node {
  constructor(value, next) {
    this.value = value,
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(item, key) {
    if ((this.head === null ) || (this.head.value === key)) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      while(currNode.next.value !== key) {
        currNode = currNode.next;
      }
      currNode.next = new _Node(item, currNode.next);

    }
  }

  insertAfter(item, key) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    if (this.head.next === null) {
      this.insertLast(item);
    }
    else {
      let currNode = this.head;
      while(currNode.value !== key) {
        currNode = currNode.next;
      }
      currNode.next = new _Node(item, currNode.next);
    }
  }

  insertAt(item, position) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currPosition = 1;
      let currNode = this.head;
      let prevNode = this.head;
      while (currPosition !== position) {
        prevNode = currNode;
        currNode = currNode.next;
        currPosition++;
      }
      prevNode.next = new _Node(item, currNode);
    }
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head === item){
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('There\'s nobody here');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main() {

  const SLL = new LinkedList;

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  console.log(JSON.stringify(SLL, null, 2));

}

main();