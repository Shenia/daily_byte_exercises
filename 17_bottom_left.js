// 2021-01-04
class Node {
  constructor(value, left = null, right = null) {
    this.right = right;
    this.left = left;
    this.value = value;
  }
}

function bottomLeft(root) {
  let queue = [root];
  let newQueue = [];
  while(queue.length !== 0) {
    for (let index in queue) {
      let currentNode = queue[index];
      if (currentNode.left) {
        newQueue.push(currentNode.left);
      }
      if (currentNode.right) {
        newQueue.push(currentNode.right);
      }
    }
    if (newQueue.length === 0) {
      return queue[0].value;
    } else {
      while (queue.length !== 0) {
        queue.pop();
      }
      while (newQueue.length !== 0) {
        queue.push(newQueue.pop(0));
      }
    }
  }
}

// runtime: O(n)
// space: O(n)

function bottomBarrel(root) {
  return bottomBarrel_helper(root, 0, root.value)[1];
}

function bottomBarrel_helper(root, current_level, current_value) {
  if (!root) {
      return [current_level, current_value];
  }
  let leftItem = bottomBarrel_helper(root.left, current_level+1, root.value);
  let rightItem = bottomBarrel_helper(root.right, current_level+1, root.value);
  if (leftItem[0] >= rightItem[0]) {
      return [leftItem[0], leftItem[1]];
  } else {
      return [rightItem[0], rightItem[1]];
  }
}

// runtime: O(n)
// space: O(n)

example1 = new Node((value = 1), (left = new Node(2, new Node(4))), (right = new Node(3)));
example1Answer = 4;
example1Result = bottomLeft(example1);
example2 = new Node(
  (value = 8),
  (left = new Node(1)),
  (right = new Node(4, new Node(2)))
);
example2Answer = 2;
example2Result = bottomLeft(example2, 2);
// example3 = new Node(
//   (value = 2),
//   (left = new Node(0, (left = new Node(2)))),
//   (right = new Node(9))
// );
// example3Answer = 4;
// example3Result = numPathsRecursive(example3, 2);
console.log(
  `Expect example1 to return ${example1Answer}, got ${example1Result}, ` +
    (example1Answer === example1Result ? 'pass' : 'fail')
);
console.log(
  `Expect example2 to return ${example2Answer}, got ${example2Result}, ` +
    (example2Answer === example2Result ? 'pass' : 'fail')
);