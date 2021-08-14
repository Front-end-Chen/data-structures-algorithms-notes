function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(l, r) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < l.length && j < r.length) {
    if (l[i] <= r[j]) {
      res.push(l[i++]);
    } else {
      res.push(r[j++]);
    }
  }
  while (i < l.length) res.push(l[i++]);
  while (j < r.length) res.push(r[j++]);
  return res;
}

let arr = [3, 2, 5, 7, 6, 1, 8, 4];
console.log(mergeSort(arr));
