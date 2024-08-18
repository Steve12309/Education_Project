window.addEventListener("load", function () {
  var alertInfo = document.querySelectorAll(".alert");
  if (alertInfo) {
    this.setTimeout(function () {
      alertInfo.forEach(function (alertMsg) {
        alertMsg.classList.remove("show");
        alertMsg.classList.add("hide");
      });
    }, 30000);
  }
});
