const canConstruct = (target, workBank,memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') {
        return true;
    }
    for (let word of workBank){
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
           if (canConstruct(suffix,workBank,memo) === true){
               memo[target] = true;
               return true;
           }
        }
    }
    memo[target] = false;
    return false;
};
// m = target.length
// n = array.length
console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]))  //true
console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]));    //false
console.log(canConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));  //true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",[
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee"
]));    // false

// brute force
//time O(n ^ m * m)
//space O(m)

// memoized
//time O(n * m * m) = O(n * m ^ 2)
//space O(m ^ 2)
