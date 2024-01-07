const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey);
  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { generateToken, verifyToken };
