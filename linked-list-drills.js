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
      console.log(currNode.next);
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

  insertAt(item, keyOne, keyTwo) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let nextNode = this.head.next;
      while ((currNode.value !== keyOne) && (currNode.next.value !== keyTwo)) {
        currNode = currNode.next;
        nextNode = currNode.next;
      }
      if (currNode.next === null) {
        throw new Error('Key pair not found in list, could not insert between');
      }
      currNode.next = new _Node(item, currNode.next);
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
      console.log(`There\'s nobody here`);
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
  console.log(JSON.stringify(SLL, null, 2));

}

main();