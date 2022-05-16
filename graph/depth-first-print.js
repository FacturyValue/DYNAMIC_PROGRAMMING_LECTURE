// const depthFirstPrint = (graph,source) => {
//     const stack = [source];
//     while(stack.length > 0){
//         const current = stack.pop();
//         console.log(current);
//         for(let neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }
// };
// recrusive 
const depthFirstPrint = (graph, source) => {
    console.log(source);

    for (let neighbor of graph[source]) {
        depthFirstPrint(graph,neighbor);
    }

};

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
}

depthFirstPrint(graph, 'a'); //a b d f c e