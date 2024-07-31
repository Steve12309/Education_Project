const multer = require("multer");
const storage = multer.diskStorage({
  destination: `C:/Users/noname/Downloads/BeYourself-khumbtnua/img/useravatar_imgs`,
  filename: function (req, file, cb) {
    cb(null, file.fieldname + ".png");
  },
});
const upload = multer({ storage: storage });

const checkAvatar = async (req, res, next) => {
  try {
    upload.single("avatar")(req, res, function (err) {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      const fileUrl = `/img/useravatar_imgs/${req.file.filename}`;
      req.session.avatarUrl = fileUrl;
      next();
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { checkAvatar };
