const checkRoute = async (req, res, next) => {
  try {
    var path = req.path;
    if (path === "/createnewpass/:slug") {
      res.redirect("/createaccount");
    } else {
      next();
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { checkRoute };
