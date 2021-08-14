let len;
function heapSort(arr) {
  len = arr.length;
  if (len < 1) return arr;
  //构建一个最大堆
  buildMaxHeap(arr);
  //循环将堆首位(最大值)与末位交换,然后在重新调整最大堆
  //此处写arr.length，因为n是控制堆元素个数，会改变
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0);
  }
  return arr;
}

function buildMaxHeap(arr) {
  //初始化，i从最后一个父节点开始调整，最后一个父节点为len/2-1
  // for (let i = Math.floor(len / 2 - 1); i >= 0; i--) {
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i);
  }
}

function heapify(arr, i) {
  let l = 2 * i + 1,
    r = 2 * i + 2,
    largest = i;
  //如果有左子树,且左子树大于父节点,则将最大指针指向左子树
  if (l < len && arr[l] > arr[largest]) {
    largest = l;
  }
  //如果有右子树,且右子树大于父节点,则将最大指针指向右子树
  if (r < len && arr[r] > arr[largest]) {
    largest = r;
  }
  //如果父节点不是最大值，则将父节点与最大值交换，并且递归调整与父节点交换的位置。
  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}

function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

let arr = [3, 2, 5, 7, 6, 1, 8, 4];
console.log(heapSort(arr));
