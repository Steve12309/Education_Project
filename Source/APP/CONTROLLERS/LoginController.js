const Account = require("../MODELS/Accountbs");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const exphbs = require("express-handlebars");
const crypto = require("crypto");

// Admin to User
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "BeYourselfEducationPlatform@gmail.com",
    pass: "qvne jevn nzme zcqu",
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: exphbs.create({
      extName: ".hbs",
      defaultLayout: false,
    }),
    viewPath: "Source/Resource/VIEWS",
    extName: ".hbs",
  })
);

class LoginController {
  async login(req, res) {
    try {
      const username = req.body.username;
      const password = req.body.password;

      const check = await Account.findOne({ name: username });
      if (!check) {
        req.flash("wrongname", "Hãy kiểm tra lại tên đăng nhập của bạn");
        res.redirect("/createaccount");
      } else {
        const isPasswordMatch = await bcrypt.compare(password, check.password);
        if (isPasswordMatch) {
          req.session.username = check.name;
          res.locals.username = req.session.username;
          const redirectUrl = req.session.currentPath || "/";
          req.flash("successlogin", "Đã đăng nhập thành công!");
          res.redirect(redirectUrl);
        } else {
          req.flash("wrongpass", "Hãy kiểm tra lại mật khẩu của bạn");
          res.redirect("/createaccount");
        }
      }
    } catch (error) {
      console.log(error.message);
      res.send("Wrong Details!");
    }
  }

  async logout(req, res, next) {
    try {
      const redirectUrl = req.session.currentPath || "/";
      req.session.destroy();
      res.redirect(redirectUrl);
    } catch (error) {
      console.log(error.message);
    }
  }

  async forgotpassword(req, res, next) {
    try {
      const wrongEmailForgotPass = req.flash("wrongmail");
      if (Object.keys(wrongEmailForgotPass).length === 0) {
      } else {
        req.toastr.error(
          "Hãy xem kỹ lại nhé!",
          Object.values(wrongEmailForgotPass)[0],
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
      res.render("forgetpassword", {
        style: "forgotpass.css",
        layout: "extend",
        toastr_render: req.toastr.render(),
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async resetpassword(req, res, next) {
    try {
      const email = req.body.email;
      req.session.email = email;
      const checkemail = await Account.findOne({ email });
      if (checkemail) {
        const resetToken = crypto.randomBytes(32).toString("hex");
        req.session.token = resetToken;
        console.log(req.session.token);
        const resetLink = `http://localhost:5500/createnewpass/${resetToken}`;
        const resetpassTemplate = `
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Reset Password</title>
        </head>
        <body>
          <p>Please click
            <a href="${resetLink}">here</a>
            to reset your password</p>
        </body>
      </html>
    `;
        async function main() {
          const info = await transporter.sendMail({
            from: '"BeYourself Education Platform"',
            to: email,
            subject: "Reset Password",
            html: resetpassTemplate,
          });
          console.log("Message sent: %s", info.messageId);
        }
        main().catch(console.error);
        req.flash("sendmail", "Email đã được gửi thành công");
        res.redirect("/createaccount");
      } else {
        req.flash("wrongmail", "Hãy xem lại tài khoản email của bạn");
        res.redirect("/login/forgetpassword");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async changepassword(req, res) {
    try {
      if (req.session.validation === "true") {
        var newpass = req.body.newpassword;
        var username = req.session.username;
        var saltRounds = 10;
        var hashedPassword = await bcrypt.hash(newpass, saltRounds);
        newpass = hashedPassword;
        var filter = { name: username };
        var updateDoc = {
          $set: {
            password: newpass,
          },
        };
        await Account.updateOne(filter, updateDoc);
        req.flash("successchangepass", "Đã đổi mật khẩu thành công!");
        res.redirect("/");
      } else {
        req.flash(
          "errorchangepass",
          "Đổi mật khẩu thất bại. Vui lòng xem lại các trường đã nhập"
        );
        res.redirect("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async postfeedback(req, res, next) {
    try {
      const emailUser = req.body.email;
      const checkemail = await Account.findOne({ email: emailUser });
      if (checkemail) {
        async function main() {
          const info = await transporter.sendMail({
            from: '"BeYourself Education Platform"',
            to: emailUser,
            subject: "Send Feedback",
            template: "sendfeedback",
          });
          console.log("Message sent: %s", info.messageId);
        }
        main().catch(console.error);
      }
      req.flash("successsendfeed", "Successfully sent feedback");
      res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  async createnewpassword(req, res, next) {
    try {
      const errorForgotPass = req.flash("errorforgotpass");
      const successnewpass = req.flash("successnewpass");
      const errorForgotPassMsg = req.flash("errorForgotPassMessages");
      if (Object.keys(successnewpass).length === 0) {
      } else {
        req.toastr.success(
          "Chúc một ngày tốt lành!",
          Object.values(successnewpass)[0],
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
      if (Object.keys(errorForgotPass).length === 0) {
      } else {
        req.toastr.error(
          "Hãy thử lại nhé!",
          Object.values(errorForgotPass)[0],
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
      res.render("createnewpassword", {
        style: "createnewpass.css",
        function1: "createnewpass.js",
        layout: "extend",
        path: req.path,
        toastr_render: req.toastr.render(),
        errorForgotPassMsg: errorForgotPassMsg,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async savenewpassword(req, res, next) {
    try {
      if (req.session.forgotpass === "true") {
        var newpass = req.body.newpass;
        var filter = { email: req.session.email };
        var saltRounds = 10;
        var hashedPassword = await bcrypt.hash(newpass, saltRounds);
        newpass = hashedPassword;
        var updateDoc = {
          $set: {
            password: newpass,
          },
        };
        await Account.updateOne(filter, updateDoc);
        req.flash("successnewpass", "Đổi mật khẩu thành công");
        res.redirect("/createaccount");
      } else {
        req.flash(
          "errorforgotpass",
          "Đổi mật khẩu thất bại. Vui lòng xem lại các trường đã nhập"
        );
        res.redirect(`/createnewpass/${req.session.token}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new LoginController();
