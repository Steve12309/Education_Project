const userController = require("../CONTROLLERS/UserController");

const checkRoute = async (req, res, next) => {
  try {
    var path = req.path;
    if (path === "/createnewpass/:slug") {
      res.redirect("/createaccount");
    } else {
      next();
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const getCollege = async (req, res, next) => {
  try {
    var path = req.path;
    if (path === "/history/university") {
      await userController.viewHistoryCollege(req, res, next);
    } else {
      await userController.viewHistoryTest(req, res, next);
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { checkRoute, getCollege };
