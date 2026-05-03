const Post = require("../models/Post");
const generateFeed = require("../services/feedRanking");

exports.getFeed = async (req, res, next) => {
  try {
    const posts = await Post.find();
    const feed = generateFeed(posts);
    res.json(feed);
  } catch (err) {
    next(err);
  }
};
