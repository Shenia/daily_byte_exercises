// 2021-01-03
class Node {
  constructor(value, left = null, right = null) {
    this.right = right;
    this.left = left;
    this.value = value;
  }
}

function numPathsRecursive(root, k) {
  if (!root) return 0;
  let numPaths = 0;
  numPaths += numPathsRecursive(root.right, k, 0);
  numPaths += numPathsRecursive(root.left, k, 0);
  numPaths += numPathsOnRoot(root, k, 0);
  return numPaths;
}

function numPathsOnRoot(root, k, sum) {
  let numPaths = 0;
  if (!root) return numPaths;
  sum = sum + root.value;
  if (sum === k) numPaths += 1;
  numPaths += numPathsOnRoot(root.right, k, sum);
  numPaths += numPathsOnRoot(root.left, k, sum);
  return numPaths;
}

example1 = new Node((value = 3), (left = new Node(1)), (right = new Node(8)));
example1Answer = 1;
example1Result = numPathsRecursive(example1, 11);
example2 = new Node(
  (value = 2),
  (left = new Node(-4, (left = new Node(2)))),
  (right = new Node(9))
);
example2Answer = 2;
example2Result = numPathsRecursive(example2, 2);
example3 = new Node(
  (value = 2),
  (left = new Node(0, (left = new Node(2)))),
  (right = new Node(9))
);
example3Answer = 4;
example3Result = numPathsRecursive(example3, 2);
console.log(
  `Expect example1 to return ${example1Answer}, got ${example1Result}, ` +
    (example1Answer === example1Result ? 'pass' : 'fail')
);
console.log(
  `Expect example2 to return ${example2Answer}, got ${example2Result}, ` +
    (example2Answer === example2Result ? 'pass' : 'fail')
);
console.log(
  `Expect example3 to return ${example3Answer}, got ${example3Result}, ` +
    (example3Answer === example3Result ? 'pass' : 'fail')
);

// time complexity: O(n^2)
// space: O(n)
// WE DID IT
