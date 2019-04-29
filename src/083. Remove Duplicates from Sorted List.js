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
export var deleteDuplicates = function(head) {
  let current = head;

  while (current) {
    const prev = current;
    current = current.next;

    if (current && current.val === prev.val) {
      prev.next = current.next;
      current = prev;
    }
  }

  return head;
};
