function findMax(arr, l = 0, r) {
  if (l === r) {
    return arr[l];
  }

  let a = arr[l];
  let b = findMax(arr, l + 1, r);

  return a >= b ? a : b;
}

console.log(findMax([3, 1, 5, 4, 8, 7, 6, 2], 0, 7));

function sum(arr, l, r) {
  if (l === r) {
    return arr[l];
  }

  return arr[l] + sum(arr, l + 1, r);
}

console.log(sum([1, 2, 3, 4], 0, 3));
