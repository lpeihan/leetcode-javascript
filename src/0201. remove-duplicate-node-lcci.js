/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes_0 = function(head) {
  const map = {};

  let prev = null;
  let cur = head;
  while (cur) {
    const val = cur.val;

    if (!map[val]) {
      map[val] = true;
      prev = cur;
    } else {
      prev.next = cur.next;
    }

    cur = cur.next;
  }

  return head;
};

var removeDuplicateNodes = function(head) {
  let i = head;

  while (i) {
    let j = i;
    while (j.next) {
      if (j.next.val === i.val) {
        j.next = j.next.next;
      } else {
        j = j.next;
      }
    }

    i = i.next;
  }

  return head;
};
