const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const generatePassword = require("../utils/passwordUtils").generatePassword;
const validatePassword = require("../utils/passwordUtils").validatePassword;
const issueJWT = require("../utils/jwtUtils").issueJWT;
const passport = require("passport");

module.exports.login = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.formData.username,
      },
    });
    if (!user) {
      return res.json({
        success: false,
        msg: "could not find user",
        status: 401,
      });
    }

    const isValid = validatePassword(
      req.body.formData.password,
      user.salt,
      user.hash
    );
    if (isValid) {
      const tokenObject = issueJWT(user);
      res.json({
        success: true,
        token: tokenObject.token,
        expiresIn: tokenObject.expires,
        status: 200,
      });
    } else {
      console.log("wrong password");
      res.json({
        success: false,
        msg: "you entered the wrong password",
        status: 401,
      });
    }
  } catch (err) {
    console.log("errorrrr");
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

module.exports.auth = (req, res, next) => {
  let responseObj = {
    statusCode: 0,
    errorMsg: "",
    data: {},
  };
  passport.authenticate("jwt", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      responseObj.data = info.message;
      responseObj.statusCode = 401;
      responseObj.errorMsg = "user is not authenticated!!!!";
      return res.status(responseObj.statusCode).json(responseObj);
    }
    req.user = user;
    next();
  })(req, res, next);
};
