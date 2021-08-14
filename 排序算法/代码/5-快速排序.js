function quickSort(arr, l, r) {
  if (l < r) {
    let mid = partition(arr, l, r);
    quickSort(arr, l, mid - 1);
    quickSort(arr, mid + 1, r);
  }
  return arr;
}

function partition(arr, l, r) {
  //随机选择基准，解决数组基本有序的问题
  if (l < r) {
    let ranIndex = l + Math.floor(Math.random() * (r - l));
    let temp = arr[l];
    arr[l] = arr[ranIndex];
    arr[ranIndex] = temp;
  }

  let pivot = arr[l];
  while (l < r) {
    while (l < r && arr[r] > pivot) r--;
    if (l < r) {
      arr[l] = arr[r];
      l++;
    }
    while (l < r && arr[l] <= pivot) l++;
    if (l < r) {
      arr[r] = arr[l];
      r--;
    }
  }
  arr[l] = pivot;
  return l;
}

let arr = [3, 2, 5, 7, 6, 1, 8, 4];
console.log(quickSort(arr, 0, arr.length - 1));
