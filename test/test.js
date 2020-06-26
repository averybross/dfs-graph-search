var assert = require('assert');
var sinon = require('sinon');
var {Graph} = require('../index');

describe('Graph', function () {
    let graph;

    beforeEach(() => {
        graph = new Graph();
    })
    
    describe('hashSet', function () {
        it('sync it\'s length with Graph.nodes', function () {
            graph.generateLayers(5)
            assert.equal(graph.nodes.length, Object.keys(graph.hashSet).length)
        });
    });

    describe('getNode', () => {
        it('return a Node from the hashSet by Node.id', () => {
            graph.createNode();
            const foundNode = graph.getNode(graph.nodes[0].id);
            assert.equal(foundNode.id, graph.nodes[0].id)
        })
    });

    describe('createNode', () => {
        it('increment Graph.nodes.length by 1', () => {
            assert.equal(graph.nodes.length, 0)
            graph.createNode();
            assert.equal(graph.nodes.length, 1)

        })
    })

    describe('hasPathDFSStart', () => {
        it('fetch source and destination nodes by Node.id tuple', () => {
            graph.createNode();
            graph.createNode();
            
            var getNode = sinon.spy(graph, 'getNode');
            graph.hasPathDFSStart([graph.nodes[0].id, graph.nodes[1].id]);

            sinon.assert.calledTwice(getNode);

        })
    })
});