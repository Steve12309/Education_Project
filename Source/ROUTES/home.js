const express = require("express");
const router = express.Router();
const homeController = require("../APP/CONTROLLERS/HomeController");

router.use("/", homeController.home);

module.exports = router;
