const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    //初始化制表索引为0的值
    table[0] = 1;

    for (let i = 0;i <= target.length;i++){
        for (let word of wordBank){
            // 检查当前的单词是否与从索引i开始的字符匹配
            if (target.slice(i,i + word.length) === word){
                table[i + word.length] += table[i];
            }
        }
    }
    return table[target.length];
};
// m = target
// n = wordBank.length
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))  //2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))  //1
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
//space O(m)
