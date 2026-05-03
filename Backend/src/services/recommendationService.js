const Follow = require("../models/Follow");

// Build adjacency list from DB
async function buildGraph() {
  const edges = await Follow.find();
  const graph = {};

  edges.forEach(({ follower, following }) => {
    if (!graph[follower]) graph[follower] = [];
    graph[follower].push(following.toString());
  });

  return graph;
}

// BFS to recommend new users
async function recommendUsers(userId) {
  const graph = await buildGraph();

  const visited = new Set([userId]);
  const queue = [userId];
  const recommendations = [];

  while (queue.length) {
    const u = queue.shift();
    const neighbors = graph[u] || [];

    for (const v of neighbors) {
      if (!visited.has(v)) {
        visited.add(v);
        recommendations.push(v);
        queue.push(v);
      }
    }
  }

  return recommendations.filter((id) => id !== userId);
}

module.exports = { recommendUsers };
