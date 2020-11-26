const {Science} = require("../../models");

const getAllScience = async (req, res) => {
  return await Science.find()
    .sort({createdAt: -1})
    .exec((err, news) => {
      if (err) return res.send(err);
      res.send(news);
    });
};

const getScience = async (req, res) => {
  const {id} = req.params;
  return await Science.findById(id).exec((err, singleScience) => {
    if (err) return res.send(err);
    res.send(singleScience);
  });
};

const createScience = (req, res, next) => {
  const {
    title,
    desc,
    gallery,
    short_desc,
    type
  } = req.body;
  const splitBase64 = gallery&&gallery.split(',')[1];
  const buffer = Buffer.from(splitBase64, 'base64');
  return Science.create({
    title,
    desc,
    gallery: {data: buffer, contentType: type},
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singleScience) => {
      console.log("CREATED NEWS === ", singleScience);
      res.send(singleScience)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const updateScience = (req, res, next) => {
  const {id} = req.params;
  const {
    title,
    desc,
    short_desc,
  } = req.body;
  return Science.findByIdAndUpdate(id, {
    title,
    desc,
    updatedAt: Date.now(),
  })
    .then((singleScience) => {
      console.log("Update NEWS === ", singleScience);
      res.send(singleScience._id)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const deleteScience = async (req, res) => {
  const {id} = req.params;
  return await Science.findByIdAndRemove(id).exec((err, deletedScience) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

module.exports = {getAllScience, getScience, createScience, updateScience, deleteScience};
