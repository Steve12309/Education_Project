const socket = io("http://localhost:5500", { path: "/socket.io" });
var postComment = document.querySelector(".commentSubmitBtn");
var newComment = document.getElementById("Comment");
var commentArea = document.querySelector(".comment-area");
var universitySlug = "";
var saveUniBtn = document.querySelector(".saveUni");
var infoCollege = document.querySelector(".info-container");
var CollegeName = document.querySelector("h1").innerText;
var slugsArr = [];
var containComment = false;
let currenteditcomment = null;
var elementEditing = [];

function userComments(userComments) {
  userComments.forEach((userComment) => {
    userComment.addEventListener("mouseover", (e) =>
      showOptions(e.currentTarget)
    );
    userComment.addEventListener("mouseout", (e) =>
      hideOptions(e.currentTarget)
    );
  });
}

function showOptions(userComment) {
  var dataContainer = document.getElementById("data-container");
  var userIdData = dataContainer.getAttribute("data-userId");
  var userCommentId = userComment.getAttribute("data-user-id");
  var option = userComment.querySelector(".options");
  if (option) {
    if (userCommentId === userIdData) {
      option.style.display = "flex";
    }
  }
}

function hideOptions(userComment) {
  var option = userComment.querySelector(".options");
  if (option) {
    option.style.display = "none";
  }
}

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
  changeUniState();
});

function changeUniState() {
  if (
    saveUniBtn.innerHTML ===
    `
  <i class="fa-solid fa-bookmark icon-save"></i>
  `
  ) {
    deleteUni(CollegeName);
    saveUniBtn.innerHTML = `
    <i
    class="fa-regular fa-bookmark icon-save"
  ></i>
    `;
  } else {
    saveUni(CollegeName);
    saveUniBtn.innerHTML = `
  <i class="fa-solid fa-bookmark icon-save"></i>
  `;
  }
}

