window.addEventListener("message", function (event) {
  var message = event.data;
  var themeLink = document.getElementById("theme-link");
  if (message.action === "light") {
    themeLink.href = "/universitydetail-light.css";
  } else if ((message.action = "dark")) {
    themeLink.href = "/universitydetail-dark.css";
  }
});
