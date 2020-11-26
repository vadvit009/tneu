const {Blog} = require("../../models");

const getBlog = async (req, res) => {
  const {id} = req.params;
  return await Blog.findById(id).exec((err, singleBlog) => {
    if (err) res.send(err);
    res.send(singleBlog);
  });
};

const createBlog = (req, res, next) => {
  const {
    title,
    desc,
    gallery,
    type
  } = req.body;
  const splitBase64 = gallery&&gallery.split(',')[1];
  const buffer = Buffer.from(splitBase64, 'base64');
  return Blog.create({
    title,
    desc,
    gallery: {data: buffer, contentType: type},
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singleBlog) => {
      console.log("CREATED NEWS === ", singleBlog);
      res.send(singleBlog)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const updateBlog = (req, res, next) => {
  const {id} = req.params;
  const {
    title,
    desc,
  } = req.body;
  return Blog.findByIdAndUpdate(id, {
    title,
    desc,
    updatedAt: Date.now(),
  })
    .then((singleBlog) => {
      console.log("Update NEWS === ", singleBlog);
      res.send(singleBlog._id)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const deleteBlog = async (req, res) => {
  const {id} = req.params;
  return await Blog.findByIdAndRemove(id).exec((err, deletedBlog) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

const getAllBlogs = async (req, res) => {
  return await Blog.find({}).exec((err, people) => {
    if (err) return res.send(err);
    res.send(people);
  });
};

module.exports = {getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog};