function deleteUni(university) {
  fetch("/delete", {
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
  var demo = [];
  const timeAgo = moment(comment.timestamp).fromNow();
  var userComment = document.createElement("div");
  userComment.classList.add("userComment");
  userComment.dataset.userId = comment.userId;
  userComment.dataset.commentId = comment.commentId;
  var commentContent = `
     <div class="userInfo">
      <img src="${comment.img}" alt="User Img" />
    <p class="userName">${comment.user}</p>
    </div>
    <p class="userContent">${comment.comment}</p>
    <div class="options">
      <button class="btnedit" onclick="editcomment(this)"><img src="/img/tool_imgs/edit.png" style="width: 100%; height:100%"></button>
      <button class="btndelete" onclick="deletecomment(this)"><img src="/img/tool_imgs/delete.png" style="width: 100%; height:100%"></button>
    </div>
  `;
  var timeElement = document.createElement("p");
  timeElement.classList.add("time");
  timeElement.textContent = timeAgo;
  userComment.innerHTML = commentContent;
  userComment.querySelector(".userInfo").appendChild(timeElement);
  demo.push(userComment);
  commentArea.insertBefore(userComment, commentArea.firstChild);
  updateTimeAgo(timeElement, comment.timestamp);
  setInterval(() => {
    updateTimeAgo(timeElement, comment.timestamp);
  }, 1000);
  containComment = true;
  checkComments(containComment, demo, "post");
});

socket.on("deletedcomment", async (data) => {
  const { commentId, userId, userComment } = data;
  var userComments = document.querySelectorAll(".userComment");
  userComments.forEach((usercomment) => {
    var userCommentId = usercomment.getAttribute("data-comment-id");
    var userIdClient = usercomment.getAttribute("data-user-id");
    var userCommentMsg = usercomment.querySelector(".userContent").textContent;
    if (
      userCommentId === commentId &&
      userIdClient === userId &&
      userCommentMsg === userComment
    ) {
      usercomment.remove();
    }
  });
});

socket.on("edittedcomment", async (data) => {
  const { editvalue, Status } = data;
  var currenteditcomment = elementEditing[0];
  const editdiv = currenteditcomment.querySelector(".editdiv");
  currenteditcomment.querySelector(".editextarea").value = "";
  currenteditcomment.removeChild(editdiv);
  currenteditcomment.querySelector(".userContent").innerHTML = editvalue;
  var userInfo = currenteditcomment.querySelector(".userInfo");
  var checkIEle = currenteditcomment.querySelector(".edittedState");
  if (checkIEle) {
  } else {
    var iEle = document.createElement("i");
    iEle.classList.add("edittedState");
    iEle.textContent = Status;
    userInfo.appendChild(iEle);
  }
  elementEditing = [];
});

socket.on("loadComments", (comments) => {
  var demo = [];
  commentArea.innerHTML = "";
  comments.forEach((comment) => {
    const timeAgo = moment(comment.timestamp).fromNow();
    var userComment = document.createElement("div");
    userComment.classList.add("userComment");
    userComment.dataset.userId = comment.userId;
    userComment.dataset.commentId = comment._id;
    var commentContent = `
    <div class="userInfo">
      <img src="${comment.img}" alt="User Img" />
      <p class="userName">${comment.user}</p>
    </div>
    <p class="userContent">${comment.message}</p>
    <div class="options">
      <button class="btnedit" onclick="editcomment(this)"><img src="/img/tool_imgs/edit.png" style="width: 100%; height:100%"></button>
      <button class="btndelete" onclick="deletecomment(this)"><img src="/img/tool_imgs/delete.png" style="width: 100%; height:100%"></button>
    </div>
  `;
    var timeElement = document.createElement("p");
    timeElement.classList.add("time");
    timeElement.textContent = timeAgo;
    userComment.innerHTML = commentContent;
    userComment.querySelector(".userInfo").appendChild(timeElement);
    if (comment.state) {
      var iEle = document.createElement("i");
      iEle.classList.add("edittedState");
      iEle.textContent = comment.state;
      var userInfo = userComment.querySelector(".userInfo");
      userInfo.appendChild(iEle);
    }
    demo.push(userComment);
    updateTimeAgo(timeElement, comment.timestamp);
    setInterval(() => {
      updateTimeAgo(timeElement, comment.timestamp);
    }, 1000);
  });
  if (comments.length !== 0) {
    containComment = true;
    checkComments(containComment, demo, "load");
  } else {
    containComment = false;
    checkComments(containComment, null, "load");
  }
});
function editcomment(buttonedit) {
  currenteditcomment = buttonedit.parentElement.parentElement;
  elementEditing.push(currenteditcomment);
  if (currenteditcomment.querySelector(".editextarea")) {
  } else {
    const contentcomment =
      currenteditcomment.querySelector(".userContent").textContent;
    const editdiv = document.createElement("div");
    editdiv.classList.add("editdiv");
    editdiv.innerHTML = `<textarea class="editextarea"></textarea>
    <div class="controlcomment">
    <button class="btn-savecomment"><img src="/img/tool_imgs/check-green.png"></button>
    <button class="btn-canceledit"><img src="/img/tool_imgs/turn-back-red.png"></button>
    </div>`;
    currenteditcomment.appendChild(editdiv);
    currenteditcomment.querySelector(".editextarea").value = contentcomment;
  }
  document.querySelectorAll(".btn-canceledit").forEach((item) => {
    item.addEventListener("click", function () {
      const editdiv = currenteditcomment.querySelector(".editdiv");
      currenteditcomment.removeChild(editdiv);
      currenteditcomment.querySelector(".editextarea").value = "";
    });
  });
  document.querySelectorAll(".btn-savecomment").forEach((item) => {
    item.addEventListener("click", function () {
      const editvalue = currenteditcomment.querySelector(".editextarea").value;
      const currentvalue =
        currenteditcomment.querySelector(".userContent").textContent;
      socket.emit("editComment", { editvalue, currentvalue, universitySlug });
    });
  });
}

function deletecomment(buttondelete) {
  var currentdeletecomment = buttondelete.parentElement.parentElement;
  var commentId = currentdeletecomment.getAttribute("data-comment-id");
  var userId = currentdeletecomment.getAttribute("data-user-id");
  var userComment =
    currentdeletecomment.querySelector(".userContent").textContent;
  socket.emit("deleteComment", {
    commentId,
    userId,
    userComment,
    universitySlug,
  });
}

function checkComments(state, userComment, content) {
  if (state === false && userComment === null) {
    commentArea.style.height = "400px";
    commentArea.innerHTML = `
     <div class="noCommentContainer">
      <img src="../../../img/others_imgs/noComment.png" alt="" class="noCommentImg">
      <p>Chưa có bình luận nào. Hãy là người đầu tiên bình luận</p>
     </div>
    `;
  } else if (state === true && userComment !== null && content === "load") {
    commentArea.style.height = "auto";
    commentArea.innerHTML = "";
    if (commentArea.innerHTML === "") {
      userComment.forEach((usercomment) => {
        commentArea.appendChild(usercomment);
      });
    }
  } else if (state === true && userComment !== null && content === "post") {
    commentArea.style.height = "auto";
    var nocommentUser = commentArea.querySelector(".noCommentContainer");
    if (nocommentUser) {
      commentArea.innerHTML = "";
      userComment.forEach((usercomment) => {
        commentArea.appendChild(usercomment);
      });
    } else {
      if (commentArea.innerHTML === "") {
        userComment.forEach((usercomment) => {
          commentArea.appendChild(usercomment);
        });
      }
    }
  }
  userComments(document.querySelectorAll(".userComment"));
}

window.addEventListener("message", async function (event) {
  var message = event.data;
  var themeLink = document.getElementById("theme-link");
  universitySlug = message.univerSlug;
  if (message.action === "light") {
    themeLink.href = "/universitydetail-light.css";
  } else if (message.action === "dark") {
    themeLink.href = "/universitydetail-dark.css";
  }
  await getCollegeData(message.univerSlug);
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
    slugsArr.sort();
  });
  checkSaveUni(slugsArr, slug);
}

function checkSaveUni(arr, slugData) {
  var checkState = arr.find((slug) => {
    return slug === slugData;
  });
  if (checkState) {
    saveUniBtn.innerHTML = `
  <i class="fa-solid fa-bookmark icon-save"></i>
  `;
  } else {
  }
}
document.querySelectorAll(".commentcontai").forEach((e) => {
  e.style.display = "none";
});

document.querySelectorAll(".commenttile").forEach((item) => {
  item.addEventListener("click", function () {
    const comment = item.nextElementSibling;
    const arrow = item.querySelector(".dropdowncommentimg");
    arrow.style.transform = "rotate(0)";
    if (comment.style.display == "block") {
      comment.style.display = "none";
      arrow.style.transform = "rotate(0)";
    } else {
      comment.style.display = "block";
      arrow.style.transform = "rotate(-180deg)";
    }
  });
});
