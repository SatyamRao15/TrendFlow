const Post = require("../models/Post");

// Create Post
exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      userId: req.user.id,
      content: req.body.content,
      likes: 0,
      comments: 0,
    });

    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// Like Post
exports.likePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();

    res.json(post);
  } catch (err) {
    next(err);
  }
};

// Get All Posts
exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    next(err);
  }
};
