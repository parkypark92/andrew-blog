const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/signup", controller.signup_user);

module.exports = router;
