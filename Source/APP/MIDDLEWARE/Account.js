const isLogin = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      if (req.user.name) {
      }
    }
    if (req.session.username) {
      req.user = {
        name: req.session.username,
        img: "",
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
