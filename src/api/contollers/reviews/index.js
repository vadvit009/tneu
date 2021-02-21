const {Reviews} = require("../../models");

const getReview = async (req, res) => {
  const {id} = req.params;
  return await Reviews.findById(id).exec((err, singleReview) => {
    if (err) res.send(err);
    res.send(singleReview);
  });
};

const createReview = (req, res, next) => {
  const {
    title,
    desc,
    gallery,
    type
  } = req.body;

  return Reviews.create({
    title,
    desc,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singleReview) => {
      console.log("CREATED NEWS === ", singleReview);
      res.send(singleReview)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const updateReview = (req, res, next) => {
  const {id} = req.params;
  const {
    title,
    desc,
  } = req.body;
  return Reviews.findByIdAndUpdate(id, {
    title,
    desc,
    updatedAt: Date.now(),
  })
    .then((singleReview) => {
      console.log("Update NEWS === ", singleReview);
      res.send(singleReview._id)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const deleteReview = async (req, res) => {
  const {id} = req.params;
  return await Reviews.findByIdAndRemove(id).exec((err, deletedReview) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

const getAllReviews = async (req, res) => {
  return await Reviews.find({}).exec((err, people) => {
    if (err) return res.send(err);
    res.send(people);
  });
};

module.exports = {getAllReviews, getReview, createReview, updateReview, deleteReview};
