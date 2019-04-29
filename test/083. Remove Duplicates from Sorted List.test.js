import { deleteDuplicates } from '../src/083. Remove Duplicates from Sorted List';
import { LinkedList } from '../utils/LinkedList';

test('deleteDuplicates', () => {
  const l = new LinkedList([1, 1, 2, 3, 3]);
  let res = deleteDuplicates(l.head);

  expect(LinkedList.from(res)).toEqual([1, 2, 3]);
});
