/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  traverse(){
    let current = this.head;
    while(current !== null){
      console.log(current.val);
      current = current.next;
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode
    }
    else{
    this.tail.next = newNode;
    this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    while(current.next.next !== null){
      current = current.next
    }
    let resultNode = current.next;
    current.next = null;
    this.tail = current;
    this.length -= 1;
    return resultNode
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.length <= 1){
      let firstItem = this.head;
      this.head.next = null;
      this.head = null;
      return firstItem;
    }
    
    let firstItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return firstItem
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let current = this.head;
    if(idx >= this.length){
      return false
    }
    while(count !== idx){
      count += 1;
      current = current.next;
    }
    return current
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let editNode = this.getAt(idx)
    if(editNode){
      editNode.val = val;
      return editNode
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx === 0){
      this.unshift(val);
      return
    }
    let beforeNode = this.getAt(idx-1);
    if (beforeNode){
      let newNode = new Node(val);
      newNode.next = this.getAt(idx);
      beforeNode.next = newNode;
      this.length += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let prevNode = this.getAt(idx-1);
    let removedNode = prevNode.next;
    prevNode.next = prevNode.next.next;
    this.length -=1;
    return removedNode
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let sum = 0;
    while (current !== null){
      sum += current.val;
      current = current.next;
    }
    return sum/this.length
  }
}

module.exports = LinkedList;
