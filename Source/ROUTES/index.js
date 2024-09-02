const homeRouter = require("./home");
const testRouter = require("./test");
const universityController = require("../APP/CONTROLLERS/UniversityController");
const loginController = require("../APP/CONTROLLERS/LoginController");
const userController = require("../APP/CONTROLLERS/UserController");
const registerController = require("../APP/CONTROLLERS/RegisterController");
const account = require("../APP/MIDDLEWARE/Account");
const avatar = require("../APP/MIDDLEWARE/Avatar");
const checkRoute = require("../APP/MIDDLEWARE/Route");
const validation = require("../APP/MIDDLEWARE/Validation");
const passport = require("passport");
function route(app) {
  app.get("/save/notesdata", account.isLogin, userController.getNotesData);
  app.post("/save/notesdata", account.isLogin, userController.saveNotesData);
  app.get("/save/timetable", account.isLogin, userController.getTimetable);
  app.post("/save/timetable", account.isLogin, userController.saveTimetable);
  app.get("/save/pomotime", account.isLogin, userController.getPomoTime);
  app.post("/save/pomotime", account.isLogin, userController.savePomoTime);
  app.get("/save/eventlist", account.isLogin, userController.getEvent);
  app.post("/save/eventlist", account.isLogin, userController.saveEvent);
  app.get("/save/todolist", account.isLogin, userController.getTodo);
  app.post("/save/todolist", account.isLogin, userController.saveTodo);
  app.post("/delete", account.isLogin, userController.deleteUni);
  app.get("/history/:slug", account.isLogin, checkRoute.getCollege);
  app.post("/save", account.isLogin, userController.saveUni);
  app.post(
    "/save/pomodoroBackground",
    account.isLogin,
    userController.savePomoBg
  );
  app.get(
    "/save/pomodoroBackground",
    account.isLogin,
    userController.getPomoBg
  );
  app.post("/result/holland", account.isLogin, userController.testResult);
  app.post("/result/mbti", account.isLogin, userController.testResult);
  app.get(
    "/createnewpass/:slug",
    checkRoute.checkRoute,
    loginController.createnewpassword
  );
  app.post(
    "/createnewpass/:slug",
    validation.validateForgotpass,
    validation.handleValidationErrorsForgotPass,
    loginController.savenewpassword
  );
  app.post("/uploadavatar", avatar.checkAvatar, userController.avatar);
  app.post("/feedback", loginController.postfeedback);
  app.get("/login/forgetpassword", loginController.forgotpassword);
  app.post("/login/forgetpassword", loginController.resetpassword);
  app.post("/login", loginController.login);
  app.get("/logout", account.isLogOut, loginController.logout);
  app.get("/createaccount", account.isLogOut, registerController.registerForm);
  app.post(
    "/register",
    validation.validateRegistration,
    validation.handleValidationErrors,
    registerController.register
  );
  app.get("/university", account.isLogin, universityController.university);
  app.get("/university/:slug", account.isLogin, universityController.show);
  app.get("/test", account.isLogin, testRouter);
  app.get("/story", account.isLogin, homeRouter);
  app.post(
    "/changepass",
    validation.validateChangepass,
    validation.handleValidationErrorsChangePass,
    loginController.changepassword
  );
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
