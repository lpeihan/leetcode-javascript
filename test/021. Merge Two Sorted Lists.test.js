import { ListNode, mergeTwoLists } from '../src/021. Merge Two Sorted Lists';

function createLinkedList(arr) {
  let head;
  let current;

  for (let i = 0; i < arr.length; i++) {
    const node = new ListNode(arr[i]);

    if (head) {
      current.next = node;
      current = node;
    } else {
      head = node;
      current = node;
    }
  }

  return head;
}

const l1 = createLinkedList([1, 2, 4]);
const l2 = createLinkedList([1, 3, 4]);

test('mergeTwoLists', () => {
  let current = mergeTwoLists(l1, l2);
  const arr = [];

  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  expect(arr).toEqual([1, 1, 2, 3, 4, 4]);
});
