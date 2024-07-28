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
const app = express();
require("dotenv").config();

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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "accountsessionsecret",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(flash());
app.use(toastr());
app.use(function (req, res, next) {
  req.toastr.render();
  next();
});

app.use(passport.initialize());
app.use(passport.session());

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
        let pictureUrl = profile.picture;

        const newUser = new accountggdb({
          id: profile._json.sub,
          name: profile._json.name,
          email: profile._json.email,
          img: pictureUrl,
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
          img: profile.photos[0].value,
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
    req.path !== "/login/forgetpassword"
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

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
