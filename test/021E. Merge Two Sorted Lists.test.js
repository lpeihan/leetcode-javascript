import { mergeTwoLists } from '../src/021E. Merge Two Sorted Lists';
import { LinkedList } from '../utils/LinkedList';

test('mergeTwoLists', () => {
  const l1 = new LinkedList([1, 2, 4]);
  const l2 = new LinkedList([1, 3, 4]);
  let res = mergeTwoLists(l1.head, l2.head);

  expect(LinkedList.from(res)).toEqual([1, 1, 2, 3, 4, 4]);
});
