const Account = require("../MODELS/Accountbs");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const exphbs = require("express-handlebars");
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
    viewPath: "F:/Web Course/Secret_Project/Source/Resource/VIEWS",
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
        res.send("User cannot found!");
      } else {
        const isPasswordMatch = await bcrypt.compare(password, check.password);
        if (isPasswordMatch) {
          req.session.username = check.name;
          res.locals.username = req.session.username;
          const redirectUrl = req.session.currentPath || "/";
          res.redirect(redirectUrl);
        } else {
          res.send("Wrong password");
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
      res.render("forgetpassword", {
        layout: "extend",
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  async resetpassword(req, res, next) {
    try {
      const email = req.body.email;
      const checkemail = await Account.findOne({ email });
      if (checkemail) {
        async function main() {
          const info = await transporter.sendMail({
            from: '"BeYourself Education Platform"',
            to: email,
            subject: "Reset Password",
            template: "sendmail",
          });
          console.log("Message sent: %s", info.messageId);
        }
        main().catch(console.error);
        res.send("Email has been sent. Please check your email!");
      } else {
        res.send("Email doesn't exist");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new LoginController();
