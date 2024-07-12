class TestController {
  test(req, res) {
    res.render("test", {
      style: "test-light.css",
      function1: "mbti.js",
      function2: "holland.js",
      navbar: "navbar.js",
      username: req.user.name,
      userimg: req.user.img,
      toastr_render: req.toastr.render(),
    });
  }
}

module.exports = new TestController();
