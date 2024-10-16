const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.signup_user = async (req, res, next) => {
  await prisma.user.create({
    data: {
      username: req.body.username,
      isAuthor: req.body.isAuthor,
    },
  });
};
