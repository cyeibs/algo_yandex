function merge_sort(arr, left, right) {
  if (right - left <= 1) {
    return;
  }
  let mid = Math.floor((left + right) / 2);
  merge_sort(arr, left, mid);
  merge_sort(arr, mid, right);
  let merged = merge(arr, left, mid, right);

  for (let i = left; i < right; i++) {
    arr[i] = merged[i - left];
  }
}

function merge(arr, left, mid, right) {
  let res = [];
  let i = left;
  let j = mid;

  while (i < mid && j < right) {
    if (arr[i] < arr[j]) {
      res.push(arr[i]);
      i++;
    } else {
      res.push(arr[j]);
      j++;
    }
  }

  while (i < mid) {
    res.push(arr[i]);
    i++;
  }

  while (j < right) {
    res.push(arr[j]);
    j++;
  }

  return res;
}

function test() {
  var a = [1, 4, 9, 2, 10, 11];
  var b = merge(a, 0, 3, 6);
  var expected = [1, 2, 4, 9, 10, 11];

  var c = [1, 4, 2, 10, 1, 2];
  merge_sort(c, 0, 6);
  expected = [1, 1, 2, 2, 4, 10];
}
