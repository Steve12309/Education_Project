const Account = require("../MODELS/Accountbs");
const Accountgg = require("../MODELS/Accountgg");
const Accountfb = require("../MODELS/Accountfb");

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
        const message = req.flash(
          "successschangeavatar",
          "Successfully changed avatar"
        );
        if (message) {
          req.flash("successschangeavatar", "Successfully changed avatar");
          res.redirect("/");
          req.flash("successschangeavatar", "Successfully changed avatar");
        }
      } catch (err) {
        console.log(err.message);
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Failed to update avatar" });
    }
  }

  async testResult(req, res, next) {
    try {
      if (req.session.type === "vip") {
        if (req.body.type === "Holland") {
          const { note, type, A, B, C, D, E, F } = req.body;
          var checkUser = await Accountgg.findOne({
            name: req.user.name,
          });
          if (checkUser) {
            await Accountgg.findOneAndUpdate(
              { name: req.user.name },
              {
                $set: {
                  testType1: type,
                  Holland: note,
                  Holland_Score: { A, B, C, D, E, F },
                },
              },
              { new: true }
            );
          } else {
            const { note, type, A, B, C, D, E, F } = req.body;
            await Accountfb.findOneAndUpdate(
              { name: req.user.name },
              {
                $set: {
                  testType1: type,
                  Holland: note,
                  Holland_Score: { A, B, C, D, E, F },
                },
              },
              { new: true }
            );
          }
        } else if (req.body.type === "Mbti") {
          const { note, type, Anote, Bnote, Cnote, Dnote } = req.body;
          var checkUser = await Accountgg.findOne({
            name: req.user.name,
          });
          if (checkUser) {
            await Accountgg.findOneAndUpdate(
              { name: req.user.name },
              {
                $set: {
                  testType2: type,
                  Mbti: note,
                  Mbti_Score: { A: Anote, B: Bnote, C: Cnote, D: Dnote },
                },
              },
              { new: true }
            );
          } else {
            await Accountfb.findOneAndUpdate(
              { name: req.user.name },
              {
                $set: {
                  testType2: type,
                  Mbti: note,
                  Mbti_Score: { A: Anote, B: Bnote, C: Cnote, D: Dnote },
                },
              },
              { new: true }
            );
          }
        }
      } else {
        if (req.body.type === "Holland") {
          const { note, type, A, B, C, D, E, F } = req.body;
          var checkUser = await Account.findOne({ name: req.session.username });
          if (checkUser) {
            await Account.findOneAndUpdate(
              { name: req.session.username },
              {
                $set: {
                  testType1: type,
                  Holland: note,
                  Holland_Score: { A, B, C, D, E, F },
                },
              },
              { new: true }
            );
          }
        } else if (req.body.type === "Mbti") {
          const { note, type, Anote, Bnote, Cnote, Dnote } = req.body;
          var checkUser = await Account.findOne({
            name: req.session.username,
          });
          if (checkUser) {
            await Account.findOneAndUpdate(
              { name: req.session.username },
              {
                $set: {
                  testType2: type,
                  Mbti: note,
                  Mbti_Score: { A: Anote, B: Bnote, C: Cnote, D: Dnote },
                },
              },
              { new: true }
            );
          }
        }
      }
    } catch (err) {
      console.log(err.messsage);
    }
  }
}

module.exports = new UserController();
