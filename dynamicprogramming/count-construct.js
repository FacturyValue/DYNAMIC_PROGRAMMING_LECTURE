const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;
    let totalCount = 0;
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }
    memo[target] = totalCount;
    return totalCount;
};
// m = target.length
// n = array.length
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))  //1
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))  //2
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));    //0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));  //4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee"
]));    // 0
// brute force
//time O(n ^ m * m)
//space O(m ^ 2)

// memoized
//time O(n * m * m) = O(n * m ^ 2)
//space O(m ^ 2)
