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

function merge(left, right) {
  const ret = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      ret.push(left.shift());
    } else {
      ret.push(right.shift());
    }
  }

  return ret.concat(left, right);
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const center = parseInt(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  const r1 = mergeSort(left);
  const r2 = mergeSort(right);

  return merge(r1, r2);
}

function quickSort(arr) {
 _partition(arr, 0, arr.length - 1);
}

function _medium(arr, left, right) {
  const center = (left + right) / 2 | 0;

  if (arr[left] > arr[center]) {
    swap(arr, left, center);
  };
  if (arr[left] > arr[right]) {
    swap(arr, left, right);
  };
  if (arr[center] > arr[right]) {
    swap(arr, center, right);
  };

  swap(arr, center, right - 1);

  return arr[right - 1];
}

function _partition(arr, left, right) {
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

  _partition(arr, left, i - 1);
  _partition(arr, i + 1, right);
}


const arr = [66, 12, 88, 7, 100, 5, 566, 23];

quickSort(arr);
console.log(arr);
