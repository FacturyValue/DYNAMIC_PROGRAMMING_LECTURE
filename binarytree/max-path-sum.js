const maxPathSum = (root) => {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;

    const maxChild = Math.max(
        maxPathSum(root.left),
        maxPathSum(root.right)
    )
    return root.val + maxChild;
}
//ADT

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(19);
const b = new Node(53);
const c = new Node(14);
const e = new Node(-8);
const d = new Node(9);
const f = new Node(-34);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
let result = maxPathSum(a);
console.log(result);  //81
