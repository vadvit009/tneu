const jwt = require("jsonwebtoken");

const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  //  ============================= REQ.HEADER TOKEN ===========================================
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, 'tneu2020', (err, decoded) => {
    console.error("DECODED === ", decoded);
    if (err) {
      console.error("ERROR WITH TOKEN === ", err);
      return res.sendStatus(403)
    };
    req.body.id = decoded.user._id;
    next();
  });
};

module.exports = {
  verifyAdminToken,
};
