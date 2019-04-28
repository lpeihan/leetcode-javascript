/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export var mergeTwoLists = function (l1, l2) {
  let head = null;
  let current = null;

  if (!l1 || !l2) {
    return l1 || l2;
  }

  while (l1 && l2) {
    let node;
    if (l1.val <= l2.val) {
      node = new ListNode(l1.val); // eslint-disable-line
      l1 = l1.next;
    } else {
      node = new ListNode(l2.val); // eslint-disable-line
      l2 = l2.next;
    }

    if (head) {
      current.next = node;
      current = node;
    } else {
      head = node;
      current = node;
    }
  }

  current.next = l1 || l2;

  return head;
};
