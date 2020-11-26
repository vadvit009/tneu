const {Peoples} = require("../../models");

const getPeople = async (req, res) => {
  const {id} = req.params;
  return await Peoples.findById(id).exec((err, singlePeople) => {
    if (err) return res.send(err);
    res.send(singlePeople);
  });
};

const createPeople = (req, res, next) => {
  const {
    title,
    desc,
    gallery,
    short_desc,
    type
  } = req.body;
  const splitBase64 = gallery&&gallery.split(',')[1];
  const buffer = Buffer.from(splitBase64, 'base64');
  return Peoples.create({
    title,
    desc,
    gallery: {data: buffer, contentType: type},
    createdAt: Date.now(),
    updatedAt: Date.now(),
    deletedAt: null
  })
    .then((singlePeople) => {
      console.log("CREATED NEWS === ", singlePeople);
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

module.exports = {getAllPeoples, getPeople, createPeople, updatePeople, deletePeople};
