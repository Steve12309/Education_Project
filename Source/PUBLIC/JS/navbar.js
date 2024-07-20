var university = document.querySelectorAll(".university1");
var home = document.querySelectorAll(".home1");
var story = document.querySelectorAll(".story1");
var test = document.querySelectorAll(".test1");
var logoutimg = document.getElementById("logoutimg");
var themeimg = document.getElementById("themeimg");
var autoimg = document.getElementById("autoimg");
var turtoimg = document.getElementById("turtoimg");
var mode = document.getElementById("mode-link");
var theme = document.querySelector("#theme-link");
var header = document.getElementById("header-link");
var autoNext = false;
var modeValue = "light";
var changeModeBtn = document.getElementById("mode");
var introBtn = document.getElementById("contai-intro");
var turnAutoMode = document.querySelector(".auto");
var avartaimg = document.getElementById("avartaimg");
var passimg = document.getElementById("passimg");
var feedimg = document.getElementById("feedimg");
var lauchimg = document.querySelectorAll(".lauch");
var backimg = document.querySelectorAll(".backimg");
var alertInfo = document.querySelector(".alert");
var equalsElement = document.querySelector(".fa-equals");
var xElement = document.querySelector(".fa-x");
var firstNavbar = document.querySelector("nav");
var secondNavbar = document.getElementById("extend-navbar");
var titleElement = document.getElementById("name");
var iframe = document.getElementById("iframedetail");

secondNavbar.classList.add("out");
introBtn.addEventListener("click", function () {
  startIntro();
});
//respon narbar
xElement.addEventListener("click", function () {
  returnViewNavbar();
});

equalsElement.addEventListener("click", function () {
  changeViewNavbar();
});

function resizeHandle() {
  if (window.innerWidth <= 850) {
    equalsElement.style.display = "block";
    firstNavbar.style.display = "none";
    window.onload = returnViewNavbar;
  } else {
    equalsElement.style.display = "none";
    xElement.style.display = "none";
    firstNavbar.style.display = "flex";
  }
}

window.addEventListener("resize", function () {
  resizeHandle();
});

function changeViewNavbar() {
  xElement.style.display = "block";
  equalsElement.style.display = "none";
  secondNavbar.classList.remove("out");
  secondNavbar.classList.add("appear");
}
titleElement.style.display = "block";
function returnViewNavbar() {
  xElement.style.display = "none";
  equalsElement.style.display = "block";
  secondNavbar.classList.remove("appear");
  secondNavbar.classList.add("out");
}
turnAutoMode.addEventListener("click", function () {
  changeAutoMode();
});

function changeAutoMode() {
  if (autoNext === true) {
    autoNext = false;
    localStorage.setItem("auto", autoNext);
  } else if (autoNext === false) {
    autoNext = true;
    localStorage.setItem("auto", autoNext);
  }
}

changeModeBtn.addEventListener("click", function () {
  changeTheme();
});

