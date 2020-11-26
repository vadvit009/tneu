const {User} = require("../../models");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const {email, pass} = req.body;
  const user = await User.findOne({email: email, pass: pass})
  const token = jwt.sign({user: user}, 'tneu2020')
  res.json({token})
}
module.exports = {login};
