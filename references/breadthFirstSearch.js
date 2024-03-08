/*
Consider follow graph:
A -- B -- C
|    | 
D -- E -- F

representing this graph using adjacency list:
const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E']
}
*/

function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  const result = [];

  while (queue.length) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        queue.push(neighbor);
      }
    }
  }
  return result;
}

// bfs(graph, 'A');  ->  ['A', 'B', 'D', 'C', 'E', 'F']

/*
Example of BFS for a tree
    1
   / \
  2   3
 / \ / \
4   56  7
*/

function createNode(value, left = null, right = null) {
  return { value, left, right };
}
const tree = createNode(
  1,
  createNode(2, createNode(4), createNode(5)),
  createNode(3, createNode(6), createNode(7))
);

function bfs(node) {
  if (!node) {
    return [];
  }

  const queue = [node];
  const result = [];

  while (queue.length) {
    const current = queue.shift();
    result.push(current.value);

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
}

bfs(tree); // [1,2,3,4,5,6,7]
