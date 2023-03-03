/* MERGE SORT FUNCTION */
let numMergeSort = 0;

function mergeSort(l) {
  if (l.length < 2) {
    return l;
  }
  numMergeSort++;
  console.log(numMergeSort);

  let firstHalf = mergeSort(l.slice(0, Math.floor(l.length / 2)));
  let secondHalf = mergeSort(l.slice(Math.floor(l.length / 2), l.length));
  return merge(firstHalf, secondHalf);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    }
    if (left[i] > right[j]) {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
// 1,9
// 169
// 4 10
// 2 4 10
// 1 2 4 6 9 10

//console.log(merge([1,8],[2,4]))

console.log(mergeSort([6, 1, 9, 2, 10, 4, 11]));
//console.log(mergeSort([,1,2,37,4]));

// recursively call merge with less smaller args
