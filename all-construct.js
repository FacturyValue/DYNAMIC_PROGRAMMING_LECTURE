const allConstruct = (target, wordBank,memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];
    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank,memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
};


// m = target.length
// n = wordBank.length
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))  //1
// [
//   [ 'abc', 'def' ]
// ]

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))  //2
//    [
//      [ 'purp', 'le' ],
//      [ 'p', 'ur', 'p', 'le' ]
//    ]

console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));    //0
//[]
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));  //4
//[
//   [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
//   [
//     'enter', 'a',
//     'p',     'ot',
//     'ent',   'p',
//     'o',     't'
//   ],
//   [
//     'enter', 'a',
//     'p',     'o',
//     't',     'ent',
//     'p',     'ot'
//   ],
//   [
//     'enter', 'a',
//     'p',     'o',
//     't',     'ent',
//     'p',     'o',
//     't'
//   ]
// ]
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee"
]));    // []
// time O( n ^ m)
// space O(m)
