const homeRouter = require("./home");
const testRouter = require("./test");
const universityController = require("../APP/CONTROLLERS/UniversityController");
const loginController = require("../APP/CONTROLLERS/LoginController");
const userController = require("../APP/CONTROLLERS/UserController");
const registerController = require("../APP/CONTROLLERS/RegisterController");
const account = require("../APP/MIDDLEWARE/Account");
const avatar = require("../APP/MIDDLEWARE/Avatar");
const passport = require("passport");
function route(app) {
  app.post("/uploadavatar", avatar.checkAvatar, userController.avatar);
  app.post("/feedback", loginController.postfeedback);
  app.get("/login/forgetpassword", loginController.forgotpassword);
  app.post("/login/forgetpassword", loginController.resetpassword);
  // app.get("/user/account", account.isLogin, userController.user);
  app.post("/login", loginController.login);
  app.get("/logout", account.isLogOut, loginController.logout);
  app.get("/createaccount", account.isLogOut, registerController.registerForm);
  app.post("/register", registerController.register);
  app.get("/university", account.isLogin, universityController.university);
  app.get("/university/:slug", universityController.show);
  app.get("/test", account.isLogin, testRouter);
  app.get("/story", account.isLogin, homeRouter);
  app.post("/changepass", loginController.changepassword);
  app.get("/", account.isLogin, homeRouter);
  app.post("/", account.isLogin, homeRouter);
  app.get(
    "/login/fb",
    passport.authenticate("facebook", { scope: ["email", "user_photos"] })
  );
  app.get(
    "/login/fb/cb",
    passport.authenticate("facebook", {
      failureRedirect: "/login",
      successRedirect: "/",
    })
  );
  app.get(
    "/login/gg",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  app.get(
    "/login/gg/cb",
    passport.authenticate("google", {
      failureRedirect: "/login",
      successRedirect: "/",
    })
  );
}

module.exports = route;
