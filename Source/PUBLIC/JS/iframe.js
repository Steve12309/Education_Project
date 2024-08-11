const socket = io("http://localhost:5500", { path: "/socket.io" });
var postComment = document.querySelector(".commentSubmitBtn");
var newComment = document.getElementById("Comment");
var commentArea = document.querySelector(".comment-area");
var universitySlug = "";
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
  console.log(comment);
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
  commentArea.appendChild(userComment);
  updateTimeAgo(timeElement, comment.timestamp);
  setInterval(() => {
    updateTimeAgo(timeElement, comment.timestamp);
  }, 1000);
});

socket.on("loadComments", (comments) => {
  console.log(comments);
  comments.forEach((comment) => {
    console.log(comment);
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

window.addEventListener("message", function (event) {
  var message = event.data;
  universitySlug = message.univerSlug;
  var themeLink = document.getElementById("theme-link");
  if (message.action === "light") {
    themeLink.href = "/universitydetail-light.css";
  } else if ((message.action = "dark")) {
    themeLink.href = "/universitydetail-dark.css";
  }
  socket.emit("joinUniversity", message.univerSlug);
});
