const arr = [1, 3, 5, 6, 8, 22, 33, 42, 58];

function binarySearch_0(arr, val) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = ((l + r) / 2) | 0;

    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}

function binarySearch(arr, val) {
  function _binarySearch(l, r) {
    if (l > r) {
      return -1;
    }

    const mid = ((l + r) / 2) | 0;

    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      return _binarySearch(l, mid - 1);
    } else {
      return _binarySearch(mid + 1, r);
    }
  }

  return _binarySearch(0, arr.length - 1);
}

console.log(binarySearch(arr, 42));
