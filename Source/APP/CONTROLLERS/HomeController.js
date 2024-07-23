const Quote = require("../MODELS/Quote");
const { mongooseToObject } = require("../../UTIL/mongoose");
const { mutipleMongooseToObject } = require("../../UTIL/mongoose");

class HomeController {
  async home(req, res) {
    try {
      const data = await Quote.find({});
      const successFeedback = req.flash("successsendfeed");
      const successAvatar = req.flash("successschangeavatar");
      const successPassword = req.flash("successchangepass");
      if (Object.keys(successAvatar).length === 0) {
      } else {
        req.toastr.success(
          "Have a good day!",
          Object.values(successAvatar)[0],
          {
            closeButton: true,
            debug: true,
            newestOnTop: false,
            progressBar: true,
            positionClass: "toast-top-right",
            preventDuplicates: true,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
          }
        );
      }
      if (Object.keys(successFeedback).length === 0) {
      } else {
        req.toastr.success(
          "Have a good day!",
          Object.values(successFeedback)[0],
          {
            closeButton: true,
            debug: true,
            newestOnTop: false,
            progressBar: true,
            positionClass: "toast-top-right",
            preventDuplicates: true,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
          }
        );
      }
      if (Object.keys(successPassword).length === 0) {
      } else {
        req.toastr.success(
          "Have a good day!",
          Object.values(successPassword)[0],
          {
            closeButton: true,
            debug: true,
            newestOnTop: false,
            progressBar: true,
            positionClass: "toast-top-right",
            preventDuplicates: true,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
          }
        );
      }
      res.render("home", {
        style: "home-light.css",
        function1: "home.js",
        navbar: "navbar.js",
        username: req.user.name,
        userimg: req.user.img || req.session.avatarUrl,
        quotes: JSON.stringify(mutipleMongooseToObject(data)),
        toastr_render: req.toastr.render(),
      });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ error: "FAILED!!!" });
    }
  }
}

module.exports = new HomeController();
