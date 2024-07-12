const Account = require("../MODELS/Accountbs");
const bcrypt = require("bcrypt");

class RegisterController {
  async register(req, res) {
    const data = {
      name: req.body.username,
      password: req.body.password,
    };

    const existingUser = await Account.findOne({ name: data.name });
    if (existingUser) {
      res.send("User already exists. Please choose a different username");
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(data.password, saltRounds);
      data.password = hashedPassword;
      const userdata = await Account.insertMany(data);
    }

    res.redirect("/createaccount");
  }

  async registerForm(req, res) {
    try {
      const errorPassword = req.flash("wrongpass");
      const errorUsername = req.flash("wrongname");
      const errorEmail = req.flash("wrongmail");
      const successSendemail = req.flash("sendmail");
      if (Object.keys(successSendemail).length === 0) {
      } else {
        req.toastr.success(
          "Please check your mail!",
          Object.values(successSendemail)[0],
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
      if (Object.keys(errorEmail).length === 0) {
      } else {
        req.toastr.error("Try again!", Object.values(errorEmail)[0], {
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
        });
      }
      if (Object.keys(errorUsername).length === 0) {
      } else {
        req.toastr.error("Try again!", Object.values(errorUsername)[0], {
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
        });
      }
      if (Object.keys(errorPassword).length === 0) {
      } else {
        req.toastr.error("Try again!", Object.values(errorPassword)[0], {
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
        });
      }
      res.render("createaccount", {
        style: "login-register.css",
        function1: "login-register.js",
        layout: "extend",
        toastr_render: req.toastr.render(),
      });
    } catch (err) {
      console.log(err.message);
    }
  }
}

module.exports = new RegisterController();
