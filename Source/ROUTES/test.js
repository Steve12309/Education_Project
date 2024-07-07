const express = require("express");
const router = express.Router();
const testController = require("../APP/CONTROLLERS/TestController");

router.use("/", testController.test);

module.exports = router;
