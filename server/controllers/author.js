const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports.get_all_blogposts = async (req, res, next) => {
  const posts = await prisma.post.findMany();
  return res.json({ posts });
};

module.exports.get_blogpost = async (req, res, next) => {
  const post = await prisma.post.findUnique({
    where: {
      id: req.params.postId,
    },
  });
  return res.json({ post });
};

module.exports.create_blogpost = async (req, res, next) => {
  await prisma.post.create({
    data: {
      title: req.body.title,
      content: req.body.text,
      authorId: req.body.userId,
    },
  });
};

module.exports.edit_blogpost = (req, res, next) => {
  res.send("Implement: Update a specified blogpost in database");
};

module.exports.delete_blogpost = (req, res, next) => {
  res.send("Implement: Delete a specified blogpost from database");
};

module.exports.create_comment = (req, res, next) => {
  res.send("Implement: Retrieve new comment form data and add to database");
};

module.exports.edit_comment = (req, res, next) => {
  res.send("Implement: Update a specific comment in database");
};

module.exports.delete_comment = (req, res, next) => {
  res.send("Implement: Delete specific comment from database");
};