function changeTheme() {
  // Home Page
  if (theme.getAttribute("href") === "/home-light.css") {
    theme.href = "/home-dark.css";
    header.href = "/header-dark.css";
    mode.href = "/mode-dark.css";
    modeValue = "dark";
  } else if (theme.getAttribute("href") === "/home-dark.css") {
    theme.href = "/home-light.css";
    header.href = "/header-light.css";
    mode.href = "/mode-light.css";
    modeValue = "light";
  }
  // Test Page
  if (theme.getAttribute("href") === "/test-light.css") {
    theme.href = "/test-dark.css";
    header.href = "/header-dark.css";
    mode.href = "/mode-dark.css";
    modeValue = "dark";
  } else if (theme.getAttribute("href") === "/test-dark.css") {
    theme.href = "/test-light.css";
    header.href = "/header-light.css";
    mode.href = "/mode-light.css";
    modeValue = "light";
  }
  // University Page
  if (theme.getAttribute("href") === "/university-light.css") {
    theme.href = "/university-dark.css";
    header.href = "/header-dark.css";
    mode.href = "/mode-dark.css";
    modeValue = "dark";
  } else if (theme.getAttribute("href") === "/university-dark.css") {
    theme.href = "/university-light.css";
    header.href = "/header-light.css";
    mode.href = "/mode-light.css";
    modeValue = "light";
  }
  // Story Page
  if (theme.getAttribute("href") === "/story-light.css") {
    theme.href = "/story-dark.css";
    header.href = "/header-dark.css";
    mode.href = "/mode-dark.css";
    modeValue = "dark";
  } else if (theme.getAttribute("href") === "/story-dark.css") {
    theme.href = "/story-light.css";
    header.href = "/header-light.css";
    mode.href = "/mode-light.css";
    modeValue = "light";
  }
  //detail uni page
  if (iframe === null) {
  } else {
    iframe.onload = function () {
      var constmodeValue = localStorage.getItem("mode");
      if (constmodeValue === "light") {
        iframe.contentWindow.postMessage({ action: "light" }, "*");
      } else if (constmodeValue === "dark") {
        iframe.contentWindow.postMessage({ action: "dark" }, "*");
      }
    };
  }
  localStorage.setItem("mode", modeValue);
  changeMode(modeValue);
}

function changeMode(modeValue) {
  if (modeValue === "light") {
    home.forEach((e) => {
      e.src = "/img/navbar_imgs/black_imgs/home_black.png";
    });
    test.forEach((e) => {
      e.src = "/img/navbar_imgs/black_imgs/test_black.png";
    });
    university.forEach((e) => {
      e.src = "/img/navbar_imgs/black_imgs/university_black.png";
    });
    story.forEach((e) => {
      e.src = "/img/navbar_imgs/black_imgs/story_black.png";
    });
    logoutimg.src = "/img/tool_imgs/logout2.png";
    themeimg.src = "/img/tool_imgs/theme2.png";
    autoimg.src = "/img/tool_imgs/auto2.png";
    turtoimg.src = "/img/tool_imgs/video-lesson2.png";
    feedimg.src = "/img/tool_imgs/review2.png";
    passimg.src = "/img/tool_imgs/key2.png";
    avartaimg.src = "/img/tool_imgs/avatar2.png";
    lauchimg.forEach((e) => {
      e.src = "/img/tool_imgs/lauch2.png";
    });
    backimg.forEach((e) => {
      e.src = "/img/tool_imgs/back2.png";
    });
  } else if (modeValue === "dark") {
    home.forEach((e) => {
      e.src = "/img/navbar_imgs/white_imgs/home_white.png";
    });
    test.forEach((e) => {
      e.src = "/img/navbar_imgs/white_imgs/test_white.png";
    });
    university.forEach((e) => {
      e.src = "/img/navbar_imgs/white_imgs/university_white.png";
    });
    story.forEach((e) => {
      e.src = "/img/navbar_imgs/white_imgs/story_white.png";
    });
    logoutimg.src = "/img/tool_imgs/logout1.png";
    themeimg.src = "/img/tool_imgs/theme1.png";
    autoimg.src = "/img/tool_imgs/auto1.png";
    turtoimg.src = "/img/tool_imgs/video-lesson1.png";
    feedimg.src = "/img/tool_imgs/review1.png";
    passimg.src = "/img/tool_imgs/key1.png";
    avartaimg.src = "/img/tool_imgs/avatar1.png";
    lauchimg.forEach((e) => {
      e.src = "/img/tool_imgs/lauch1.png";
    });
    backimg.forEach((e) => {
      e.src = "/img/tool_imgs/back1.png";
    });
  }
}

window.addEventListener("load", function () {
  var constmodeValue = localStorage.getItem("mode");
  if (constmodeValue === "light") {
  } else if (constmodeValue === "dark") {
    changeModeBtn.click();
    changeModeBtn.checked = true;
  }
  var constautomodeValue = localStorage.getItem("auto");
  if (constautomodeValue === "true") {
    turnAutoMode.click();
    turnAutoMode.checked = true;
  } else if (constautomodeValue === "false") {
  }
});
//var for setting
var avatarpage = document.getElementById("avatarpage");
var feedpage = document.getElementById("feedpage");
var passpage = document.getElementById("passpage");
var mainset = document.getElementById("main");
var userexpand = document.getElementById("user-expand");
var movesetting = 0;
var move = 0;
var contaiexpand = document.getElementById("contai-page-expand");
var pageexpand = document.querySelectorAll(".page-expand");
pageexpand.forEach((e) => {
  e.style.display = "none";
});

