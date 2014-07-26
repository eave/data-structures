// a graph is a representation of a set of objects where some pairs of
// objects are connected by links. The interconnected objects are represented
// by mathematical abstractions called vertices, and the links that
// connect some pairs of vertices are called edges.

// The graph itself in array
// The nodes have a "value" key
// a node = {}

var Graph = function(){
	this.arr = [];
};

var Node = function(value, edge) {
	this.value = value;
	this.edges = {};
	if (edge) {
		this.edges[edge] = edge;
	}
}

Graph.prototype.addNode = function(newNode, toNode){  // also called a vertice
	if (this.arr.length === 1) { // if there's only one node,
		this.arr[0].edges[newNode] = newNode; // add an edge connecting it to the new node
		toNode = this.arr[0].value; // add reciprocating edge to the new node by setting toNode to the value of the first node
	}

	this.arr.push(new Node(newNode, toNode));
};

Graph.prototype.contains = function(node){
	for (var i = 0; i < this.arr.length; i++) {
		if (this.arr[i].value === node) {
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	for (var i = 0; i < this.arr.length; i++) { // iterate through graph array
		if (this.arr[i].edges[node]) { // remove connected edges
			delete this.arr[i].edges[node];
		} else if (this.arr[i].value === node) { // remove node itself
			this.arr.splice(i, 1);
		}
	}
};

Graph.prototype.getEdge = function(fromNode, toNode){
	for (var i = 0; i < this.arr.length; i++) {
		if (this.arr[i].value === fromNode) {
			return (Boolean(this.arr[i].edges[toNode]));
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){ // an edge is a link between two nodes
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
