// 2020-12-27
class Node {
  constructor(value, array = []) {
    this.children = array;
    this.value = value;
  }
}

function subtreeRecursive(sRoot, tRoot) {
  if (!sRoot && !tRoot) return true;
  if (!sRoot || !tRoot) return false;
  if (isMatch(sRoot, tRoot)){ 
    return true;
  }
  for (const child of sRoot.children) {
    if (subtreeRecursive(child, tRoot)) {
      return true;
    }
  }
  return false;
}

function isMatch(sRoot, tRoot) {
  if (!sRoot && !tRoot) return true;
  if (!sRoot || !tRoot) return false;
  if (sRoot.value !== tRoot.value) return false;
  if (
    sRoot.value === tRoot.value &&
    sRoot.children.length === 0 &&
    tRoot.children.length === 0
  )
    return true;
  // sIndex:tIndex
  let childrenIndexMapping = {};
  let tUsed = [];
  for (const [sIndex, sChild] of sRoot.children.entries()) {
    for (const [tIndex, tChild] of tRoot.children.entries()) {
      if (tIndex in tUsed) {
        continue;
      }
      if (isMatch(sChild, tChild)) {
        childrenIndexMapping[sIndex] = tIndex;
        tUsed.push(tIndex);
        break;
      }
    }
    if (!(sIndex in childrenIndexMapping)) {
      return false;
    }
  }
  return tUsed.length === tRoot.children.length;
}

let s1 = new Node(1, [new Node(3), new Node(8)]);
let t1 = new Node(1, [new Node(8)]);

let s2 = new Node(7, [new Node(8), new Node(3)]);
let t2 = new Node(7, [new Node(8), new Node(3)]);

let s3 = new Node(7, [new Node(8), new Node(3, [new Node(1)])]);
let t3 = new Node(7, [new Node(8), new Node(3)]);

let s4 = new Node(1, [
  new Node(2, [new Node(2), new Node(2), new Node(4)]),
  new Node(3),
]);
let t4 = new Node(2, [new Node(2), new Node(2), new Node(4)]);

let s5 = new Node(1, [
  new Node(2, [new Node(2), new Node(2), new Node(4)]),
  new Node(3),
]);
let t5 = new Node(2, [new Node(2), new Node(4)]);

let s6 = new Node(1, [
  new Node(2, [new Node(3), new Node(4), new Node(5)]),
  new Node(6),
]);
let t6 = new Node(2, [new Node(3), new Node(4), new Node(5)]);

let s7 = new Node(2, [new Node(2), new Node(4), new Node(4)]);
let t7 = new Node(2, [new Node(2), new Node(4)]);

let s8 = new Node(2, [null]);
let t8 = new Node(2, [null]);

console.log(subtreeRecursive(s1, t1)); //false
console.log(subtreeRecursive(s2, t2)); //true
console.log(subtreeRecursive(s3, t3)); //false
console.log(subtreeRecursive(s4, t4)); //true
console.log(subtreeRecursive(s5, t5)); //false
console.log(subtreeRecursive(s6, t6)); //true
console.log(subtreeRecursive(s7, t7)); //false
console.log(subtreeRecursive(s8, t8)); //false

s1 = new Node(1, [new Node(3), new Node(8)])
t1 = new Node(1, [null, new Node(8)])

s2 = new Node(7, [new Node(8), new Node(3)])
t2 = new Node(7, [new Node(8), new Node(3)]) 

s3 = new Node(7, [new Node(8), new Node(3)])
t3 = new Node(7, [new Node(8), new Node(3, [new Node(1)])])

s4 = new Node(1, [null, new Node(8)])
t4 = new Node(1, [null, new Node(7)])

s5 = new Node(1, [null, new Node(8)])
t5 = new Node(1, [new Node(7), new Node(8)])

s6 = new Node(1, [null, new Node(8)])
t6 = new Node(8)

console.log("BARU'S TESTS");

console.log(subtreeRecursive(s1, t1)); //false
console.log(subtreeRecursive(s2, t2)); //true
console.log(subtreeRecursive(s3, t3)); //false
console.log(subtreeRecursive(s4, t4)); //false
console.log(subtreeRecursive(s5, t5)); //false
console.log(subtreeRecursive(s6, t6)); //true

console.log("YAY");

// runtime: O(s^2)
// space complexity: O(s)

// BARU'S CODE

// class Node {
//   constructor(name, arr) {
//       this.children = arr !== undefined ? arr : [];
//       this.name = name;
//   }
// }

// function treeWithinTree(s, t) {
//   return treeWithinTree_helper(s, t, false);
// }

// function treeWithinTree_helper(s, t, looksLikeSubset) {
//   if (t === null && s === null) {
//       // initial input t always exists
//       return looksLikeSubset;
//   }
//   if (t === null || s === null) {
//       return false;
//   }
//   looksLikeSubset = s.name === t.name;
//   if (s.children.length === 0) {
//       return looksLikeSubset && t.children.length === 0;
//   }
//   for (const node_idx in s.children) {
//       const s_node = s.children[node_idx];
//       let t_node = t.children[node_idx] || null;
//       looksLikeSubset = looksLikeSubset && treeWithinTree_helper(s_node,
//                                                                  t_node,
//                                                                  looksLikeSubset);
//   }
//   return looksLikeSubset || s.children.some((child) => treeWithinTree_helper(child, t, looksLikeSubset));
// }