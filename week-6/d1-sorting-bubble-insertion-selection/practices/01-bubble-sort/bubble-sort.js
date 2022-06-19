function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {

      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        console.log(arr.join(",")) // rewuired for mocha to pass - testing each loopr for sort patten.
      }

    }
    if (!swapped) return arr; // not technically needed
  }
  return arr;
}

const arr = [3, 2, 0, 4, 1]
bubbleSort(arr);
console.log(bubbleSort(arr));
module.exports = bubbleSort;
