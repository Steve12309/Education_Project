const Account = require("../MODELS/Accountbs");

class UserController {
  async avatar(req, res) {
    try {
      const avatarUrl = req.session.avatarUrl;
      const username = req.session.username;
      var filter = { name: username };
      var updateDoc = {
        $set: {
          img: avatarUrl,
        },
      };
      await Account.updateOne(filter, updateDoc);
      try {
        req.flash("successschangeavatar", "Successfully changed avatar");
      } catch (err) {
        console.log(err.message);
      }
      res.redirect("/");
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Failed to update avatar" });
    }
  }
}

module.exports = new UserController();
