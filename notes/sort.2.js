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

    swap(arr, i, min);
  }

  return arr;
}

function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        swap(arr, j, j + 1);
      }
    }

    if (flag === false) {
      break;
    }
  }

  return arr;
}

function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let tmp = arr[i];

    let j;
    for (j = i; j > 0 && tmp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }

    arr[j] = tmp;
  }

  return arr;
}

function shellSort(arr, gaps = [1, 3, 5]) {
  for (const gap of gaps) {
    for (let i = gap; i < arr.length; i++) {
      let tmp = arr[i];
      let j;
      for (j = i; j >= gap && tmp < arr[j - gap]; j -= gap) {
        arr[j] = arr[j - gap];
      }

      arr[j] = tmp;
    }
  }

  return arr;
}

console.log(shellSort([5, 3, 7, 1, 4]));
