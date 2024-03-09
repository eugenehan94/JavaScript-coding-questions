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

function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();
  const result = [];

  while (stack.length) {
    const vertex = stack.pop();
    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex]) {
        stack.push(neighbor);
      }
    }
  }
  return result;
}

// dfs(graph, 'A') -> ['A', 'D', 'E', 'F', 'B', 'C']

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

function dfs(node) {
  if (!node) {
    return [];
  }

  const stack = [node];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result;
}

// dfs(tree);  [1,2,4,5,3,6,7]
