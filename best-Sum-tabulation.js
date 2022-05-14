const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num];
                //如果当前组合数组更短,便将它存储
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }
            }
        }
    }
    return table[targetSum];
};
//Memoization
console.log(bestSum(7, [2, 3]));   //[ 2, 2, 3 ]
console.log(bestSum(7, [5, 3, 4, 7])); // [ 7 ]
console.log(bestSum(7, [2, 4]));   //null
console.log(bestSum(8, [2, 3, 5])); // [ 3, 5 ]
console.log(bestSum(300, [7, 14])); //null
