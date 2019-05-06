import { hasCycle, hasCycle_0 } from '../src/141E. Linked List Cycle';
import { ListNode } from '../utils/LinkedList';

const one = new ListNode(3);
const two = new ListNode(2);
const three = new ListNode(0);
const four = new ListNode(-4);

one.next = two;
two.next = three;
three.next = four;
four.next = two;

test('hasCycle', () => {
  expect(hasCycle(one)).toBe(true);
});

test('hasCycle_0', () => {
  expect(hasCycle_0(one)).toBe(true);
});
