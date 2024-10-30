const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const generatePassword = require("../utils/passwordUtils").generatePassword;

module.exports.login = async (req, res, next) => {
  res.send("implement login form");
};

module.exports.signup = async (req, res, next) => {
  const hashAndSalt = generatePassword(req.body.formData.password);
  const salt = hashAndSalt.salt;
  const hash = hashAndSalt.hash;
  await prisma.user.create({
    data: {
      username: req.body.formData.username,
      salt: salt,
      hash: hash,
    },
  });
  res.send("user created");
};
