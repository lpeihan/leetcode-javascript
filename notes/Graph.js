const graph = {
  A: ['B', 'C'],
  B: ['A', 'C', 'D'],
  C: ['A', 'B', 'D', 'E'],
  D: ['B', 'C', 'E', 'F'],
  E: ['C', 'D'],
  F: ['D']
};

function BFS(graph, s) {
  const queue = [];
  const seen = new Set();

  queue.push(s);
  seen.add(s);
  const parent = {};
  parent[s] = null;

  while (queue.length) {
    const vertex = queue.shift();
    const nodes = graph[vertex];

    for (const node of nodes) {
      if (seen.has(node) === false) {
        queue.push(node);
        seen.add(node);
        parent[node] = vertex;
      }
    }

    // console.log(vertex);
  }

  return parent;
}

const parent = BFS(graph, 'E');

let v = 'B';
while (v) {
  console.log(v);
  v = parent[v];
}

// BFS(graph, 'A'); // A B C D E F
// BFS(graph, 'E'); // E C D A B F

function DFS(graph, s) {
  const queue = [];
  const seen = new Set();

  queue.push(s);
  seen.add(s);

  while (queue.length) {
    const vertex = queue.pop();
    const nodes = graph[vertex];

    for (const node of nodes) {
      if (seen.has(node) === false) {
        queue.push(node);
        seen.add(node);
      }
    }

    console.log(vertex);
  }
}

DFS(graph, 'A'); // A C E D F B
