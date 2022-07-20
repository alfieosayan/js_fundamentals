const express = require("express");
const router = express.Router();
const StudenController = require("./controllers/students");

router.get("/", StudenController.index);
router.post("/register", StudenController.register);
router.post("/login", StudenController.login);
router.get("/student/profile", StudenController.profile);
router.get("/logoff", StudenController.logoff);

module.exports = router;
