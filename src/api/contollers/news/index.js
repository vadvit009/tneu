const {News} = require("../../models");

const path = require('path');
const fs = require('fs');

const multer = require('multer');
const folderPath = path.resolve(__dirname, "../../build/assets/news/");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const {id} = req.params;
    if (!fs.existsSync(folderPath + "/" + id)) {
      fs.mkdirSync(folderPath + "/" + id);
    } else {
      fs.rmdirSync(folderPath + "/" + id, {recursive: true});
      fs.mkdirSync(folderPath + "/" + id);
    }
    cb(null, folderPath + "/" + id);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({storage: storage});

const getAllNews = async (req, res) => {
  const {skip} = req.query;
  return await News.find()
    .skip(skip ? (skip - 1) * 24 : 0)
    .limit(24)
    .sort({createdAt: -1})
    .exec((err, news) => {
      if (err) return res.send(err);
      res.send(news);
    });
};

const getNew = async (req, res) => {
  const {id} = req.params;
  return await News.findById(id).exec((err, singleNew) => {
    if (err) return res.send(err);
    res.send(singleNew);
  });
};

const createNew = (req, res, next) => {
  const {
    title,
    desc,
    gallery,
    short_desc,
    type
  } = req.body;
  console.log(gallery)
  // const splitBase64 = gallery && gallery.split(',')[1];
  // const buffer = Buffer.from(splitBase64, 'base64');
  return News.create({
    title,
    desc,
    short_desc,
    gallery: [{data: gallery.data}],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singleNew) => {
      console.log("CREATED NEWS === ", singleNew);
      res.send(singleNew)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const updateNew = (req, res, next) => {
  const {id} = req.params;
  const {
    title,
    desc,
    gallery,
    short_desc,
  } = req.body;
  return News.findByIdAndUpdate(id, {
    title,
    desc,
    gallery: [{data: gallery.data}],
    short_desc,
    updatedAt: Date.now(),
  },{new:true})
    .then((singleNew) => {
      console.log("Update NEWS === ", singleNew);
      res.send(singleNew)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const deleteNew = async (req, res) => {
  const {id} = req.params;
  return await News.findByIdAndRemove(id).exec((err, deletedNew) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

const uploadPhoto = (req, res) => {
  const {id} = req.params;

  upload.single('gallery')(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log('ERR WHEN UPLOAD', err);
      return res.sendStatus(500);
    } else if (err) {
      console.log('ERR WHEN UPLOAD', err);
      return res.sendStatus(500);
    }
    const defaultUrl = "https://medtechnika.te.ua/assets/news/";

    News.findByIdAndUpdate(id, {gallery: defaultUrl + id + '/' + req.file.originalname})
      .then(() => console.log("Updated successfully"))
      .catch(err => {
        console.log("ERROR WHEN UPLOAD NEWS === ", err);
        res.sendStatus(400)
      })
    return res.status(200).send(req.file);
  });
}

module.exports = {getAllNews, getNew, createNew, updateNew, deleteNew, uploadPhoto};
