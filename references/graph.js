// Adjacency List as a Hashmap
const graph = {
  a: ["a", "b"],
  b: ["c"],
  c: ["d"],
  d: ["b", "c"],
};

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
}

Graph.UNDIRECTED = Symbol("undirected graph");
Graph.DIRECTED = Symbol("directed graph");

const test = new Graph(Graph.UNDIRECTED);
const [first] = test.addEdge(1, 2);
test.addEdge(1, 3);
console.log(test);
