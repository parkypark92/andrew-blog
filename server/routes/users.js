const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

/* GET users listing. */
router.get("/protected", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/login", controller.login);
router.post("/signup", controller.signup);

module.exports = router;
