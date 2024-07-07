const Quote = require("../MODELS/Quote");
const { mongooseToObject } = require("../../UTIL/mongoose");
const { mutipleMongooseToObject } = require("../../UTIL/mongoose");

class HomeController {
  async home(req, res) {
    try {
      const data = await Quote.find({});
      res.render("home", {
        style: "home-light.css",
        function1: "home.js",
        navbar: "navbar.js",
        username: req.user.name,
        userimg: req.user.img,
        quotes: JSON.stringify(mutipleMongooseToObject(data)),
      });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ error: "FAILED!!!" });
    }
  }
}

module.exports = new HomeController();
