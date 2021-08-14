function insertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let cur = arr[i];
    let preIndex = i - 1;
    while (preIndex >= 0 && arr[preIndex] > cur) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = cur;
  }
  return arr;
}

let arr = [3, 2, 5, 7, 6, 1, 8, 4];
console.log(insertSort(arr));
