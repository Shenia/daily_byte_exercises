// 2021-01-11
class Node {
  constructor(value, left = null, right = null) {
    this.right = right;
    this.left = left;
    this.value = value;
  }
}

function removeSubtree(root) {
  if (root.left) {
    root.left = removeSubtree(root.left);
  }
  if (root.right) {
    root.right = removeSubtree(root.right);
  }
  if (!root.left && !root.right && root.value === 0) {
    return null;
  } else {
    return root;
  }
}

example1 = new Node(1, new Node(1), new Node(0));
example2 = new Node(1, new Node(1), new Node(1));
example3 = new Node(1, new Node(1), new Node(0, new Node(1), new Node(1)))
example4 = new Node(1, new Node(1), new Node(0, new Node(0), new Node(0)))
example5 = new Node(1, new Node(1), new Node(1, new Node(0), new Node(0)))
// answer1 = removeSubtree(example1);
// console.log("example 1:");
// answer2 = removeSubtree(example2);
// console.log("example 2:");
// answer3 = removeSubtree(example3);
// console.log("answer 3:");
// answer4 = removeSubtree(example4);
// console.log("answer 4:");
answer5 = removeSubtree(example5);
console.log("answer 5:");
console.log(JSON.stringify(answer5, (key, value) => {
  if (value === null) {
      return undefined;
  }
  return value;
}, 4));;

// runtime: O(n)
// space: O(n) (max depth of tree)