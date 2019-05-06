/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode.com/problems/reverse-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
export var reverseList = function(head) {
  if (!head) {
    return head;
  }

  let current = head.next;
  head.next = null;

  while (current) {
    let temp = current.next;

    current.next = head;
    head = current;

    current = temp;
  }

  return head;
};
