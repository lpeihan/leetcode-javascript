/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export var hasCycle = function(head) {
  const map = new Map();
  let current = head;

  while (current) {
    if (map.has(current)) {
      return true;
    }

    map.set(current, true);
    current = current.next;
  }

  return false;
};

/**
 * 双指针
 */
export var hasCycle_0 = function(head) {
  let slow = head;
  let fast = head;

  while (slow && slow.next && fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
