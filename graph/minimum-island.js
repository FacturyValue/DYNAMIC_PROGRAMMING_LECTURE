// nested loop + dfs
// time  : O(rc)
// space : O(rc)
const minimumIsland = (grid) => {
    const visited = new Set();
    let minSize = Infinity;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid.length; c++) {
           const size = exploreSize(grid, r, c, visited);
           if(size > 0 && size < minSize){
               minSize = size;
           }
        }
    }
    //返回最小区域的岛屿
    return minSize;
};

const exploreSize = (grid, r, c, visited) => {
    const rowBounds = 0 <= r && r < grid.length;
    const colBounds = 0 <= c && c < grid[0].length;
    if (!rowBounds || !colBounds) return 0;
    if (grid[r][c] === 'W') return 0;

    const pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    // depth first search
    //记录每个岛屿区域的大小
    let size = 1;
    size += exploreSize(grid, r - 1, c, visited);
    size += exploreSize(grid, r + 1, c, visited);
    size += exploreSize(grid, r, c - 1, visited);
    size += exploreSize(grid, r, c + 1, visited);
    return size;
};
const grid = [
    ['W','L','W','W','L'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W'],
];
console.log("最小岛屿的区域大小为：" + minimumIsland(grid));