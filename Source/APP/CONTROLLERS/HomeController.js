const Quote = require("../MODELS/Quote");
const { mongooseToObject } = require("../../UTIL/mongoose");
const { mutipleMongooseToObject } = require("../../UTIL/mongoose");

class HomeController {
  async home(req, res) {
    try {
      const data = await Quote.find({});
      const errorChangePassmsg = req.flash("errorChangePassMessages");
      const successLogin = req.flash("successlogin");
      const errorChangePass = req.flash("errorchangepass");
      const successFeedback = req.flash("successsendfeed");
      const successAvatar = req.flash("successschangeavatar");
      const successPassword = req.flash("successchangepass");
      if (Object.keys(errorChangePass).length === 0) {
      } else {
        req.toastr.error(
          "Hãy xem kỹ lại nhé!",
          Object.values(errorChangePass)[0],
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
      if (Object.keys(successLogin).length === 0) {
      } else {
        req.toastr.success(
          "Chúc một ngày tốt lành!",
          Object.values(successLogin)[0],
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
      if (Object.keys(successAvatar).length === 0) {
      } else {
        req.toastr.success(
          "Chúc một ngày tốt lành!",
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
          "Chúc một ngày tốt lành!",
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
          "Chúc một ngày tốt lành!",
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
      let userimg;
      if (req.user.provider === "facebook") {
        // Nếu provider là Facebook, ưu tiên dùng avatarUrl từ req.session, nếu không có thì dùng req.user.img
        if (req.session && req.session.avatarUrl) {
          userimg = req.session.avatarUrl;
        } else {
          userimg = req.user.img;
        }
      } else {
        // Nếu provider không phải là Facebook, ưu tiên dùng avatarUrl từ req.session, nếu không có thì dùng req.user.img
        if (req.session && req.session.avatarUrl) {
          userimg = req.session.avatarUrl;
        } else {
          userimg = req.user.img;
        }
      }
      res.render("home", {
        style: "home-light.css",
        function1: "home.js",
        navbar: "navbar.js",
        username: req.user.name,
        userimg: userimg,
        quotes: JSON.stringify(mutipleMongooseToObject(data)),
        toastr_render: req.toastr.render(),
        errorMsgChangePass: errorChangePassmsg,
      });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ error: "FAILED!!!" });
    }
  }
}

module.exports = new HomeController();
