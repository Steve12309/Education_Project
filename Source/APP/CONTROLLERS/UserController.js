const Account = require("../MODELS/Accountbs");
const Accountgg = require("../MODELS/Accountgg");
const Accountfb = require("../MODELS/Accountfb");
const University = require("../MODELS/University");
const { mutipleMongooseToObject } = require("../../UTIL/mongoose");
const Quote = require("../MODELS/Quote");

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
            res.json({ success: true });
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
            res.json({ success: true });
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
            res.json({ success: true });
          } else {
            await Accountfb.findOneAndUpdate(
              { name: req.user.name },
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
            res.json({ success: true });
          }
        }
        res.json({ success: true });
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
            res.json({ success: true });
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
            res.json({ success: true });
          }
        }
      }
      res.json({ success: false });
    } catch (err) {
      console.log(err.messsage);
    }
  }

  async saveUni(req, res, next) {
    var { university } = req.body;
    if (req.session.username) {
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
        res.json({ success: true });
      }
    } else if (req.user) {
      if (req.user.provider !== "facebook") {
        if (req.user.provider !== "google") {
        } else {
          const checkUser = await Accountgg.findOne({
            name: req.user.name,
          });
          if (checkUser) {
            const checkUni = await Accountgg.findOne({
              universities: {
                $elemMatch: { name: university },
              },
            });
            if (checkUni) {
            } else {
              const getCollegeData = await University.findOne({
                name: university,
              });
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
      } else {
        const checkUser = await Accountfb.findOne({ name: req.user.name });
        if (checkUser) {
          const checkUni = await Accountfb.findOne({
            universities: {
              $elemMatch: { name: university },
            },
          });
          if (checkUni) {
          } else {
            const getCollegeData = await University.findOne({
              name: university,
            });
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
      res.json({ success: true });
    }
  }

  async viewHistoryCollege(req, res, next) {
    var collegeData;
    if (req.session.username) {
      collegeData = await Account.find(
        { "universities.0": { $exists: true } },
        {
          "universities.name": 1,
          "universities.slug": 1,
          "universities.img": 1,
          _id: 0,
        }
      );
    } else if (req.user) {
      if (req.user.provider !== "facebook") {
        if (req.user.provider !== "google") {
        } else {
          collegeData = await Accountgg.find(
            { "universities.0": { $exists: true } },
            {
              "universities.name": 1,
              "universities.slug": 1,
              "universities.img": 1,
              _id: 0,
            }
          );
        }
      } else {
        collegeData = await Accountfb.find(
          { "universities.0": { $exists: true } },
          {
            "universities.name": 1,
            "universities.slug": 1,
            "universities.img": 1,
            _id: 0,
          }
        );
      }
    }
    res.send(JSON.stringify(mutipleMongooseToObject(collegeData)));
  }

  async viewHistoryTest(req, res, next) {
    var data;
    var testsData;

    if (req.session.username) {
      data = await Account.findOne();
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          data = await Accountgg.findOne();
          break;
        case "facebook":
          data = await Accountfb.findOne();
          break;
      }
    }

    if (data) {
      const { testType1, Holland, Mbti, testType2, Holland_Score, Mbti_Score } =
        data;

      testsData = [
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
    const dataQuote = await Quote.find({});
    res.render("history", {
      layout: "main",
      style: "history-light.css",
      function1: "history.js",
      navbar: "navbar.js",
      username: req.user.name,
      userimg: userimg,
      quotes: JSON.stringify(mutipleMongooseToObject(dataQuote)),
      tests: JSON.stringify(testsData),
    });
  }

  async deleteUni(req, res, next) {
    var checkUni;
    var updatedUniversities;

    if (req.session.username) {
      checkUni = await Account.findOne({}, { universities: 1 });
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUni = await Accountgg.findOne({}, { universities: 1 });
          break;
        case "facebook":
          checkUni = await Accountfb.findOne({}, { universities: 1 });
          break;
      }
    }

    if (checkUni) {
      updatedUniversities = checkUni.universities.filter(
        (university) => university.name !== req.body.university
      );
      checkUni.universities = updatedUniversities;
      await checkUni.save();
      res.json({ success: true });
    }
  }

  async savePomoBg(req, res, next) {
    if (req.session.username) {
      await Account.findOneAndUpdate(
        { name: req.session.username },
        {
          $set: {
            Pomoimg: req.body.fileUrl,
          },
        },
        { new: true }
      );
      res.json({ success: true });
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          await Accountgg.findOneAndUpdate(
            { name: req.user.name },
            {
              $set: {
                Pomoimg: req.body.fileUrl,
              },
            },
            { new: true }
          );
          res.json({ success: true });
          break;
        case "facebook":
          await Accountfb.findOneAndUpdate(
            { name: req.user.name },
            {
              $set: {
                Pomoimg: req.body.fileUrl,
              },
            },
            { new: true }
          );
          res.json({ success: true });
          break;
      }
    }
  }

  async getPomoBg(req, res, next) {
    var checkUser;

    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          break;
      }
    }

    if (checkUser) {
      var { Pomoimg } = checkUser;
      res.send(JSON.stringify(Pomoimg));
    }
  }

  async saveTodo(req, res, next) {
    var checkUser;
    var datas = req.body;
    var tasks = [];

    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
      if (checkUser) {
        datas.forEach((data) => {
          tasks.push(data);
        });
        await Account.findOneAndUpdate(
          { name: req.session.username },
          { $set: { Todolist: [] } }
        );
        await Account.findOneAndUpdate(
          { name: req.session.username },
          {
            $push: { Todolist: { $each: tasks } },
          }
        );
        res.json({ success: true });
      }
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          if (checkUser) {
            datas.forEach((data) => {
              tasks.push(data);
            });
            await Accountgg.findOneAndUpdate(
              { name: req.user.name },
              { $set: { Todolist: [] } }
            );
            await Accountgg.findOneAndUpdate(
              { name: req.user.name },
              {
                $push: { Todolist: { $each: tasks } },
              }
            );
            res.json({ success: true });
          }

          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          if (checkUser) {
            datas.forEach((data) => {
              tasks.push(data);
            });
            await Accountfb.findOneAndUpdate(
              { name: req.user.name },
              { $set: { Todolist: [] } }
            );
            await Accountfb.findOneAndUpdate(
              { name: req.user.name },
              {
                $push: { Todolist: { $each: tasks } },
              }
            );
            res.json({ success: true });
          }

          break;
      }
    }
  }

  async getTodo(req, res, next) {
    var checkUser;

    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          break;
      }
    }

    if (checkUser) {
      var { Todolist } = checkUser;
      res.send(JSON.stringify(Todolist));
    }
  }

  async saveEvent(req, res, next) {
    var checkUser;
    var datas = req.body;
    var events = [];

    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
      if (checkUser) {
        datas.forEach((data) => {
          events.push(data);
        });
        await Account.findOneAndUpdate(
          { name: req.session.username },
          { $set: { Eventlist: [] } }
        );
        await Account.findOneAndUpdate(
          { name: req.session.username },
          {
            $push: { Eventlist: { $each: events } },
          }
        );
        res.json({ success: true });
      }
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          if (checkUser) {
            datas.forEach((data) => {
              events.push(data);
            });
            await Accountgg.findOneAndUpdate(
              { name: req.user.name },
              { $set: { Eventlist: [] } }
            );
            await Accountgg.findOneAndUpdate(
              { name: req.user.name },
              {
                $push: { Eventlist: { $each: events } },
              }
            );
            res.json({ success: true });
          }

          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          if (checkUser) {
            datas.forEach((data) => {
              events.push(data);
            });
            await Accountfb.findOneAndUpdate(
              { name: req.user.name },
              { $set: { Eventlist: [] } }
            );
            await Accountfb.findOneAndUpdate(
              { name: req.user.name },
              {
                $push: { Eventlist: { $each: events } },
              }
            );
            res.json({ success: true });
          }

          break;
      }
    }
  }

  async getEvent(req, res, next) {
    var checkUser;

    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          break;
      }
    }

    if (checkUser) {
      var { Eventlist } = checkUser;
      res.send(JSON.stringify(Eventlist));
    }
  }

  async savePomoTime(req, res, next) {
    var checkUser;
    var datas = req.body;
    var timers = [];

    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
      if (checkUser) {
        datas.forEach((data) => {
          timers.push(data);
        });
        await Account.findOneAndUpdate(
          { name: req.session.username },
          { $set: { Pomotime: [] } }
        );
        await Account.findOneAndUpdate(
          { name: req.session.username },
          {
            $push: { Pomotime: { $each: timers } },
          }
        );
        res.json({ success: true });
      }
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          if (checkUser) {
            datas.forEach((data) => {
              timers.push(data);
            });
            await Accountgg.findOneAndUpdate(
              { name: req.user.name },
              { $set: { Pomotime: [] } }
            );
            await Accountgg.findOneAndUpdate(
              { name: req.user.name },
              {
                $push: { Pomotime: { $each: timers } },
              }
            );
            res.json({ success: true });
          }

          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          if (checkUser) {
            datas.forEach((data) => {
              timers.push(data);
            });
            await Accountfb.findOneAndUpdate(
              { name: req.user.name },
              { $set: { Pomotime: [] } }
            );
            await Accountfb.findOneAndUpdate(
              { name: req.user.name },
              {
                $push: { Pomotime: { $each: timers } },
              }
            );
            res.json({ success: true });
          }

          break;
      }
    }
  }

  async getPomoTime(req, res, next) {
    var checkUser;

    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          break;
      }
    }

    if (checkUser) {
      var { Pomotime } = checkUser;
      res.send(JSON.stringify(Pomotime));
    }
  }

  async saveTimetable(req, res, next) {
    var checkUser;
    var datas = req.body;
    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          break;
      }
    }
    if (checkUser) {
      checkUser.Timetable = [];
      await checkUser.save();
      datas.forEach((data) => {
        checkUser.Timetable.push(data);
      });
      await checkUser.save();
      res.json({ success: true });
    }
  }

  async getTimetable(req, res, next) {
    var checkUser;
    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          break;
      }
    }
    if (checkUser) {
      var { Timetable } = checkUser;
      res.send(JSON.stringify(Timetable));
    }
  }

  async saveNotesData(req, res, next) {
    var checkUser;
    var datas = req.body;
    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          break;
      }
    }
    if (checkUser) {
      checkUser.Notesdata = [];
      await checkUser.save();
      checkUser.Notesdata.push(datas);
      await checkUser.save();
      res.json({ success: true });
    }
  }

  async getNotesData(req, res, next) {
    var checkUser;
    if (req.session.username) {
      checkUser = await Account.findOne({ name: req.session.username });
    } else if (req.user) {
      switch (req.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({ name: req.user.name });
          break;
        case "facebook":
          checkUser = await Accountfb.findOne({ name: req.user.name });
          break;
      }
    }
    if (checkUser) {
      var { Notesdata } = checkUser;
      res.send(JSON.stringify(Notesdata));
    }
  }
}

module.exports = new UserController();
