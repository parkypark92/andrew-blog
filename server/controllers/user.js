const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const generatePassword = require("../utils/passwordUtils").generatePassword;
const validatePassword = require("../utils/passwordUtils").validatePassword;
const issueJWT = require("../utils/jwtUtils").issueJWT;

module.exports.login = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.formData.username,
      },
    });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "could not find user" });
    }

    const isValid = validatePassword(
      req.body.formData.password,
      user.salt,
      user.hash
    );
    if (isValid) {
      const tokenObject = issueJWT(user);
      res.send({
        success: true,
        token: tokenObject.token,
        expiresIn: tokenObject.expires,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, msg: "you entered the wrong password" });
    }
  } catch (err) {
    next(err);
  }
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
