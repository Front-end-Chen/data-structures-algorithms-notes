function shellSort(arr) {
  let len = arr.length;
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let cur = arr[i];
      let j = i - gap;
      while (j >= 0 && arr[j] > cur) {
        arr[j + gap] = arr[j];
        j -= gap;
      }
      arr[j + gap] = cur;
    }
  }
  return arr;
}

let arr = [3, 2, 5, 7, 6, 1, 8, 4];
console.log(shellSort(arr));
