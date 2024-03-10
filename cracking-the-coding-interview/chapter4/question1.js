/*
Route Between Nodes: Given a directed graph, design an algorithm to find
out whether there is a route between two nodes.
*/

console.log("----------------Solution 1 (website)----------------------");
/*
Approach: Either Breadth First Search (BFS) or Depth First Search (DFS) 
can be used to find path between two vertices. Take the first vertex as a 
source in BFS (or DFS), follow the standard BFS (or DFS). If the second 
vertex is found in our traversal, then return true else return false.

BFS Algorithm: 

The implementation below is using BFS.
Create a queue and a visited array initially filled with 0, of size 
V where V is a number of vertices.
Insert the starting node in the queue, i.e. push u in the queue 
and mark u as visited.
Run a loop until the queue is not empty.
Dequeue the front element of the queue. Iterate all its adjacent 
elements. If any of the adjacent elements is the destination return true. 
Push all the adjacent and unvisited vertices in the queue and mark them 
as visited.
Return false as the destination is not reached in BFS.

time complexity: O(V + E), where V is the number of vertices in the graph
and E is the number of edges in the graph.
Space complexity: O(V) there can be atmost V elements in the queue.
So the space needed is O(V)
*/

let V;
let adj;

function Graph(v) {
  V = v;
  adj = new Array(v);
  for (let i = 0; i < V; i++) {
    adj[i] = [];
  }
}
// Function to add an edge into the graph
function addEdge(v, w) {
  adj[v].push(w);
}
// prints BFS traversal from a given source s
function isReachable(s, d) {
  let temp;

  // Mark all the vertices as not visited (by default set
  // as false)
  let visited = new Array(V);
  for (let i = 0; i < V; i++) {
    visited[i] = false;
  }

  // Create a queue for BFS
  let queue = [];

  // Mark  the current node as visited and enqueue it
  visited[s] = true;
  queue.push(s);

  while (queue.length !== 0) {
    // Dequeue a vertex from queue and print it
    n = queue.shift();

    if (n === d) {
      return true;
    }
    for (let i = 0; i < adj[n].length; i++) {
      if (visited[adj[n][i]] === false) {
        queue.push(adj[n][i]);
        visited[adj[n][i]] = true;
      }
    }
  }
  // If BFS is complete without visited d
  return false;
}
// Driver method
Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 3);

let u = 1;
let v = 3;

if (isReachable(u, v)) {
  console.log("There is a path from " + u + " to " + v);
} else {
  console.log("There is no path from " + u + " to " + v);
}

u = 3;
v = 1;
if (isReachable(u, v)) {
  console.log("There is a path from " + u + " to " + v);
} else {
  console.log("There is no path from " + u + " to " + v);
}

/* 
DFS algorithm:
if start === end return 1 since we have reached our destination
Mark start as visited.
Traverse directly connected vertices of start and recur the
function dfs for every such unexplored vertex.
return 0 if we do not reach our destination

*/
