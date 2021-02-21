const {Pages} = require("../../models");

const getAllPages = async (req, res) => {
  return await Pages.find()
    .sort({createdAt: -1})
    .exec((err, news) => {
      if (err) return res.send(err);
      res.send(news[0]);
    });
};

const getPage = async (req, res) => {
  const {id} = req.params;
  return await Pages.findById(id).exec((err, singlePage) => {
    if (err) return res.send(err);
    res.send(singlePage);
  });
};

const createPage = (req, res, next) => {
  const {
    title,
    desc,
    gallery,
    short_desc,
    type
  } = req.body;

  return Pages.create({
    title,
    desc,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singlePage) => {
      console.log("CREATED NEWS === ", singlePage);
      res.send(singlePage)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const updatePage = (req, res, next) => {
  const {id} = req.params;
  const {
    title,
    desc,
    short_desc,
  } = req.body;
  return Pages.findByIdAndUpdate(id, {
    title,
    desc,
    updatedAt: Date.now(),
  })
    .then((singlePage) => {
      console.log("Update NEWS === ", singlePage);
      res.send(singlePage._id)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const deletePage = async (req, res) => {
  const {id} = req.params;
  return await Pages.findByIdAndRemove(id).exec((err, deletedPage) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

module.exports = {getAllPages, getPage, createPage, updatePage, deletePage};
