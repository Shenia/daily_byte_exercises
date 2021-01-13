// 2021-01-13
function thirdLargestDistinct(nums) {
  // sort
  let findOrder = 3;
  let distinctSeen = 0;
  if (nums.length === 0) {
    return null;
  } else if (nums.length < 3) {
    findOrder = 1;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
    if (i === 0 || nums[i] !== nums[i-1]) {
      distinctSeen += 1;
      if (distinctSeen >= findOrder) {
        return nums[i];
      }
    }
  }
  return nums[0];
}
// runtime: O(n^2)
// space: O(1)


// GitHub: @ravenCondol's solution, ooooOOOOH
function thirdLargest(nums) {
  function sortDecreasing(prev, next) {
      return prev > next ? -1 : 1;
  }
  const largests = [];
  for (var i = 0; i < nums.length; i++) {
      if (!largests.includes(nums[i])) {
          largests.push(nums[i]);
          largests.sort(sortDecreasing);
          if (largests.length > 3) {
              largests.pop();
          }
      }
  }
  console.log(largests)
  return largests[largests.length === 3 ? 2 : 0];
}
// runtime: O(n)
// space: O(1)

function checkOutput(testFunction, input) {
  console.log(`Input: ${input}, Output: ${testFunction(input)}`);
}

checkOutput(thirdLargestDistinct, [1, 4, 2, 3, 5]);
checkOutput(thirdLargestDistinct, [2, 3, 3, 5]);
checkOutput(thirdLargestDistinct, [9, 5]);
