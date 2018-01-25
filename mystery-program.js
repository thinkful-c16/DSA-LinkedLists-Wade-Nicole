'use strict';

function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  while(current !== null){
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// the purpose of this function is to take an input linked list and remove all nodes with duplicate values
// the output of this function will be a linked list with no duplicates values/nodes
// the worst case run time complexity of this should be O(n^2) because there is a while loop nested within a while loop.