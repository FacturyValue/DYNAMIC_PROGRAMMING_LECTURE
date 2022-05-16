const breathFirstPrint = (graph,source) => {
    const queue = [source];
    while(queue.length > 0){
        const current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
};
// recrusive 
// const breathFirstPrint = (graph, source) => {
//     console.log(source);

//     for (let neighbor of graph[source]) {
//         breathFirstPrint(graph,neighbor);
//     }

// };

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

breathFirstPrint(graph, 'a'); //a c b e d f