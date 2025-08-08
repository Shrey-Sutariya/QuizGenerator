const jwt = require("jsonwebtoken");
const {JWT_password} =require('../config')

function verifyToken(req, res, next) {
  const token = req.headers.authorization;
    console.log(token);
    
  if (!token) {
    console.log(token);
    
    return res.status(401).json({ msg: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_password);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
}

module.exports = verifyToken;
