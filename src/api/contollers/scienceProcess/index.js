const {ScienceProcess} = require("../../models");

const getAllScienceProcess = async (req, res) => {
  return await ScienceProcess.find()
    .sort({createdAt: -1})
    .exec((err, news) => {
      if (err) return res.send(err);
      res.send(news);
    });
};

const getScienceProcess = async (req, res) => {
  const {id} = req.params;
  return await ScienceProcess
    .findById(id)
    .exec((err, singleScienceProcess) => {
      if (err) return res.send(err);
      res.send(singleScienceProcess);
    });
};

const createScienceProcess = (req, res) => {
  const {
    title,
    desc,
    gallery,
    short_desc,
    type
  } = req.body;

  return ScienceProcess.create({
    title,
    desc,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singleScienceProcess) => {
      console.log("CREATED NEWS === ", singleScienceProcess);
      res.send(singleScienceProcess)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const updateScienceProcess = (req, res, next) => {
  const {id} = req.params;
  const {
    title,
    desc,
    short_desc,
  } = req.body;
  return ScienceProcess.findByIdAndUpdate(id, {
    title,
    desc,
    updatedAt: Date.now(),
  })
    .then((singleScienceProcess) => {
      console.log("Update NEWS === ", singleScienceProcess);
      res.send(singleScienceProcess._id)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const deleteScienceProcess = async (req, res) => {
  const {id} = req.params;
  return await ScienceProcess.findByIdAndRemove(id).exec((err, deletedScienceProcess) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

module.exports = {
  getAllScienceProcess,
  getScienceProcess,
  createScienceProcess,
  updateScienceProcess,
  deleteScienceProcess
};
