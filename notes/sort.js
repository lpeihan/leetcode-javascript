function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}


function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(arr, min, i);
    }
  }

  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        flag = true;
      }
    }

    if (flag === false) {
      break;
    }
  }

  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const tmp = arr[i];
    let j;
    for (j = i; j > 0 && tmp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }

    arr[j] = tmp;
  }

  return arr;
}

function shellSort(arr) {
  for (const gap of [5, 3, 1]) {
    for (let i = gap; i < arr.length; i++) {
      const tmp = arr[i];
      let j;
      for (j = i; j >= gap && tmp < arr[j - gap]; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = tmp; 
    }
  }

  return arr;
}

// function heapSort(arr) {
//   buildHeap(arr);

//   for (let )
// }

// function merge(left, right) {
//   const ret = [];
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       ret.push(left.shift());
//     } else {
//       ret.push(right.shift());
//     }
//   }

//   return ret.concat(left, right);
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = parseInt(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   const r1 = mergeSort(left);
//   const r2 = mergeSort(right);

//   return merge(r1, r2);
// }

function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1);
}

function _medium(arr, left, right) {
  const mid = (left + right) / 2 | 0;

  if (arr[left] > arr[mid]) {
    swap(arr, left, mid);
  };
  if (arr[left] > arr[right]) {
    swap(arr, left, right);
  };
  if (arr[mid] > arr[right]) {
    swap(arr, mid, right);
  };

  swap(arr, mid, right - 1);

  return arr[right - 1];
}

function _quickSort(arr, left, right) {
  if (left >= right) {
    return;
  } 

  const pivot = _medium(arr, left, right);

  let i = left;
  let j = right - 1;

  while (i < j) {
    while (arr[++i] < pivot) {}
    while (arr[--j] > pivot) {}

    if (i < j) {
      swap(arr, i, j);
    }
  }

  swap(arr, i, right - 1);

  _quickSort(arr, left, i - 1);
  _quickSort(arr, i + 1, right);
}

function mergeSort(arr) {
  _mergeSort(arr, 0, arr.length - 1);
}

function _mergeSort(arr, l, r) {
  if (l === r) {
    return;
  }

  const m = (l + r) / 2 | 0;
  _mergeSort(arr, l, m);
  _mergeSort(arr, m + 1, r);
  _merge(arr, l, m, r);
}

function _merge(arr, l, m, r) {
  const left = arr.slice(l, m + 1);
  const right = arr.slice(m + 1, r + 1);
  

  while (left.length && right.length) {
    arr[l] = left[0] <= right[0] ? left.shift() : right.shift();
    l++;
  }

  for (let i = 0; i < left.length; i++) {
    arr[l] = left[i];
    l++;
  }

  for (let i = 0; i < right.length; i++) {
    arr[l] = right[i];
    l++;
  }
}

const arr = [66, 12, 88, 7, 100, 5, 566, 23, 22];

mergeSort(arr);
console.log(arr);
