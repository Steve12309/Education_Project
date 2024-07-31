class TestController {
  async test(req, res) {
    try {
      const successLogin = req.flash("successlogin");
      if (Object.keys(successLogin).length === 0) {
      } else {
        req.toastr.success(
          "Chúc một ngày tốt lành!",
          Object.values(successLogin)[0],
          {
            closeButton: true,
            debug: true,
            newestOnTop: false,
            progressBar: true,
            positionClass: "toast-top-right",
            preventDuplicates: true,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
          }
        );
      }
      res.render("test", {
        style: "test-light.css",
        function1: "mbti.js",
        function2: "holland.js",
        navbar: "navbar.js",
        username: req.user.name,
        userimg: req.user.img,
        toastr_render: req.toastr.render(),
      });
    } catch (err) {
      console.log(err.message);
    }
  }
}

module.exports = new TestController();
