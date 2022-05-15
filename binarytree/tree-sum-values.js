// n = # nodes
// time  : O(n)
// space : O(n)
// brute force
/*const treeSumValues = (root) => {
    // base case
    if (root === null) return 0;
    // recrusive call
    return root.val +treeSumValues(root.left) + treeSumValues(root.right);
};*/
// recrusive way 1th
/*const treeSumValues = (root) => {
    // base case
    if (root === null) return 0;
    // recrusive call
    let totalSum = root.val;
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.left !== null) {
            queue.push(current.left);
            totalSum += current.left.val;
        }
        if (current.right !== null) {
            queue.push(current.right);
            totalSum += current.right.val;
        }
    }

    return totalSum;
};*/
// recrusive method 2th
// best practive
const treeSumValues = (root) => {
    // base case
    if (root === null) return 0;
    // recrusive call
    // let totalSum = root.val;
    let totalSum = 0;
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        totalSum += current.val;
        if (current.left !== null) {
            queue.push(current.left);
        }
        if (current.right !== null) {
            queue.push(current.right);
        }
    }
    return totalSum;
};


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(5);
const c = new Node(14);
const e = new Node(8);
const d = new Node(9);
const f = new Node(-34);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
let result = treeSumValues(a);
console.log(result);    //3
