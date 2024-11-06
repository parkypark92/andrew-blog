const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

/* GET users listing. */
router.get("/protected", controller.auth, function (req, res, next) {
  console.log(req.user);
  res.send("authenticated!");
});
router.post("/login", controller.login);
router.post("/signup", controller.signup);

module.exports = router;
