// 2020-12-20
class Node {
    constructor(name, arr) {
        this.children = arr !== undefined ? arr : [];
        this.name = name;
    }
}

function findMaxDepth_recursive(root) {
    return findMaxDepth_helper(root, 1);
}

function findMaxDepth_helper(node, cur_depth) {
    if (node.children.length === 0) {
        return cur_depth;
    }
    return Math.max(...node.children.map((x) => findMaxDepth_helper(x, cur_depth+1)));
}

example = new Node(4, [new Node(3, [new Node(7)]), new Node(9), new Node(2, [new Node(2)])]);
console.log("recursive:", findMaxDepth_recursive(example));

// time complexity: O(n)
// space complexity: O(n) for worst case (tree unbalanced) in stack storage
// O(log(n)) for best case (tree balanced, height is log(n)) in stack storage

function findMaxDepth_iterative(root) {
    queue = [];
    queue.push(root);
    depth = 0;
    while (queue.length > 0) {
        depth++;
        numlevelNodes = queue.length;
        for (i=0; i < numlevelNodes; i++)  {
            node = queue.shift();
            node.children.forEach(child => queue.push(child));
        }
    }
    return depth;
}
console.log("iterative:", findMaxDepth_iterative(example));

// time complexity: O(n) each node is queued and dequeued once
// space complexity: O(n) max number of nodes at each level