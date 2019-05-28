/**
 * bubbleSort 冒泡排序
 */

export function bubbleSort(arr) {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    let flag = false;
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }

    if (flag === false) {
      return arr;
    }
  }

  return arr;
}
