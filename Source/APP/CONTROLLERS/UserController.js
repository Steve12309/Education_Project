const Account = require("../MODELS/Accountbs");
const bcrypt = require("bcrypt");
const { mutipleMongooseToObject } = require("../../UTIL/mongoose");
const Quote = require("../MODELS/Quote");

class LoginController {
  user(req, res) {
    res.render("useraccount", {
      layout: "main",
    });
  }
}

module.exports = new LoginController();
