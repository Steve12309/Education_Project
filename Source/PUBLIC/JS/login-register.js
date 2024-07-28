const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
window.addEventListener("load", function () {
  var alertInfo = document.querySelectorAll(".alert");
  if (alertInfo) {
    this.setTimeout(function () {
      alertInfo.forEach(function (alertMsg) {
        alertMsg.classList.remove("show");
        alertMsg.classList.add("hide");
      });
    }, 5000);
  }
});

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
