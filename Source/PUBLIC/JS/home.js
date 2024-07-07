var bg = document.querySelector("body");
var closeQuoteBtn = document.getElementById("closequote");
var quoteBackground = document.getElementById("quotebackground");
var quoteContainer = document.getElementById("quotecontainer");
var bodyE = document.querySelector(".body");
var navbar = document.querySelector(".full-navbar");
var quoteContent = document.getElementById("quote");
var equalsElement = document.querySelector(".fa-equals");
var xElement = document.querySelector(".fa-x");
var firstNavbar = document.querySelector("nav");
var secondNavbar = document.getElementById("extend-navbar");
var titleElement = document.getElementById("name");
secondNavbar.classList.add("out");
var dataContainer = document.getElementById("data-container");
var quoteData = JSON.parse(dataContainer.getAttribute("data-quote"));

function createQuoteContent() {
  var numerbOfQuote = Math.floor(Math.random() * quoteData.length + 1);
  quoteContent.innerText = quoteData[numerbOfQuote].quote;
}

closeQuoteBtn.addEventListener("mouseover", function () {
  quoteBackground.classList.remove("hidden");
});

closeQuoteBtn.addEventListener("mouseout", function () {
  quoteBackground.classList.add("hidden");
});

closeQuoteBtn.addEventListener("click", function () {
  quoteContainer.style.display = "none";
  bodyE.classList.add("hidden");
  introBtn.style.zIndex = "1";
  navbar.style.position = "block";
  navbar.style.zIndex = "1000";
  navbar.style.opacity = "1";
  footer.style.position = "block";
  footer.style.zIndex = "1000";
  footer.style.opacity = "1";
  bg.style.overflowX = "hidden";
});

window.addEventListener("load", function () {
  createQuoteContent();
  quoteContainer.style.display = "flex";
  bodyE.classList.remove("hidden");
  introBtn.style.zIndex = "-999";
  navbar.style.position = "relative";
  navbar.style.zIndex = "-999";
  navbar.style.opacity = "0.6";
  footer.style.position = "fixed";
  footer.style.zIndex = "-999";
  footer.style.opacity = "0.9";
  bg.style.overflow = "hidden";
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

window.addEventListener("resize", resizeHandle);
resizeHandle();

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
