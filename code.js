const clientIcon = 'data:image/png;base64,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';

const serverIcon = 'data:image/png;base64,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';
const databaseIcon = 'data:image/png;base64,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';

const Diagram = function(id, elements) {
  let edges;
  let nodes;
  let groups;
  let positions;

  const addGroups = function(groupsIn) {
    groups = groupsIn.map(item => {
      return {data: item};
    })
  }

  const addPositions = function(positionsIn) {
    positions = positionsIn;
  }

  const findPositionForNodeById = function(id) {
    if (!positions) return;
    return positions.find(position=> position.id === id);
  }

  const appendPositionsToNodes = function() {
    if (!positions) return;
    return nodes.map(node => {
      const position = findPositionForNodeById(node.data.id);      
      if (position) {
        node.position = {row: position.row, col:position.col,};
      }
      return node;
    })
  }

  const addEdges = function(edgesIn) {
    edges = edgesIn.map(item => {
      return {data: item};
    })
  }

  const addNodes = function(nodesIn) {
    nodes = nodesIn.map(item=> {
      return {data: {
        id: item.id, 
        label: item.label,
        parent: item.group,
      }, classes: [item.type]};
    })
  }

  const addElements = function ({groups, edges, nodes, positions}) {
    addGroups(groups);
    addNodes(nodes);
    addEdges(edges);
    addPositions(positions);
  }

  const render = function(element) {

    const renderDiagram = function () {
      
      Array.prototype.push.apply(nodes, groups);
      nodes = appendPositionsToNodes();
      
      const elements = {
        nodes,
        edges,
      };
      console.log('elements', elements);
      var cy = cytoscape({
        container: document.getElementById(element),      
        boxSelectionEnabled: true,
        autounselectify: true,
        style: cytoscape.stylesheet()
          .selector('node')
            .css({
              'height': 30,
              'width': 30,
              'background-fit': 'cover',
              'border-color': '#000',
              'border-width': 0,
              'content': 'data(label)',
              'text-valign': 'top',
              'text-halign': 'center',
            })          
          .selector('edge')
            .css({
              'width': 2,
              'target-arrow-shape': 'triangle',
              'line-color': '#ffaaaa',
              'target-arrow-color': '#ffaaaa',
              'curve-style': 'bezier',
              'label': 'data(label)',
              'text-background': '#FFF',
            })
          .selector('.server')
            .css({
              'background-image': serverIcon,
              'background-opacity': 0, // do not show the bg colour
              'border-width': 0, // no border that would increase node size
              'background-clip': 'none' // 
            })
          .selector('.client')
            .css({
              'background-image': clientIcon,
              'background-opacity': 0, // do not show the bg colour
              'border-width': 0, // no border that would increase node size
              'background-clip': 'none' // 
            })
          .selector('.database')
            .css({
              'background-image': databaseIcon,
              'background-opacity': 0, // do not show the bg colour
              'border-width': 0, // no border that would increase node size
              'background-clip': 'none' // 
            }),        
        elements,
        layout: {
          name: 'grid',
          rows: 5,
          cols: 5,
          position: function(node) {
            return {
             row: node.position('row'),
             col: node.position('col'),
            };
          }
        },
      });

    };

    if (document.readyState == "complete") {
      renderDiagram();
    } else {
      document.addEventListener("DOMContentLoaded", function(event) {         
        renderDiagram();
      });
    }
  }

  if (id && elements) {
    addElements(elements);
    render(id);
    return;
  }

  return {
    render,
    edges: addEdges,
    nodes: addNodes,
    groups: addGroups,
    positions: addPositions,
    elements: addElements,
  };
};
