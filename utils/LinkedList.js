export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class LinkedList {
  constructor(arr) {
    this.head = null;
    this.current = null;

    arr.forEach(item => {
      this.append(item);
    });
  }

  append(val) {
    const node = new ListNode(val);

    if (this.head) {
      this.current.next = node;
    } else {
      this.head = node;
    }

    this.current = node;
  }

  // 将链表转换为数组
  static from(node) {
    let current = node;
    const arr = [];

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    return arr;
  }
}
