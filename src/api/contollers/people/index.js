const {Peoples} = require("../../models");
const path = require('path');
const fs = require('fs');

const multer = require('multer');
const folderPath = path.resolve(__dirname, "../../../../build/assets/people/");

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
const getPeople = (req, res) => {
  const {id} = req.params;
  return Peoples.findById(id)
    .exec((err, singlePeople) => {
      if (err) return res.send(err);
      res.send(singlePeople);
    });
};

const createPeople = (req, res, next) => {
  const {
    fName,
    sName,
    scienceLevel,
    scienceTitle,
    desc,
  } = req.body;
  return Peoples.create({
    fName,
    sName,
    desc,
    scienceLevel,
    scienceTitle,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singlePeople) => {
      console.log("CREATED singlePeople === ", singlePeople);
      res.send(singlePeople)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const updatePeople = (req, res, next) => {
  const {id} = req.params;
  const {
    title,
    desc,
    short_desc,
  } = req.body;
  return Peoples.findByIdAndUpdate(id, {
    title,
    desc,
    updatedAt: Date.now(),
  })
    .then((singlePeople) => {
      console.log("Update NEWS === ", singlePeople);
      res.send(singlePeople._id)
    })
    .catch(err => console.log("ERROR WHEN CREATE NEWS === ", err))
};

const deletePeople = async (req, res) => {
  const {id} = req.params;
  return await Peoples.findByIdAndRemove(id).exec((err, deletedPeople) => {
    if (err) return res.send(err);
    res.send("Deleted");
  });
};

const getAllPeoples = async (req, res) => {
  return await Peoples.find({}).exec((err, people) => {
    if (err) return res.send(err);
    res.send(people);
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
    const defaultUrl = "https://zunu.herokuapp.com/assets/people/";
    console.log(req.file)
    Peoples.findByIdAndUpdate(id, {gallery: defaultUrl + id + '/' + req.file.originalname})
      .then(() => console.log("Updated successfully"))
      .catch(err => {
        console.log("ERROR WHEN UPLOAD NEWS === ", err);
        res.sendStatus(400)
      })
    return res.status(200).send(req.file);
  });
}

module.exports = {getAllPeoples, getPeople, createPeople, updatePeople, deletePeople, uploadPhoto};
