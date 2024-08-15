const Account = require("../MODELS/Accountbs");
const Accountgg = require("../MODELS/Accountgg");
const Accountfb = require("../MODELS/Accountfb");
const University = require("../MODELS/University");
const { mutipleMongooseToObject } = require("../../UTIL/mongoose");

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
      if (req.session.type === "vip") {
        if (req.user.provider === "facebook") {
          await Accountfb.updateOne({ name: req.user.name }, updateDoc);
        } else {
          await Accountgg.updateOne({ name: req.user.name }, updateDoc);
        }
      } else {
        await Account.updateOne(filter, updateDoc);
      }
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
          const {
            note,
            type,
            Anote,
            Bnote,
            Cnote,
            Dnote,
            noteA,
            noteB,
            noteC,
            noteD,
          } = req.body;
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
                  Mbti_Score: {
                    A: Anote,
                    B: Bnote,
                    C: Cnote,
                    D: Dnote,
                    a: noteA,
                    b: noteB,
                    c: noteC,
                    d: noteD,
                  },
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

  async saveUni(req, res, next) {
    var { university } = req.body;
    if (req.session) {
      const checkUser = await Account.findOne({ name: req.session.username });
      if (checkUser) {
        const checkUni = await Account.findOne({
          universities: {
            $elemMatch: { name: university },
          },
        });
        if (checkUni) {
        } else {
          const getCollegeData = await University.findOne({ name: university });
          var name = getCollegeData.name;
          var address = getCollegeData.address;
          var img = getCollegeData.img;
          var slug = getCollegeData.slug;
          var facility = getCollegeData.facility;
          var history = getCollegeData.history;
          if (getCollegeData) {
            const newUniversity = {
              name: name,
              address: address,
              img: img,
              slug: slug,
              history: history,
              facility: facility,
            };
            checkUser.universities.push(newUniversity);
            await checkUser.save();
          }
        }
      }
    }
  }

  async viewHistoryCollege(req, res, next) {
    var collegeData = await Account.find(
      { "universities.0": { $exists: true } },
      { "universities.name": 1, "universities.slug": 1, _id: 0 }
    );
    res.send(JSON.stringify(mutipleMongooseToObject(collegeData)));
  }

  async viewHistoryTest(req, res, next) {
    const data = await Account.findOne();
    if (data) {
      const { testType1, Holland, Mbti, testType2, Holland_Score, Mbti_Score } =
        data;
      var testsData = [
        {
          testType1,
          Holland,
          Holland_Score,
        },
        {
          testType2,
          Mbti,
          Mbti_Score,
        },
      ];
    }
    let userimg;
    if (req.user.provider === "facebook") {
      // Nếu provider là Facebook, ưu tiên dùng avatarUrl từ req.session, nếu không có thì dùng req.user.img
      if (req.session && req.session.avatarUrl) {
        userimg = req.session.avatarUrl;
      } else {
        userimg = req.user.img;
      }
    } else {
      // Nếu provider không phải là Facebook, ưu tiên dùng avatarUrl từ req.session, nếu không có thì dùng req.user.img
      if (req.session && req.session.avatarUrl) {
        userimg = req.session.avatarUrl;
      } else {
        userimg = req.user.img;
      }
    }
    res.render("history", {
      layout: "main",
      style: "history-light.css",
      function1: "history.js",
      navbar: "navbar.js",
      username: req.user.name,
      userimg: userimg,
      tests: JSON.stringify(testsData),
    });
  }
}

module.exports = new UserController();
