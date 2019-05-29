/**
 * 一些算法的递归实现
 * 递归算法，对于我而言一直都是比较难理解的东西，希望多做几道题后能慢慢理解，并能自发的写出递归算法来解决实际的工程问题
 */

// 查找最大值
function findMax(arr, l = 0, r) {
  if (l === r) {
    return arr[l];
  }

  let a = arr[l];
  let b = findMax(arr, l + 1, r);

  return a >= b ? a : b;
}

console.log(findMax([3, 1, 5, 4, 8, 7, 6, 2], 0, 7));

// 求和
function sum(arr, l, r) {
  if (l === r) {
    return arr[l];
  }

  return arr[l] + sum(arr, l + 1, r);
}

console.log(sum([1, 2, 3, 4], 0, 3));

// 冒泡排序
function bubbleSort(arr, l, r) {
  if (l === r) {
    return;
  }

  for (let i = l; i <= r - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  bubbleSort(arr, l, r - 1);
}

let arr = [2, 6, 5, 4, 1, 3];
bubbleSort(arr, 0, 5);
console.log(arr);

// 求最大公约数
function gcd(a, b) {
  let r = a % b;

  if (r === 0) {
    return b;
  }

  return gcd(b, r);
}

console.log(gcd(72, 56));
