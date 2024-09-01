var bg = document.querySelector("body");
var searchInput = document.getElementById("search-in");
var colleges = [];
var collegeContainer = document.getElementById("list-sch");
var dataContainer = document.getElementById("data-container");
var universityData = JSON.parse(dataContainer.getAttribute("data-university"));
var searchBtn = document.querySelector(".search");
var errorPage = document.getElementById("error-page");
var schooldetail = document.getElementById("school-detail");
var slug = "";
var iframe = document.getElementById("iframedetail");
var popsearch = document.getElementById("pop-search");
var popcontaisearch = document.getElementById("pop-contai-search");
var contaisearch = document.getElementById("contai-search");
const socket = io("http://localhost:5500", { path: "/socket.io" });
const MAX_LOAD_TIME = 3000;
const CHECK_INTERVAL = 100;
let startTime = Date.now();
let isPageLoaded = false;

function checkLoadTime() {
  if (Date.now() - startTime > MAX_LOAD_TIME && !isPageLoaded) {
    console.log("Tải lại trang vì trang mất quá nhiều thời gian để tải.");
    window.location.reload();
  }
}

function checkIframe() {
  const iframe = document.querySelector(".iframe-hidden");
  if (
    iframe &&
    iframe.contentDocument &&
    iframe.contentDocument.readyState === "complete"
  ) {
    startTime = Date.now();
    isPageLoaded = true;
    clearInterval(iframeCheckInterval);
    setTimeout(checkLoadTime, 1000);
  }
}

const iframeCheckInterval = setInterval(checkIframe, CHECK_INTERVAL);

window.addEventListener("load", function () {
  renderCollege(universityData);
});

var inputValue = "";
searchInput.addEventListener("keyup", function (e) {
  inputValue = e.target.value.toLowerCase();
  setTimeout(function () {
    var filterCollege = universityData.filter((university) => {
      return university.name.toLowerCase().includes(inputValue);
    });
    if (Object.keys(filterCollege).length === 0) {
      renderCollege(filterCollege);
      errorPage.classList.remove("hide");
      iframe.classList.add("hide");
    } else {
      renderCollege(filterCollege);
      errorPage.classList.add("hide");
    }
  }, 1000);
});
function hidesearchin() {
  if (window.innerWidth <= 850) {
    contaisearch.removeChild(searchInput);
  } else {
    contaisearch.appendChild(searchInput);
  }
}
window.addEventListener("resize", hidesearchin);
hidesearchin();
var c = 0;
function openpop() {
  c = c + 1;
  if (c % 2 == 0) {
    popsearch.classList.remove("active");
    setTimeout(function () {
      popsearch.classList.add("hide");
    }, 200);
  } else {
    popsearch.classList.remove("hide");
    setTimeout(function () {
      popsearch.classList.add("active");
      popcontaisearch.appendChild(searchInput);
    }, 1);
  }
}

function renderCollege(data) {
  var htmls = data.map(function (college) {
    return `
    <div class="sch" data-slug="${college.slug}" onclick="detail(this)">
            <div class="sch-contai-img">
              <img id="college"  src="${college.img}" onclick="detail(this)">
            </div>
            <div class="info">
                    <h2>${college.name}</h2>
                    <h4>${college.address}</h4>
            </div>
        </div>
    `;
  });
  collegeContainer.innerHTML = htmls.join("");
}

function detail(imgElement) {
  var slug1 = imgElement.getAttribute("data-slug");
  slug = slug1;
  iframe.classList.remove("hide");
  iframe.src = `http://localhost:5500/university/${slug}`;
  var constmodeValue = localStorage.getItem("mode");
  if (constmodeValue === "light") {
    setTimeout(function () {
      iframe.contentWindow.postMessage(
        { action: "light", univerSlug: slug },
        "*"
      );
    }, 1000);
  } else if (constmodeValue === "dark") {
    setTimeout(function () {
      iframe.contentWindow.postMessage(
        { action: "dark", univerSlug: slug },
        "*"
      );
    }, 1000);
  }
}

window.addEventListener("load", function () {
  var urlParams = new URLSearchParams(window.location.search);
  var slugSave = urlParams.get("slug");
  if (slugSave) {
    var UniverContainer = document.querySelector(
      `.sch[data-slug="${slugSave}"]`
    );
    detail(UniverContainer);
    const urlWithoutSlug = window.location.origin + window.location.pathname;
    history.replaceState(null, "", urlWithoutSlug);
  }
});

function startIntro() {
  const intro = introJs();
  intro.setOptions({
    steps: [
      {
        element: "#introduction-University",
        intro:
          "Đây là trang bạn sẽ tìm kiếm những thông tin chi tiết về các trường đại học theo phạm vi tùy chỉnh",
      },
      {
        element: ".step-one-University",
        intro:
          "Đây là thanh tìm kiếm để bạn có thể tìm kiếm các trường đại học cụ thể nhanh hơn",
      },
      {
        element: ".step-two-University",
        intro: "Đây là danh sách các trường đại học mà website hiện có",
      },
      {
        element: ".step-three-University",
        intro:
          "Đây là nơi hiển thị các thông tin về trường đại học mà bạn chọn ở danh sách kế bên",
      },
    ],
    showProgress: true,
    showBullets: false,
    disableInteraction: true,
  });

  intro.start();
}
