const socket = io("http://localhost:5500", { path: "/socket.io" });
var postComment = document.querySelector(".commentSubmitBtn");
var newComment = document.getElementById("Comment");
var commentArea = document.querySelector(".comment-area");
var universitySlug = "";
var saveUniBtn = document.querySelector(".saveUni");
var infoCollege = document.querySelector(".info-container");
var CollegeName = document.querySelector("h1").innerText;
var slugsArr = [];
moment.updateLocale("vi", {
  relativeTime: {
    future: "trong %s",
    past: "%s trước",
    s: "vài giây",
    ss: "%d giây",
    m: "một phút",
    mm: "%d phút",
    h: "một giờ",
    hh: "%d giờ",
    d: "một ngày",
    dd: "%d ngày",
    M: "một tháng",
    MM: "%d tháng",
    y: "một năm",
    yy: "%d năm",
  },
});

saveUniBtn.addEventListener("click", function (e) {
  e.preventDefault();
  saveUniBtn.innerHTML = `
  <i class="fa-solid fa-bookmark icon-save"></i>
  `;
  saveUni(CollegeName);
});
function saveUni(university) {
  fetch("/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ university }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((err) => console.log(err.message));
}

postComment.addEventListener("click", function (e) {
  e.preventDefault();
  var comment = newComment.value;
  socket.emit("newComment", { comment, universitySlug });
  newComment.value = "";
});

function updateTimeAgo(element, timestamp) {
  element.textContent = moment(timestamp).locale("vi").fromNow();
}

socket.on("comment", (comment) => {
  const timeAgo = moment(comment.timestamp).fromNow();
  var userComment = document.createElement("div");
  userComment.classList.add("userComment");
  var commentContent = `
     <div class="userInfo">
      <img src="${comment.img}" alt="User Img" />
    <p class="userName">${comment.user}</p>
    </div>
    <p class="userContent">${comment.comment}</p>
  `;
  var timeElement = document.createElement("p");
  timeElement.classList.add("time");
  timeElement.textContent = timeAgo;
  userComment.innerHTML = commentContent;
  userComment.appendChild(timeElement);
  commentArea.insertBefore(userComment, commentArea.firstChild);
  updateTimeAgo(timeElement, comment.timestamp);
  setInterval(() => {
    updateTimeAgo(timeElement, comment.timestamp);
  }, 1000);
});

socket.on("loadComments", (comments) => {
  comments.forEach((comment) => {
    const timeAgo = moment(comment.timestamp).fromNow();
    var userComment = document.createElement("div");
    userComment.classList.add("userComment");
    var commentContent = `
    <div class="userInfo">
      <img src="${comment.img}" alt="User Img" />
    <p class="userName">${comment.user}</p>
    </div>
    <p class="userContent">${comment.message}</p>
  `;
    var timeElement = document.createElement("p");
    timeElement.classList.add("time");
    timeElement.textContent = timeAgo;
    userComment.innerHTML = commentContent;
    userComment.appendChild(timeElement);
    commentArea.appendChild(userComment);
    updateTimeAgo(timeElement, comment.timestamp);
    setInterval(() => {
      updateTimeAgo(timeElement, comment.timestamp);
    }, 1000);
  });
});

window.addEventListener("message", async function (event) {
  var message = event.data;
  universitySlug = message.univerSlug;
  var themeLink = document.getElementById("theme-link");
  if (message.action === "light") {
    themeLink.href = "/universitydetail-light.css";
  } else if ((message.action = "dark")) {
    themeLink.href = "/universitydetail-dark.css";
  }
  await getCollegeData(universitySlug);
  socket.emit("joinUniversity", message.univerSlug);
});

async function getCollegeData(slug) {
  fetch("/history/university")
    .then((res) => res.json())
    .then((data) => showCollegeData(data, slug))
    .catch((err) => console.log(err.message));
}

function showCollegeData(data, slug) {
  var universityData = data;
  var universitiesObj = universityData[0];
  var universitiesArr = universitiesObj.universities;
  universitiesArr.forEach((university) => {
    slugsArr.push(university.slug);
  });
  checkSaveUni(slugsArr, slug);
}

function checkSaveUni(arr, slugData) {
  console.log(arr[1], typeof arr[1], arr);
  console.log(typeof slugData);
  var checkState = slugsArr.find((slug) => {
    return slug === slugData;
  });
  if (checkState) {
    saveUniBtn.innerHTML = `
  <i class="fa-solid fa-bookmark icon-save"></i>
  `;
  } else {
  }
}
