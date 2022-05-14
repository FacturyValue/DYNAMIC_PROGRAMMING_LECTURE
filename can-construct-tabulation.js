const canConstruct = (target, workBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;


    for (let i = 0;i <= target.length;i++){
        if (table[i] === true){
            for (let word of workBank){
                // 检查当前的单词是否与从索引i开始的字符匹配
                if (target.slice(i,i + word.length) === word){
                    table[i + word.length] = true;
                }
            }
        }
    }
    return table[target.length];
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
//space O(m)
