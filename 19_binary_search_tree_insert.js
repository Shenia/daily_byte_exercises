// 2021-01-06
class Node {
  constructor(value, left = null, right = null) {
    this.right = right;
    this.left = left;
    this.value = value;
  }
  insert(value) {
    let node = this;
    while(true) {
      if (value > node.value) {
        if (node.right) {
          node = node.right;
        } else {
          node.right = new Node(value);
          return;
        }
      } else {
        if (node.left) {
          node = node.left;
        } else {
          node.left = new Node(value);
          return;
        }
      }
    } 
  }
}

function binarySearchTreeInsert(root, value) {
  root.insert(value);
  return root;
}

function iterativePrint(root) {
  let queue = [root];
  while (queue.length !== 0) {
    let print_queue = [];
    let next_queue = [];
    while (queue.length !== 0) {
      let node = queue.pop(0);
      if (node.left) {
        next_queue.push(node.left);
      }
      if (node.right) {
        next_queue.push(node.right);
      }
      print_queue.push(node.value);
    }
    // prints each level on one line as an array
    console.log(print_queue);
    while (next_queue.length !== 0) {
      queue.push(next_queue.pop(0));
    }
  }
}

example1 = new Node(2, new Node(1), new Node(3));
// iterativePrint(binarySearchTreeInsert(example1, 4));
console.log(JSON.stringify(binarySearchTreeInsert(example1, 4), (key, value) => {
  if (value === null) {
      return undefined;
  }
  return value;
}, 4));
