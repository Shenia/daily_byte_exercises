// 2020-12-25
class Node {
  constructor(value, array=[]) {
    this.children = array;
    this.value = value;
  }
}

function sumBetweenRecursive(root, low, high) {
  if (root.children.length === 0) {
    return isBetween(root.value, low, high) ? root.value : 0;
  }
  return sumBetweenRecursiveHelper(root, low, high, 0);
}

function sumBetweenRecursiveHelper(root, low, high) {
  let sum = 0;
  for (child of root.children) {
    sum += sumBetweenRecursiveHelper(child, low, high);
  }
  // console.log("sum:", sum);
  sum += isBetween(root.value, low, high) ? root.value : 0;
  // console.log("value:", root.value, "sum:", sum);
  return sum;
}

function isBetween(value, low, high) {
  if (value >= low && value <= high) {
    // console.log("add:", value);
  }
  return value >= low && value <= high;
}

example1 = new Node(1, [new Node(7, [new Node(4)]), new Node(5, [new Node(3), new Node(9)])]);
console.log("recursive:", sumBetweenRecursive(example1, 3, 5));

// runtime: O(n)
// space: O(m) where m is the depth of the tree