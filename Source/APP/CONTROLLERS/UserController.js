const Account = require("../MODELS/Accountbs");

class UserController {
  async avatar(req, res) {
    const avatarUrl = req.session.avatarUrl;
    const username = req.session.username;
    await Account.findByIdAndUpdate(username, { img: avatarUrl });
    res.redirect("/");
  }
}

module.exports = new UserController();
