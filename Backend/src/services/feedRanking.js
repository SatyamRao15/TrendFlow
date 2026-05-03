const PriorityQueue = require("../utils/priorityQueue");

function calculateScore(post) {
  const hours =
    (Date.now() - new Date(post.createdAt).getTime()) / (1000 * 60 * 60);

  const recencyScore = Math.max(0, 50 - hours); // time decay
  return post.likes * 2 + post.comments * 3 + recencyScore;
}

function generateFeed(posts, limit = 20) {
  const pq = new PriorityQueue();

  posts.forEach((post) => {
    pq.push({
      ...post.toObject(),
      score: calculateScore(post),
    });
  });

  const feed = [];
  while (pq.size() > 0 && feed.length < limit) {
    feed.push(pq.pop());
  }

  return feed;
}

module.exports = generateFeed;
