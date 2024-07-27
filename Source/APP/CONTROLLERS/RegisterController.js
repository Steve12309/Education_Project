const Account = require("../MODELS/Accountbs");
const bcrypt = require("bcrypt");

class RegisterController {
  async register(req, res) {
    const data = {
      name: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };

    const existingUser = await Account.findOne({ name: data.name });
    if (existingUser) {
      req.flash(
        "errorusername",
        "Tên tài khoản đã được sử dụng. Vui lòng chọn tên khác"
      );
    } else {
      const existingPass = await Account.findOne({ password: data.password });
      if (existingPass) {
        req.flash(
          "errorpassword",
          "Mật khẩu đã được sử dụng. Vui lòng chọn mật khẩu khác"
        );
      } else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;
        const userdata = await Account.insertMany(data);
      }
    }

    res.redirect("/createaccount");
  }

  async registerForm(req, res) {
    try {
      const errorPassword = req.flash("wrongpass");
      const errorUsername = req.flash("wrongname");
      const errorCreatename = req.flash("errorusername");
      const errorEmail = req.flash("wrongmail");
      const successSendemail = req.flash("sendmail");
      const errorCreatepass = req.flash("errorpassword");
      if (Object.keys(errorCreatepass).length === 0) {
      } else {
        req.toastr.error(
          "Chúc một ngày tốt lành!",
          Object.values(errorCreatepass)[0],
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
      if (Object.keys(errorCreatename).length === 0) {
      } else {
        req.toastr.error(
          "Chúc một ngày tốt lành!",
          Object.values(errorCreatename)[0],
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
      if (Object.keys(successSendemail).length === 0) {
      } else {
        req.toastr.success(
          "Hãy kiểm tra lại email của bạn!",
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
        req.toastr.error("Thử lại!", Object.values(errorEmail)[0], {
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
        req.toastr.error("Thử lại!", Object.values(errorUsername)[0], {
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
        req.toastr.error("Thử lại!", Object.values(errorPassword)[0], {
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
