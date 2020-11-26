const {Vstup} = require("../../models");

const getAllVstup = async (req, res) => {
  return await Vstup.find()
    .sort({createdAt: -1})
    .exec((err, news) => {
      if (err) return res.send(err);
      res.send(news);
    });
};

const getVstup = async (req, res) => {
  const {id} = req.params;
  return await Vstup.findById(id).exec((err, singleVstup) => {
    if (err) return res.send(err);
    res.send(singleVstup);
  });
};

const createVstup = (req, res) => {
  const {
    title,
    desc,
    gallery,
    short_desc,
    type
  } = req.body;
  const splitBase64 = gallery && gallery.split(',')[1];
  const buffer = Buffer.from(splitBase64, 'base64');
  return Vstup.create({
    title,
    desc,
    gallery: {data: buffer, contentType: type},
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singleVstup) => {
      console.log("CREATED NEWS === ", singleVstup);
      res.send(singleVstup)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const updateVstup = (req, res, next) => {
  const {id} = req.params;
  const {
    title,
    desc,
    short_desc,
  } = req.body;
  return Vstup.findByIdAndUpdate(id, {
    title,
    desc,
    updatedAt: Date.now(),
  })
    .then((singleVstup) => {
      console.log("Update NEWS === ", singleVstup);
      res.send(singleVstup._id)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const deleteVstup = async (req, res) => {
  const {id} = req.params;
  return await Vstup.findByIdAndRemove(id).exec((err, deletedVstup) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

module.exports = {
  getAllVstup,
  getVstup,
  createVstup,
  updateVstup,
  deleteVstup
};
