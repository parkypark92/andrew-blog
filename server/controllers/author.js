module.exports.get_all_blogposts = (req, res, next) => {
  res.send("Implement: Retrieve all posts and comments");
};

module.exports.get_blogpost = (req, res, next) => {
  res.send("Implement: Retrieve specified blogpost data");
};

module.exports.create_blogpost = (req, res, next) => {
  res.send("Implement: Retrieve new blogpost form data and add to database");
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
