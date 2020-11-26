const {ScienceActivity} = require("../../models");

const getAllScienceActivity = async (req, res) => {
  return await ScienceActivity.find()
    .sort({createdAt: -1})
    .exec((err, news) => {
      if (err) return res.send(err);
      res.send(news);
    });
};

const getScienceActivity = async (req, res) => {
  const {id} = req.params;
  return await ScienceActivity.findById(id).exec((err, singleScienceActivity) => {
    if (err) return res.send(err);
    res.send(singleScienceActivity);
  });
};

const createScienceActivity = (req, res) => {
  const {
    title,
    desc,
    gallery,
    short_desc,
    type
  } = req.body;
  const splitBase64 = gallery && gallery.split(',')[1];
  const buffer = Buffer.from(splitBase64, 'base64');
  return ScienceActivity.create({
    title,
    desc,
    gallery: {data: buffer, contentType: type},
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singleScienceActivity) => {
      console.log("CREATED NEWS === ", singleScienceActivity);
      res.send(singleScienceActivity)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const updateScienceActivity = (req, res, next) => {
  const {id} = req.params;
  const {
    title,
    desc,
    short_desc,
  } = req.body;
  return ScienceActivity.findByIdAndUpdate(id, {
    title,
    desc,
    updatedAt: Date.now(),
  })
    .then((singleScienceActivity) => {
      console.log("Update NEWS === ", singleScienceActivity);
      res.send(singleScienceActivity._id)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const deleteScienceActivity = async (req, res) => {
  const {id} = req.params;
  return await ScienceActivity.findByIdAndRemove(id).exec((err, deletedScienceActivity) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

module.exports = {
  getAllScienceActivity,
  getScienceActivity,
  createScienceActivity,
  updateScienceActivity,
  deleteScienceActivity
};
