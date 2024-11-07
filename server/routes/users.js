const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

/* GET users listing. */
router.get("/protected", controller.auth, function (req, res, next) {
  res.json(req.user);
});
router.post("/login", controller.login);
router.post("/signup", controller.signup);

module.exports = router;
