const app = require("express").Router();

const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview
} = require("../contollers/reviews");

const {verifyAdminToken} = require("../middleware/jwt");

app.get("/reviews",/*cache(3600),*/ getAllReviews);

app.get("/reviews/:id", getReview);

app.post("/reviews", verifyAdminToken, createReview);

app.patch("/reviews/:id", verifyAdminToken, updateReview);

app.delete("/reviews/:id", verifyAdminToken, deleteReview);

module.exports = app;
