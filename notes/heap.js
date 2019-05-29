// https://lufficc.com/blog/heap-sort-and-max-priority-queue

// 交换
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 维护最大堆
function heapify(tree, n, i) {
  if (i >= n) {
    return;
  }

  let c1 = 2 * i + 1;
  let c2 = 2 * i + 2;
  let max = i;

  if (c1 < n && tree[c1] > tree[max]) {
    max = c1;
  }

  if (c2 < n && tree[c2] > tree[max]) {
    max = c2;
  }

  if (max !== i) {
    swap(tree, max, i);
    heapify(tree, n, max);
  }
}

// 建立一个最大堆
function buildMaxHeap(arr) {
  let len = arr.length;
  let last = len - 1;
  let parent = ((last - 1) / 2) | 0;

  for (let i = parent; i >= 0; i--) {
    heapify(arr, len, i);
  }
}

// 堆排序
function heapSort(arr) {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, i, 0);
    heapify(tree, i, 0);
  }
}

let tree = [5, 3, 4, 1, 2, 2, 6];
heapSort(tree);

tree.forEach(item => {
  console.log(item);
});
