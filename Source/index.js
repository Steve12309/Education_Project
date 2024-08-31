const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const port = 5500;
const session = require("express-session");
const accountfbdb = require("./APP/MODELS/Accountfb");
const accountggdb = require("./APP/MODELS/Accountgg");
const passport = require("passport");
const passportgg = require("passport-google-oauth2").Strategy;
const passportfb = require("passport-facebook").Strategy;
const route = require("./ROUTES");
const db = require("./CONFIG/DB");
const flash = require("connect-flash");
const toastr = require("express-toastr");
require("dotenv").config();
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  path: "/socket.io",
});
const Account = require("../Source/APP/MODELS/Accountbs");
const Accountgg = require("../Source/APP/MODELS/Accountgg");
const Accountfb = require("../Source/APP/MODELS/Accountfb");
const Comment = require("../Source/APP/MODELS/Comment");

io.on("connection", async (socket) => {
  socket.on("editComment", async (data) => {
    const { editvalue, currentvalue, universitySlug } = data;
    let checkUser;
    if (socket.request.session.username) {
      checkUser = await Account.findOne({
        name: socket.request.session.username,
      });
    } else if (socket.request.user.name) {
      switch (socket.request.user.provider) {
        case "google":
          checkUser = await Accountgg.findOne({
            name: socket.request.user.name,
          });
          break;
        case "facebook":
          checkUser = await Accountfb.findOne({
            name: socket.request.user.name,
          });
          break;
      }
    }

    if (checkUser) {
      const checkComment = await Comment.findOne({
        universityId: universitySlug,
      });

      if (checkComment) {
        for (let comment of checkComment.comment) {
          if (
            comment.user === checkUser.name &&
            currentvalue === comment.message
          ) {
            comment.message = editvalue;
            comment.state = "Đã chỉnh sửa";
            await checkComment.save();
            io.to(universitySlug).emit("edittedcomment", {
              editvalue,
              Status: comment.state,
            });
            break;
          }
        }
      }
    }
  });

  socket.on("joinUniversity", (universityId) => {
    socket.join(universityId);
    Comment.find({ universityId }).then((comments) => {
      if (comments.length !== 0) {
        var commentsUser = comments[0].comment;
        commentsUser.sort(
          (firstComment, secondComment) =>
            new Date(secondComment.timestamp) - new Date(firstComment.timestamp)
        );

        Promise.all(
          commentsUser.map((comment) => {
            return Promise.any([
              Account.findOne({ name: comment.user }),
              Accountgg.findOne({ name: comment.user }),
              Accountfb.findOne({ name: comment.user }),
            ]).then((user) => {
              if (user && user.img !== comment.img) {
                comment.img = user.img;
              }
              return comment;
            });
          })
        )
          .then((updatedComments) => {
            comments[0].comment = updatedComments;
            return comments[0].save();
          })
          .then(() => {
            io.emit("loadComments", comments[0].comment);
          })
          .catch((error) => {
            console.log("Error updating comments:", error);
          });
      } else {
        io.emit("loadComments", []);
        console.log("No comments found");
      }
    });
  });

  socket.on("newComment", async (data) => {
    const { comment, universitySlug } = data;

    try {
      let checkUser;

      if (socket.request.session.username) {
        checkUser = await Account.findOne({
          name: socket.request.session.username,
        });
      } else if (socket.request.user && socket.request.user.name) {
        switch (socket.request.user.provider) {
          case "google":
            checkUser = await Accountgg.findOne({
              name: socket.request.user.name,
            });
            break;
          case "facebook":
            checkUser = await Accountfb.findOne({
              name: socket.request.user.name,
            });
            break;
        }
      }

      if (checkUser) {
        const user = checkUser.name;
        const userImg = checkUser.img;

        const room = await Comment.findOne({ universityId: universitySlug });

        if (room) {
          room.comment.push({
            user: user,
            img: userImg,
            message: comment,
            timestamp: new Date(),
            userId: checkUser._id,
          });
          await room.save();
        } else {
          const newRoom = new Comment({
            universityId: universitySlug,
            comment: [
              {
                user: user,
                message: comment,
                timestamp: new Date(),
                img: userImg,
                userId: checkUser._id,
              },
            ],
          });
          await newRoom.save();
        }

        io.to(universitySlug).emit("comment", {
          comment,
          user,
          timestamp: new Date(),
          img: userImg,
          userId: checkUser._id,
        });
      }
    } catch (error) {
      console.error("Error handling new comment:", error);
    }
  });
});

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "Resource/VIEWS"));
app.use("/img", express.static("img"));
app.use(express.static(path.join(__dirname, "PUBLIC/CSS/")));
app.use(express.static(path.join(__dirname, "PUBLIC/JS/")));
app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ limit: "1000mb", extended: true }));
const sessionMiddleware = session({
  secret: "accountsessionsecret",
  resave: false,
  saveUninitialized: true,
});
app.use(sessionMiddleware);
io.engine.use(sessionMiddleware);
app.use(flash());
app.use(toastr());
app.use(function (req, res, next) {
  req.toastr.render();
  next();
});

app.use(passport.initialize());
app.use(passport.session());
io.use((socket, next) => {
  passport.authenticate("session", { session: false })(
    socket.request,
    {},
    next
  );
});

passport.use(
  new passportgg(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5500/login/gg/cb",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await accountggdb.findOne({ name: profile._json.name });
        if (user) {
          return done(null, user);
        }
        console.log(profile.picture);
        const newUser = new accountggdb({
          id: profile._json.sub,
          name: profile._json.name,
          email: profile._json.email,
          img: profile.picture,
          provider: profile.provider,
        });
        await newUser.save();
        return done(null, newUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  new passportfb(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:5500/login/fb/cb",
      profileFields: ["email", "gender", "locale", "displayName", "photos"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await accountfbdb.findOne({ name: profile._json.name });
        if (user) {
          return done(null, user);
        }
        const newUser = new accountfbdb({
          id: profile._json.id,
          name: profile._json.name,
          email: profile._json.email,
          img:
            "https://graph.facebook.com/" +
            profile.id +
            "/picture" +
            "?width=200&height=200" +
            "&access_token=" +
            accessToken,
          provider: profile.provider,
        });
        await newUser.save();
        return done(null, newUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);

app.use((req, res, next) => {
  const acceptHeader = req.headers.accept || "";
  if (
    acceptHeader.includes("text/html") &&
    req.path !== "/login" &&
    req.path !== "/logout" &&
    req.path !== "/register" &&
    req.path !== "/createaccount" &&
    req.path !== "/createnewpass" &&
    req.path !== "/login/forgetpassword" &&
    req.path !== `/createnewpass/${req.session.token}`
  ) {
    req.session.currentPath = req.path;
  }
  next();
});

passport.serializeUser((user, done) => {
  done(null, { name: user.name, provider: user.provider });
});

passport.deserializeUser(async ({ name, provider }, done) => {
  try {
    let user;
    if (provider === "google") {
      user = await accountggdb.findOne({ name });
    } else if (provider === "facebook") {
      user = await accountfbdb.findOne({ name });
    }
    done(null, user);
  } catch (err) {
    done(err);
  }
});

db.connect();

route(app);
httpServer.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
