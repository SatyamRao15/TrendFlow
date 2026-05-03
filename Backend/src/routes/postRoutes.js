const router = require("express").Router();
const { createPost, likePost, getAllPosts } = require("../controllers/postController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createPost);
router.post("/:id/like", protect, likePost);
router.get("/", protect, getAllPosts);

module.exports = router;
