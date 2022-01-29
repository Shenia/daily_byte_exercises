// 2022-01-24
/**
 * Takes an nxm matrix nums and returns a nums transposed
 * @param {array} nums A nxm matrix
 * @returns {array} transposedNums A mxn matrix that is the transpose of nums
 */
function switcheroo(nums) {
  const transposedNums = [];
  if (nums.length < 1) {
    return transposedNums;
  }

  for (const rowIndex in nums) {
    if (rowIndex == 0) {
      for (const firstRowItem of nums[0]) {
        transposedNums.push([firstRowItem]);
      }
      continue;
    }
    for (const [columnIndex, rowItem] of nums[rowIndex].entries()) {
      transposedNums[columnIndex].push(rowItem);
    }
  }
  return transposedNums;
}

const array1 = [[1, 2], [3, 4]];
console.log("Input: " + JSON.stringify(array1) + ", Output: " + JSON.stringify(switcheroo(array1)));