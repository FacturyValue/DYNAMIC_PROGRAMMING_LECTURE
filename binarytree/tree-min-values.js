// n = # nodes
// time  : O(n)
// space : O(n)
// brute force
// deepth-deep-search
/*const treeMinValues = (root) => {
  let minValue= Infinity;
  const stack = [root];
  while (stack.length > 0){
      const current = stack.pop();
      if (current.val < minValue)
          minValue = current.val;
      if (current.left !== null){
          stack.push(current.left);
      }

      if (current.right !== null){
          stack.push(current.right);
      }
  }

  return minValue;
}*/
// breadth-deep-search
/*const treeMinValues = (root) => {
    let minValue= Infinity;
    const stack = [root];
    while (stack.length > 0){
        const current = stack.shift();
        if (current.val < minValue)
            minValue = current.val;
        if (current.left !== null){
            stack.push(current.left);
        }

        if (current.right !== null){
            stack.push(current.right);
        }
    }

    return minValue;
}*/
// deepth-deep-search && recrusive
const treeMinValues = (root) => {
    if (root === null) return  Infinity;
    const leftMin = treeMinValues(root.left);
    const rightMin = treeMinValues(root.right);
    return Math.min(root.val,leftMin,rightMin);
};


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
let result = treeMinValues(a);
console.log(result);    //-34
