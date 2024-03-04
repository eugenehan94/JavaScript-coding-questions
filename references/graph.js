// Adjacency List as a Hashmap
// const graph = {
//   a: ["a", "b"],
//   b: ["c"],
//   c: ["d"],
//   d: ["b", "c"],
// };

class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = []; //adjacency list
  }
  addAdjacent(node) {
    this.adjacents.push(node);
  }
  removeAdjacent(node) {
    const index = this.adjacents.indexOf(node);
    if (index > -1) {
      this.adjacents.splice(index, 1);
      return node;
    }
  }
  getAdjacents() {
    return this.adjacents;
  }
  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1;
  }
}

class Graph {
  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map();
    this.edgeDirection = edgeDirection;
  }
  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if (this.edgeDirection === Graph.UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode); // <3>
    }

    return [sourceNode, destinationNode];
  }
  addVertex(value) {
    if (this.nodes.has(value)) {
      return this.nodes.get(value);
    } else {
      const vertex = new Node(value);
      this.nodes.set(value, vertex);
      return vertex;
    }
  }
  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);
    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);
      if (this.edgeDirection === Graph.UNDIRECTED) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }
    return [sourceNode, destinationNode];
  }
  getNodes(value) {
    return this.nodes.get(value);
  }
  /*
We are using JavaScript generators, notice the * in 
front of the function. This generator iterates one 
value at a time. 
*/
  *bfs(first) {
    const visited = new Map();
    const visitList = new Queue();

    visitList.add(first);

    while (!visitList.isEmpty()) {
      const node = visitList.remove();
      if (node && !visited.has(node)) {
        yield node;
        visited.set(node);
        node.getAdjacents().forEach((adj) => visitList.add(adj));
      }
    }
  }
}

Graph.UNDIRECTED = Symbol("undirected graph");
Graph.DIRECTED = Symbol("directed graph");

const test = new Graph(Graph.UNDIRECTED);
const [first] = test.addEdge(1, 2);
test.addEdge(1, 3);
test.addEdge(1, 4);
test.addEdge(5, 2);
test.addEdge(6, 3);
test.addEdge(7, 3);
test.addEdge(8, 4);
test.addEdge(9, 5);
test.addEdge(10, 6);
console.log(test);
// console.log("test[1]: ", test.getNodes(5));

/**
 * Data structure where add and remove elements in a first-in, first-out (FIFO)
 */
class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(item) {
    this.items.addLast(item);
    return this;
  }

  dequeue() {
    return this.items.removeFirst();
  }

  get size() {
    return this.items.size;
  }

  isEmpty() {
    return !this.items.size;
  }
}

// const queue = new Queue();

//queue.enqueue('a');
//queue.enqueue('b');
//queue.dequeue(); //↪️ a
//queue.enqueue('c');
//queue.dequeue(); //↪️ b
//queue.dequeue(); //↪️ c
// end::snippet[]
// */