feedpage.addEventListener("submit", function () {
  setTimeout(function () {
    console.log(feedpage.getAttribute("action"));
    feedpage.action = "/feedback";
    feedpage.submit();
  }, 1000);
});

//open setting
function openset() {
  userexpand.classList.add("active");
  overlay.style.display = "block";
  mainset.style.display = "block";
  setTimeout(function () {
    overlay.style.backgroundColor = "rgb(50, 50, 50, 0.7)";
  }, 10);
}

//change password
function passclick() {
  passpage.style.display = "block";
  movesetting = movesetting - 100;
  moveset();
}

//feedback
function feedclick() {
  feedpage.style.display = "block";
  movesetting = movesetting - 100;
  moveset();
}

//avatarpage
function avatarclick() {
  avatarpage.style.display = "block";
  movesetting = movesetting - 100;
  moveset();
}
//sub for setting move
function moveset() {
  move = movesetting + "%";
  contaiexpand.style.left = move;
}
function back(e) {
  movesetting = movesetting + 100;
  moveset();
  setTimeout(function () {
    e.style.display = "none";
  }, 500);
}
function deletes(e) {
  e.style.display = "none";
}
//clicklay setting
function clicklay() {
  userexpand.classList.remove("active");
  overlay.style.backgroundColor = "rgb(50, 50, 50, 0)";
  movesetting = 0;
  moveset();
  setTimeout(function () {
    overlay.style.display = "none";
  }, 500);
  deletes(passpage);
  deletes(feedpage);
  deletes(avatarpage);
}

// picavatar
const avatarp = document.getElementById("avatarp");
const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const preview = document.getElementById("preview");
const uploadBtn = document.getElementById("upload");
var cropper;

dropZone.addEventListener("click", () => fileInput.click());

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("dragover");
  const files = event.dataTransfer.files;
  if (files.length) {
    handleFiles(files);
  }
});

fileInput.addEventListener("change", () => {
  const files = fileInput.files;
  if (files.length) {
    handleFiles(files);
  }
});

function getRoundedCanvas(sourceCanvas) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var width = sourceCanvas.width;
  var height = sourceCanvas.height;
  canvas.width = width;
  canvas.height = height;
  context.imageSmoothingEnabled = true;
  context.drawImage(sourceCanvas, 0, 0, width, height);
  context.globalCompositeOperation = "destination-in";
  context.beginPath();
  context.arc(
    width / 2,
    height / 2,
    Math.min(width, height) / 2,
    0,
    2 * Math.PI,
    true
  );
  context.fill();
  return canvas;
}

function handleFiles(files) {
  const file = files[0];
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (event) => {
      preview.src = event.target.result;
      preview.style.display = "block";
      dropZone.style.display = "none";
      if (cropper) {
        cropper.destroy();
      }
      cropper = new Cropper(preview, {
        aspectRatio: 1,
        dragMode: "move",
        autoCrop: true,
        center: true,
        viewMode: 1,
        autoCropArea: 0.9,
        toggleDragModeOnDblclick: false,
        cropBoxResizable: false,
        background: false,
      });
    };
    reader.readAsDataURL(file);
  } else {
    alert("Vui lòng chọn một tệp ảnh.");
  }
}

uploadBtn.addEventListener("click", (e) => {
  if (cropper) {
    const croppedCanvas = cropper.getCroppedCanvas();
    const roundedCanvas = getRoundedCanvas(croppedCanvas);

    roundedCanvas.toBlob((blob) => {
      const formData = new FormData();
      formData.append("avatar", blob, "avatar.png");

      fetch("/uploadavatar", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }
});
