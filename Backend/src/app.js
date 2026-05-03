const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { errorHandler } = require("./middleware/errorMiddleware");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const feedRoutes = require("./routes/feedRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/feed", feedRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "🚀 Social Media Feed Analyzer API is running" });
});

// Global Error Handler (should be last)
app.use(errorHandler);

module.exports = app;
