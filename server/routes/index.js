const express = require("express");
const router = express.Router();
const controller = require("../controllers/author");

//blogposts
router.get("/blogposts", controller.get_all_blogposts);
router.post("/blogposts", controller.create_blogpost);
router.get("/blogposts/:postId", controller.get_blogpost);
router.put("/blogposts/:postId", controller.edit_blogpost);
router.delete("/blogposts/:postId", controller.delete_blogpost);
//comments
router.post("/blogposts/:postId/comments", controller.create_comment);
router.put("/blogposts/:postId/comments/:commentId", controller.edit_comment);
router.delete(
  "/blogposts/:postId/comments/:commentId",
  controller.delete_comment
);

module.exports = router;
