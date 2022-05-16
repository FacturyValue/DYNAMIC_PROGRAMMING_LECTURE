const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }
    return table[target.length];
};


// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))  //1
// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))  //2
// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));    //0
// console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));  //4
console.log(allConstruct("aaaaaaaaaaaaaaax", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
    "aaaaaa",
    "aaaaaaa"
]));    // []


// m : target.length
// n : wordBank.length
// time O( n ^ m)
// space O(m)
