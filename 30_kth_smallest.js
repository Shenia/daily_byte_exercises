// 2022-01-23
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * Returns the kth smallest element in a binary search tree
 * @param {Node} tree A binary search tree
 * @param {number} k The ordinal number
 * @return {number} value The kth smallest value;
 */
function kthSmallest(treeNode, k) {
  [foundSmallest, value] = kthSmallestHelper(treeNode, k, 0);
  return value;
}

/**
 * Returns the nth smallest value in the entire tree to the left of the first right parent of the subtree, where n is min(num nodes traversed, k)
 * @param {Node} subtreeNode A binary search tree
 * @param {number} k The ordinal number
 * @param {number} foundSmallest The number of nodes to the left of this subtree, up to k
 * @return {number} foundSmallest The number of nodes to the left the first right parent of the subtree, up to k
 * @return {number} value The foundSmallest-th smallest value in the tree
 */
function kthSmallestHelper(subtreeNode, k, foundSmallest) {
  if (subtreeNode.left) {
    [foundSmallest, value] = kthSmallestHelper(subtreeNode.left, k, foundSmallest);
    if (foundSmallest === k) {
      return [foundSmallest, value];
    }
  }
  foundSmallest = foundSmallest + 1;
  if (foundSmallest === k) {
    return [foundSmallest, subtreeNode.value];
  }

  if (subtreeNode.right) {
    return kthSmallestHelper(subtreeNode.right, k, foundSmallest);
  }

  return [foundSmallest, subtreeNode.value];
}

tree1 = new Node(1);
tree2 = new Node(3, new Node(2), new Node(4));
tree3 = new Node(7, new Node(3, null, new Node(5)), new Node(9));

console.log("Get: " + kthSmallest(tree1, 1) + ", Should be 1");
console.log("Get: " + kthSmallest(tree2, 1) + ", Should be 2");
console.log("Get: " + kthSmallest(tree3, 3,) + ", Should be 7");