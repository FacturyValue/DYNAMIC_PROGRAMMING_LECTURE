const treeInclude = (root, target) => {
  if (root === null) return false;
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val === target) {
            return true;
        } else {
            return false;
        }
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return false;
}
//recrusive
const treeInclude = (root,target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeInclude(root.left,target) || treeInclude(root.right,target);
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const e = new Node('e');
const d = new Node('d');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

treeInclude(a,e);

