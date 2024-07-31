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

window.addEventListener("load", function () {
  renderCollege(universityData);
});

function startIntro() {
  const intro = introJs();
  intro.setOptions({
    steps: [
      {
        element: "#introduction",
        intro:
          "Chào mừng đến với website hướng nghiệp cho mọi lứa tuổi. Hãy cùng khám phá một chút tính năng về website của chúng tôi nhé!",
      },
      {
        element: "#step-one",
        intro:
          "Đây là thanh navbar hay công cụ sẽ xuất hiện ở mọi trang của website chúng tôi",
      },
      {
        element: "#step-two",
        intro: "Đây chính là logo và châm ngôn chính của website chúng tôi.",
      },
      {
        element: "#step-three",
        intro:
          "Còn đây là nơi trang chủ của chúng tôi để bạn có thể quay về trang chủ bất cứ khi nào bạn muốn.",
      },
      {
        element: "#step-four",
        intro:
          "Kế bên đây là nơi sẽ dẫn bạn đến những bài test thú vị để tìm ra được công việc phù hợp của bạn trong tương lai dựa trên một sự pha trộn tuyệt vời",
      },
      {
        element: "#step-five",
        intro:
          "Kế cuối đây là nơi để bạn có thế tìm hiểu về bất cứ trường đại học nào ở mọi nơi trên thế giới để từ đó đưa ra những quyết định đúng đắn hơn trong việc chọn trường để học phù hợp với năng lực và sở thích cũng như đam mê của bản thân.",
      },
      {
        element: "#step-six",
        intro:
          "Cuối cùng là nơi để bạn có thể đọc những mẫu chuyển ngắn từ người thành công hay những videos từ họ để có thêm động lực và kinh nghiệm trên con đường đi đến thành công của bạn sau này.",
      },
    ],
    showProgress: true,
    showBullets: false,
    disableInteraction: true,
  });

  intro.start();
}

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
function hidesearchin(){
  if (window.innerWidth <= 850) {
    contaisearch.removeChild(searchInput);
  }
  else{
    contaisearch.appendChild(searchInput);
  }
} 
window.addEventListener("resize", hidesearchin);
hidesearchin();
var c =0;
function openpop() {
  c=c+1;
  if (c%2==0) {
    popsearch.classList.remove("active");
    setTimeout(function () {
    popsearch.classList.add("hide");
    }, 200);
  }
  else{
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
  iframe.onload = function () {
    var constmodeValue = localStorage.getItem("mode");
    if (constmodeValue === "light") {
      iframe.contentWindow.postMessage({ action: "light" }, "*");
    } else if (constmodeValue === "dark") {
      iframe.contentWindow.postMessage({ action: "dark" }, "*");
    }
  };
}
