function countingSort(arr) {
  let max = Math.max(...arr),
    min = Math.min(...arr);
  let counts = new Array(max - min + 1).fill(0);
  let sortIndex = 0;
  for (let a of arr) {
    counts[a - min]++;
  }
  for (let i = 0; i < counts.length; i++) {
    while (counts[i]) {
      arr[sortIndex] = min + i;
      counts[i]--;
      sortIndex++;
    }
  }
  return arr;
}

let arr = [3, 2, 5, 7, 6, 1, 8, 4];
console.log(countingSort(arr));
