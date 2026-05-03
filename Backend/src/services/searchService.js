function searchPosts(posts, keyword) {
  const key = keyword.toLowerCase();
  return posts.filter((p) =>
    p.content.toLowerCase().includes(key)
  );
}

module.exports = { searchPosts };
