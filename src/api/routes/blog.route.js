const app = require("express").Router();

const {
  getAllBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog
} = require("../contollers/blog");

const {verifyAdminToken} = require("../middleware/jwt");

app.get("/blog",/*cache(3600),*/ getAllBlogs);

app.get("/blog/:id", getBlog);

app.post("/blog", verifyAdminToken, createBlog);

app.patch("/blog/:id", verifyAdminToken, updateBlog);

app.delete("/blog/:id", verifyAdminToken, deleteBlog);

module.exports = app;
