const University = require("../MODELS/University");
const { mongooseToObject } = require("../../UTIL/mongoose");
const { mutipleMongooseToObject } = require("../../UTIL/mongoose");

class UniversityController {
  async university(req, res) {
    try {
      const data = await University.find({});
      res.render("university", {
        style: "university-light.css",
        function1: "university.js",
        username: req.user.name,
        userimg: req.user.img,
        navbar: "navbar.js",
        universities: JSON.stringify(mutipleMongooseToObject(data)),
      });
    } catch (err) {
      res.status(400).json({ error: "FAILED!!!" });
    }
  }

  show(req, res, next) {
    University.findOne({ slug: req.params.slug })
      .then(function (college) {
        res.render("college", {
          layout: "extend",
          style: "universitydetail-light.css",
          college: mongooseToObject(college),
        });
      })
      .catch(next);
  }
}

module.exports = new UniversityController();
