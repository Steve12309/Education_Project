const Account = require("../MODELS/Accountbs");
const isLogin = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      if (req.user.name) {
        req.session.type = "vip";
      }
    }
    if (req.session.username) {
      var checkUser = await Account.findOne({ name: req.session.username });
      req.user = {
        name: req.session.username,
        img: checkUser.img,
      };
    }
    if (req.user === undefined) {
      req.user = {
        name: "",
        img: "",
      };
    }
  } catch (error) {
    console.log(error.message);
  }
  next();
};

const isLogOut = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      if (req.user.name) {
      } else {
      }
    }
    if (req.session.username) {
    } else {
    }
  } catch (error) {
    console.log(error.message);
  }
  next();
};

module.exports = { isLogin, isLogOut };
