const gridTraveler = (m, n) => {
    const table = Array(m + 1)
        // .fill(Array(n + 1));
        .fill()
        .map(() => Array(n + 1).fill(0));
    table[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (i + 1 <= m) table[i + 1][j] += current;
            if (j + 1 <= n) table[i][j + 1] += current;
        }
    }
    return table[m][n];
}

console.log(gridTraveler(1,1)); //1
console.log(gridTraveler(2,3)); //3
console.log(gridTraveler(3, 2)); //3
console.log(gridTraveler(3,3)); //6
console.log(gridTraveler(18,18)); //2333606220

//Tablulation Recipe

// - visualize the problem as a table
// - size the table based on  the  inputs
// - initialize the table with default values
// - seed the trivial answer  into the table
// - iterate through the table
// - fill futher positions based on the current position


