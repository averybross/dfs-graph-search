class Node { // 🔩
    id = Math.round(Math.random() * 1234567890);
    adjacent = [];
}

class Graph { // 📈
    hashSet = {}
    visited = []
    nodes = []

    Node = Node;

    getNode = (id) => this.hashSet[id]

    addEdge = ([sourceId, destinationId]) => {
        const source = this.getNode(sourceId)
        const destination = this.getNode(destinationId)

        source.adjacent.push(destination)
    }

    createNode = () => {
        const { Node } = this;
        const newNode = new Node();

        this.hashSet[newNode.id] = newNode;
        this.nodes.push(newNode);

        return newNode;
    }
    hasPathDFSStart = ([sourceId, destinationId]) => {
        const pair = [
            this.getNode(sourceId),
            this.getNode(destinationId)
        ];

        this.visited = [];

        return this.hasPathDFSRecurse(pair);
    }

    hasPathDFSRecurse = ([source, destination]) => {

        if(this.visited.includes(source.id)) {
            return false;
        }
        
        this.visited.push(source.id);
        
        if(source == destination) {
            return true;
        }
        

        for(var i = 0; i < source.adjacent.length; i++) {
            if (this.hasPathDFSRecurse([this.getNode(source.adjacent[i]), destination])) {
                return true
            }
        }

        return false
    }

    generateLayers = (layers) => {
        const { createNode } = this;
    
        const firstNode = createNode();
        // const secondNode = createNode();
    
        const generateAdjacents = (source, layers) => {
            const adjacents = [...Array(Math.round(Math.random() * 5))].map(() => {
                const newAdjacent = createNode();
                source.adjacent.push(newAdjacent.id);
    
                if(layers !== 0 && this.nodes.length < 40) {
                    generateAdjacents(newAdjacent, layers-1)
                }
                
            });
    
            return adjacents;
        }
    
        generateAdjacents(firstNode, layers);
        // generateAdjacents(secondNode, 50);
    }
}

module.exports = {
    Graph,
    Node
}