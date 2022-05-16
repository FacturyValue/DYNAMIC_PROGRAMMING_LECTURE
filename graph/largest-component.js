const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0;
    for(let node in graph){
        const size = explorSize(graph,node,visited);
        if(size > longest) longest = size;

    }
    return longest;
};

const explorSize = (graph,node,visited) => {
    if(visited.has(node)) return 0;
    visited.add(node);
    let size = 1;
    for(let neighbor of graph[node]){
        size += explorSize(graph,neighbor,visited);
    }
    return size;
};

let result  = largestComponent({
    0: ['8','1','5'],
    1: ['0'],
    5: ['0','8'],
    8: ['0','5'],
    2: ['3','4'],
    3: ['2','4'],
    4: ['3','2']
});
console.log(result);
module.exports = {
    largestComponent
};