import HashTable from './HashTable.js';

test('HashTable', () => {
  const map = new HashTable();
  expect(map.isEmpty()).toEqual(true);

  map.set('name', 'John');
  map.set('age', 18);
  map.set('age', 19);
  map.set('hobbies', ['run', 'code', 'basketball']);
  map.delete('name');

  expect(map.get('name')).toBe(undefined);
  expect(map.get('age')).toBe(19);
  expect(map.get('hobbies')).toEqual(['run', 'code', 'basketball']);
  expect(map.size).toEqual(2);
  expect(map.isEmpty()).toEqual(false);
});

test('HashTable', () => {
  const map = new HashTable();

  map.set('name', 'John');
  map.set('age', 18);
  map.set('length', 170);
  map.set('weight', 60);
  map.set('a', 1);
  map.set('b', 2);
  map.set('c', 2);
  map.set('d', 2);
  map.set('e', 2);
  map.set('f', 2);
  map.set('g', 2);
  map.set('hobbies', ['run', 'code', 'basketball']);

  expect(map.size).toEqual(12);
  expect(map.limit).toEqual(17);

  map.delete('age');
  map.delete('length');
  map.delete('weight');
  map.delete('a');
  map.delete('b');
  map.delete('c');
  map.delete('d');
  map.delete('e');
  map.delete('hobbies', ['run', 'code', 'basketball']);
  console.log(JSON.stringify(map));

  expect(map.size).toEqual(3);
  expect(map.limit).toEqual(11);
});
