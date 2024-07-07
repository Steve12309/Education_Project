var mbtiBtn = document.getElementById("mbti");
var clickM = 0;
var MBTI = [
  {
    ques: "Câu 1: Tại một buổi tiệc, bạn sẽ",
    ansA: "A. Giao tiếp với nhiều người, kể cả người lạ",
    ansB: "B. Chỉ giao tiếp với với một số ít người mà bạn đã quen",
  },
  {
    ques: "Câu 2: Tại các bữa tiệc, bạn thường:",
    ansA: "A. Ở lại tới cùng và cảm thấy càng lúc càng hào hứng",
    ansB: "B. Ra về sớm vì cảm thấy mệt mỏi dần",
  },
  {
    ques: "Câu 3: Trong các mối quan hệ xã hội, bạn thường",
    ansA: "A. Luôn nắm bắt kịp thời thông tin về các vấn đề của mọi người",
    ansB: "B. Thường biết thông tin sau những người khác",
  },
  {
    ques: "Câu 4: Khi nói chuyện điện thoại, bạn:",
    ansA: "A. Cứ gọi bình thường",
    ansB: "B. Chuẩn bị trước những điều sẽ nói",
  },
  {
    ques: "Câu 5: Trong công ty, bạn là người:",
    ansA: "A. Khởi xướng các câu chuyện",
    ansB: "B. Đợi người khác bắt chuyện với mình",
  },
  {
    ques: "Câu 6: Khi phải tương tác với người khác ở các tình huống và vấn đề mới lạ, không thường gặp, bạn thường:",
    ansA: "A. Thấy phấn chấn và hào hứng",
    ansB: "B. Cảm thấy mệt mỏi",
  },
  {
    ques: "Câu 7: Bạn thích kiểu nào hơn?",
    ansA: "A. Nhiều bạn bè ở mức độ xã giao",
    ansB: "B. Một vài người bạn thân",
  },
  {
    ques: "Câu 8: Bạn có thấy mình:",
    ansA: "A. Dễ dàng bắt chuyện và kéo dài cuộc trò chuyện với người mới gặp",
    ansB: "B. Khó mà trò chuyện nhiều với những người mới quen",
  },
  {
    ques: "Câu 9: Khi chuông điện thoại reo, bạn sẽ:",
    ansA: "A. Là người đầu tiên nhấc máy",
    ansB: "B. Hi vọng có người khác sẽ nhấc máy",
  },
  {
    ques: "Câu 10: Bạn có xu hướng nào hơn?",
    ansA: "A. Là người dễ tiếp cận",
    ansB: "B. Ở mức độ nào đó là người kín đáo",
  },
  {
    ques: "Câu 11: Bạn thấy mình là người nghiêng về kiểu nào nhiều hơn?",
    ansA: "A. Thực tế",
    ansB: "B. Sáng tạo",
  },
  {
    ques: "Câu 12: Kiểu người nào sẽ thu hút bạn hơn?",
    ansA: "A. Người thực tế và có lý lẽ",
    ansB: "B. Người giàu trí tưởng tượng",
  },
  {
    ques: "Câu 13: Với các công việc thông thường, bạn nghiêng về cách:",
    ansA: "A. Làm theo cách thông thường",
    ansB: "B. Làm theo cách của riêng mình",
  },
  {
    ques: "Câu 14: Những sự kiện trong thực tế",
    ansA: "A. Bản thân nó giải thích cho chính nó",
    ansB: "B. Nó là bằng chứng giải thích cho các quy tắc, quy luật",
  },
  {
    ques: "Câu 15: Đối với những quy ước, quy tắc thông thường trong xã hội, bạn :",
    ansA: "A. Ít khi nghi ngờ những điều này",
    ansB: "B. Thường xem xét lại tính đúng đắn của những điều đó",
  },
  {
    ques: "Câu 16: Thường thì bạn là:",
    ansA: "A. Người thực tế",
    ansB: "B. Người có khả năng tưởng tượng phong phú",
  },
  {
    ques: "Câu 17: Bạn thường dựa vào:",
    ansA: "A. Sự kiện, thông tin thực tế",
    ansB: "B. Nguyên lí, nguyên tắc",
  },
  {
    ques: "Câu 18: Bạn có xu hướng tin tưởng vào:",
    ansA: "A. Kinh nghiệm của mình",
    ansB: "B. Linh cảm của mình",
  },
  {
    ques: "Câu 19: Bạn đánh giá cao điều gì trong mình hơn:",
    ansA: "A. Nhận thức tốt về các yếu tố thực tế",
    ansB: "B. Có trí tưởng tượng phong phú, rực rỡ",
  },
  {
    ques: "Câu 20: Khi viết, bạn thích:",
    ansA: "A. Viết theo hướng văn chương hơn",
    ansB: "B. Viết theo số liệu, dữ liệu hơn",
  },
  {
    ques: "Câu 21: Bạn nghĩ tình huống nào tồi tể hơn?",
    ansA: "A. Đầu óc của bạn cứ “bay bổng trên mây”",
    ansB: "B. Cuộc sống của bạn thật nhàm chán và không bao giờ thay đổi",
  },
  {
    ques: "Câu 22: Điều nào khiến bạn thấy thích thú hơn?",
    ansA: "A. Những điều thực tế",
    ansB: "B. Những ý tưởng khả thi",
  },
  {
    ques: "Câu 23: Các nhà văn nên:",
    ansA: "A. Viết những gì họ nghĩ và chân thật với những gì mình viết",
    ansB: "B. Diễn đạt sự việc bằng cách so sánh hay liên tưởng",
  },
  {
    ques: "Câu 24: Những người có tầm nhìn xa/người lo xa:",
    ansA: "A. Thường gây khó chịu cho người khác",
    ansB: "B. Khá thú vị",
  },
  {
    ques: "Câu 25: Trẻ em thườn:",
    ansA: "A. Chưa cố gắng đủ",
    ansB: "B. Chưa vui chơi đủ",
  },
  {
    ques: "Câu 26: Bạn thường có xu hướng:",
    ansA: "A. Xem người khác có thể làm được việc gì hữu ích",
    ansB: "B. Xem người khác sẽ nghĩ và cảm nhận như thế nào",
  },
  {
    ques: "Câu 27: Bạn hứng thú với việc gì hơn?",
    ansA: "A. Sản xuất và phân phối",
    ansB: "B. Thiết kế và nghiên cứu",
  },
  {
    ques: "Câu 28: Bạn cho rằng mình thuộc tuýp người nào hơn?",
    ansA: "A. Người thực tế",
    ansB: "B. Người khôn khéo",
  },
  {
    ques: "Câu 29: Bạn sẽ chú tâm hơn đến:",
    ansA: "A. Các nguyên tắc, nguyên lý cơ bản",
    ansB: "B. Các ngụ ý, hàm ý, ẩn ý",
  },
  {
    ques: "Câu 30: Đối với bạn, điều gì khó thực hiện hơn?",
    ansA: "A. Hiểu và chia sẻ với người khác",
    ansB: "B. Điều khiển người khác",
  },
  {
    ques: "Câu 31: Bạn sẽ bị ấn tượng hơn với",
    ansA: "A. Các nguyên tắc",
    ansB: "B. Những cảm xúc",
  },
  {
    ques: "Câu 32: Khi đánh giá hoặc phán xét người khác, bạn thường hay dựa vào điều gì?",
    ansA: "A. Luật lệ và nguyên tắc",
    ansB: "B. Hoàn cảnh",
  },
  {
    ques: "Câu 33: Điều gì lôi cuốn bạn hơn?",
    ansA: "A. Tính nhất quán của tư duy, suy nghĩ",
    ansB: "B. Sự hòa hợp trong các mối quan hệ của con người",
  },
  {
    ques: "Câu 34: Bạn thường là người có:",
    ansA: "A. Cái đầu lạnh",
    ansB: "B. Trái tim nóng",
  },
  {
    ques: "Câu 35: Khi đưa ra các quyết định, bạn sẽ thấy thoải mái hơn với:",
    ansA: "A. Các tiêu chuẩn",
    ansB: "B. Cảm xúc, cảm nhận",
  },
  {
    ques: "Câu 36: Bạn cảm thấy thoải mái hơn khi:",
    ansA: "A. Thảo luận một vân đề kĩ lưỡng, triệt để",
    ansB: "B. Đạt được thỏa thuận, sự nhất trí về vấn đề",
  },
  {
    ques: "Câu 37: Lời khen nào giá trị hơn?",
    ansA: "A. “Đó là một người có suy nghĩ rất logic”",
    ansB: "B. “Đó là một người rất tình cảm, tinh tế”",
  },
  {
    ques: "Câu 38: Theo bạn ai là người đáng được khen ngợi hơn?",
    ansA: "A. Một người giàu lý trí",
    ansB: "B. Một người giàu cảm xúc",
  },
  {
    ques: "Câu 39: Điều gì có vẻ sẽ là một lỗi lớn hơn?",
    ansA: "A. Quá nồng nhiệt, thiết tha",
    ansB: "B. Quá khách quan, thờ ơ",
  },
  {
    ques: "Câu 40: Bạn mong ước mình sẽ có thêm nhiều điều gì?",
    ansA: "A. Lí trí và khả năng nhận xét rõ ràng",
    ansB: "B. Tình thương, lòng trắc ẩn sâu sắc",
  },
  {
    ques: "Câu 41: Khi quyết định việc gì đó, bạn thường hay dựa vào:",
    ansA: "A. Sự thuyết phục",
    ansB: "B. Sự đồng cảm",
  },
  {
    ques: "Câu 42: Khi tiếp cận, tiếp xúc người khác, bạn nghiêng về hướng nào hơn?",
    ansA: "A. Tiếp cận theo hướng khách quan",
    ansB: "B. Tiếp cận theo hướng sử dụng trải nghiệm cá nhân",
  },
  {
    ques: "Câu 43: Bạn cảm thấy thoải mái hơn khi đưa ra:",
    ansA: "A. Những đánh giá, nhận xét một cách logic",
    ansB: "B. Những đánh giá, nhận xét một cách có ý nghĩa",
  },
  {
    ques: "Câu 44: Điều nào thì tồi tệ hơn?",
    ansA: "A. Không công bằng",
    ansB: "B. Tàn nhẫn",
  },
  {
    ques: "Câu 45: Bạn nghiêng về tính cách nào hơn ?",
    ansA: "A. Cứng rắn",
    ansB: "B. Nhẹ nhàng",
  },
  {
    ques: "Câu 46: Cái đầu hay trái tim chi phối bạn nhiều hơn",
    ansA: "A. Cái đầu",
    ansB: "B. Trái tim",
  },
  {
    ques: "Câu 47: Bạn thích mình có tố chất nào hơn?",
    ansA: "A. Kiên định, vững vàng",
    ansB: "B. Linh hoạt, nhanh nhạy",
  },
  {
    ques: "Câu 48: Điều gì bạn quan trọng hơn?",
    ansA: "A. Sự công bằng",
    ansB: "B. Sự ấm áp",
  },
  {
    ques: "Câu 49: Điều nào thú vị hơn?",
    ansA: "A. Hiểu biết",
    ansB: "B. Sự giao tiếp",
  },
  {
    ques: "Câu 50: Bạn muốn mình là người như thế nào?",
    ansA: "A. Thông minh, có kiến thức",
    ansB: "B. Tốt bụng, tinh tế",
  },
  {
    ques: "Câu 51: Đối với bạn, sự thật tồn tại:",
    ansA: "A. Không thay đổi dù bạn nghĩ gì",
    ansB: "B. Thay đổi theo cách bạn suy nghĩ",
  },
  {
    ques: "Câu 52: Bạn tin rằng sức mạnh thực sự nằm ở:",
    ansA: "A. Trí tuệ",
    ansB: "B. Tình cảm",
  },
  {
    ques: "Câu 53: Khi bạn muốn tìm hiểu về một vấn đề, bạn sẽ:",
    ansA: "A. Điều tra thông tin một cách logic, khách quan",
    ansB: "B. Tìm hiểu qua cảm xúc, trực giác",
  },
  {
    ques: "Câu 54: Bạn nghĩ rằng mình là người nào hơn?",
    ansA: "A. Thực tế",
    ansB: "B. Mơ mộng",
  },
  {
    ques: "Câu 55: Trong cuộc sống hàng ngày, bạn thích:",
    ansA: "A. Sự thẳng thắn",
    ansB: "B. Sự mềm mại",
  },
  {
    ques: "Câu 56: Bạn tin vào điều gì hơn?",
    ansA: "A. Sức mạnh của sự thực",
    ansB: "B. Sức mạnh của tưởng tượng",
  },
  {
    ques: "Câu 57: Trong một cuộc tranh luận, bạn thích:",
    ansA: "A. Sự lý trí",
    ansB: "B. Sự cảm xúc",
  },
  {
    ques: "Câu 58: Bạn nghiêng về cái nào hơn?",
    ansA: "A. Sự thực tế",
    ansB: "B. Sự lý tưởng",
  },
  {
    ques: "Câu 59: Khi tìm hiểu một vấn đề, bạn thích sử dụng:",
    ansA: "A. Sự logic",
    ansB: "B. Trực giác",
  },
  {
    ques: "Câu 60: Bạn cảm thấy thú vị hơn khi đánh giá:",
    ansA: "A. Sự logic",
    ansB: "B. Sự cảm nhận",
  },
  {
    ques: "Câu 61: Bạn là người nào hơn?",
    ansA: "A. Chủ động",
    ansB: "B. Nổi loạn",
  },
  {
    ques: "Câu 62: Bạn nghiêng về cái nào hơn?",
    ansA: "A. Sự cứng rắn",
    ansB: "B. Sự linh hoạt",
  },
  {
    ques: "Câu 63: Bạn tin rằng điều gì quan trọng hơn?",
    ansA: "A. Trí tuệ",
    ansB: "B. Tình cảm",
  },
  {
    ques: "Câu 64: Khi gặp một vấn đề, bạn thích:",
    ansA: "A. Tìm giải pháp theo cách thức quen thuộc",
    ansB: "B. Tìm giải pháp theo cách mới lạ",
  },
  {
    ques: "Câu 65: Trong một mối quan hệ, bạn nghiêng về cái nào hơn?",
    ansA: "A. Sự rõ ràng",
    ansB: "B. Sự không rõ ràng",
  },
  {
    ques: "Câu 66: Bạn đánh giá cao điều gì hơn?",
    ansA: "A. Sự trí tuệ",
    ansB: "B. Sự tử tế",
  },
  {
    ques: "Câu 67: Khi gặp một vấn đề, bạn cảm thấy thú vị hơn khi:",
    ansA: "A. Hiểu rõ nguyên nhân và hậu quả",
    ansB: "B. Phát hiện ra một sự kỳ lạ",
  },
  {
    ques: "Câu 68: Bạn nghiêng về cái nào hơn?",
    ansA: "A. Sự ổn định",
    ansB: "B. Sự mạo hiểm",
  },
  {
    ques: "Câu 69: Trong quan hệ xã hội, bạn đánh giá cao điều gì hơn?",
    ansA: "A. Sự trung thực",
    ansB: "B. Sự dịu dàng",
  },
  {
    ques: "Câu 70: Khi làm quen với một người mới, bạn cảm thấy thú vị hơn khi:",
    ansA: "A. Hiểu rõ hơn về cuộc sống của họ",
    ansB: "B. Phát hiện ra những điểm chung của bạn với họ",
  },
];
var aM = [];
var bM = [];
var cM = [];
var dM = [];
var buttonStatesM = [];
var tempArrayM = [];
var plusM = 1;
var indexJumpM = -2;
var abcM = [];
var alertInfo = document.querySelector(".alert");
alertInfo.classList.add("hide");
var closealertBtn = document.querySelector(".close-btn");
var body = document.querySelector("body");
var equalsElement = document.querySelector(".fa-equals");
var xElement = document.querySelector(".fa-x");
var firstNavbar = document.querySelector("nav");
var secondNavbar = document.getElementById("extend-navbar");
var titleElement = document.getElementById("name");
secondNavbar.classList.add("out");

closealertBtn.addEventListener("click", function () {
  alertInfo.classList.remove("show");
  alertInfo.classList.add("hide");
});

mbtiBtn.addEventListener("click", function () {
  mbti();
  createIntroductionM();
});

function mbti() {
  chosediv.style.left = "-50vw";
  tescontai.style.left = "0vw";
  setTimeout(function () {
    chosediv.style.display = "none";
  }, 1000);
}

function createIntroductionM() {
  var quesContent = document.createElement("h3");
  quesContent.innerText = `
  Hãy chọn câu trả lời mà bạn cho là phù hợp hơn với bản thân mình.

  Chỉ đọc câu trả lời và chọn, bạn không nên cố gắng phân tích quá nhiều các lựa chọn này vì làm như vậy sẽ khiến kết quả của bạn kém chính xác.
`;
  var divQues = document.createElement("div");
  divQues.classList.add("instruction");
  divQues.appendChild(quesContent);

  var btnCreate = document.createElement("button");
  btnCreate.innerText = "Bắt đầu nào!";
  btnCreate.id = "submitBtn";
  btnCreate.addEventListener("click", function () {
    createQuestionM();
    GetValueM();
    arightFirst();
    clickM += 1;
  });

  var btnCreateContainer = document.createElement("div");
  btnCreateContainer.classList.add("submitBtnContainer");
  btnCreateContainer.appendChild(btnCreate);

  var btnContainer = document.createElement("div");
  btnContainer.classList.add("move1");
  btnContainer.appendChild(btnCreateContainer);

  var screen = document.createElement("div");
  screen.classList.add("sceentest");

  var div = document.createElement("div");
  div.classList.add("testc");
  div.appendChild(divQues);
  div.appendChild(btnContainer);

  screen.appendChild(div);

  tescontai.appendChild(screen);

  clickM += 1;
}

var iM = 68;
var allowClickM = 1;
function createQuestionM() {
  if (iM === 1) {
    var screen = document.createElement("div");
    screen.classList.add("sceentest");

    var div = document.createElement("div");
    div.classList.add("testc");
    div.dataset.value = iM;

    var quesContent = document.createElement("h2");
    quesContent.innerText = MBTI[iM - 1].ques;

    var divQues = document.createElement("div");
    divQues.classList.add("ques");
    divQues.appendChild(quesContent);

    var evenBtn1 = document.createElement("button");
    evenBtn1.innerText = MBTI[iM - 1].ansA;
    evenBtn1.id = "demoM";
    evenBtn1.dataset.value = "1";
    var evenBtn2 = document.createElement("button");
    evenBtn2.innerText = MBTI[iM - 1].ansB;
    evenBtn2.id = "demoM";
    evenBtn2.dataset.value = "2";

    var divEvenBtnContainer = document.createElement("div");
    divEvenBtnContainer.classList.add("divideM");
    divEvenBtnContainer.appendChild(evenBtn1);
    divEvenBtnContainer.appendChild(evenBtn2);

    var divBtn = document.createElement("div");
    divBtn.classList.add("quesans2");
    divBtn.appendChild(divEvenBtnContainer);

    var nextBtnImg = document.createElement("img");
    nextBtnImg.src = "/img/arrow_imgs/right.png";

    var nextBtn = document.createElement("button");
    nextBtn.id = "fistest1";
    nextBtn.classList.add("arrowright");
    nextBtn.appendChild(nextBtnImg);
    nextBtn.addEventListener("click", function () {
      if (abcM.length >= allowClickM) {
        createQuestionM();
        GetValueM();
        arightM();
      } else {
        alertInfo.classList.add("show");
        alertInfo.classList.remove("hide");
        alertInfo.classList.add("showAlert");
        setTimeout(function () {
          alertInfo.classList.remove("show");
          alertInfo.classList.add("hide");
        }, 5000);
      }
    });

    div.appendChild(divQues);
    div.appendChild(divBtn);
    div.appendChild(nextBtn);
    screen.appendChild(div);

    tescontai.appendChild(screen);
  } else {
    if (iM < 70) {
      var screen = document.createElement("div");
      screen.classList.add("sceentest");

      var div = document.createElement("div");
      div.classList.add("testc");
      div.dataset.value = iM;

      var quesContent = document.createElement("h2");
      quesContent.innerText = MBTI[iM - 1].ques;

      var divQues = document.createElement("div");
      divQues.classList.add("ques");
      divQues.appendChild(quesContent);

      var evenBtn1 = document.createElement("button");
      evenBtn1.innerText = MBTI[iM - 1].ansA;
      evenBtn1.id = "demoM";
      evenBtn1.dataset.value = "1";
      var evenBtn2 = document.createElement("button");
      evenBtn2.innerText = MBTI[iM - 1].ansB;
      evenBtn2.id = "demoM";
      evenBtn2.dataset.value = "2";

      var divEvenBtnContainer = document.createElement("div");
      divEvenBtnContainer.classList.add("divideM");
      divEvenBtnContainer.appendChild(evenBtn1);
      divEvenBtnContainer.appendChild(evenBtn2);

      var divBtn = document.createElement("div");
      divBtn.classList.add("quesans2");
      divBtn.appendChild(divEvenBtnContainer);

      var nextBtnImg = document.createElement("img");
      nextBtnImg.src = "/img/arrow_imgs/right.png";

      var nextBtn = document.createElement("button");
      nextBtn.classList.add("arrowright");
      nextBtn.appendChild(nextBtnImg);
      nextBtn.addEventListener("click", function () {
        if (abcM.length >= allowClickM) {
          if (iM < 71) {
            createQuestionM();
            GetValueM();
            arightM();
          } else {
            GetValueM();
            arightM();
          }
        } else {
          alertInfo.classList.add("show");
          alertInfo.classList.remove("hide");
          alertInfo.classList.add("showAlert");
          setTimeout(function () {
            alertInfo.classList.remove("show");
            alertInfo.classList.add("hide");
          }, 5000);
        }
      });

      var backBtnImg = document.createElement("img");
      backBtnImg.src = "/img/arrow_imgs/left.png";

      var backBtn = document.createElement("button");
      backBtn.classList.add("arrowleft");
      backBtn.appendChild(backBtnImg);
      backBtn.addEventListener("click", function () {
        arleftM();
      });

      var btnContainer = document.createElement("div");
      btnContainer.classList.add("move1");
      btnContainer.appendChild(nextBtn);
      btnContainer.appendChild(backBtn);

      div.appendChild(divQues);
      div.appendChild(divBtn);
      div.appendChild(btnContainer);
      screen.appendChild(div);

      tescontai.appendChild(screen);
    } else if (iM === 70) {
      var screen = document.createElement("div");
      screen.classList.add("sceentest");

      var div = document.createElement("div");
      div.classList.add("testc");
      div.dataset.value = iM;

      var quesContent = document.createElement("h2");
      quesContent.innerText = MBTI[iM - 1].ques;

      var divQues = document.createElement("div");
      divQues.classList.add("ques");
      divQues.appendChild(quesContent);

      var evenBtn1 = document.createElement("button");
      evenBtn1.innerText = MBTI[iM - 1].ansA;
      evenBtn1.id = "demoM";
      evenBtn1.dataset.value = "1";
      var evenBtn2 = document.createElement("button");
      evenBtn2.innerText = MBTI[iM - 1].ansB;
      evenBtn2.id = "demoM";
      evenBtn2.dataset.value = "2";

      var divEvenBtnContainer = document.createElement("div");
      divEvenBtnContainer.classList.add("divideM");
      divEvenBtnContainer.appendChild(evenBtn1);
      divEvenBtnContainer.appendChild(evenBtn2);

      var divBtn = document.createElement("div");
      divBtn.classList.add("quesans2");
      divBtn.appendChild(divEvenBtnContainer);

      var submitBtn = document.createElement("button");
      submitBtn.innerText = "Submit";
      submitBtn.id = "submitBtn";
      submitBtn.addEventListener("click", function () {
        if (abcM.length >= allowClickM) {
          var totalAA = aM.filter(function (aM) {
            return aM.value === 1;
          });
          var totalAB = aM.filter(function (aM) {
            return aM.value === 2;
          });

          var totalBA = bM.filter(function (bM) {
            return bM.value === 1;
          });
          var totalBB = bM.filter(function (bM) {
            return bM.value === 2;
          });

          var totalCA = cM.filter(function (cM) {
            return cM.value === 1;
          });
          var totalCB = cM.filter(function (cM) {
            return cM.value === 2;
          });

          var totalDA = dM.filter(function (dM) {
            return dM.value === 1;
          });
          var totalDB = dM.filter(function (dM) {
            return dM.value === 2;
          });

          compareValueM(
            totalAA,
            totalAB,
            totalBA,
            totalBB,
            totalCA,
            totalCB,
            totalDA,
            totalDB
          );
        } else {
          alertInfo.classList.add("show");
          alertInfo.classList.remove("hide");
          alertInfo.classList.add("showAlert");
          setTimeout(function () {
            alertInfo.classList.remove("show");
            alertInfo.classList.add("hide");
          }, 5000);
        }
      });

      var submitBtnContainer = document.createElement("div");
      submitBtnContainer.classList.add("submitBtnContainer");
      submitBtnContainer.appendChild(submitBtn);

      var backBtnImg = document.createElement("img");
      backBtnImg.src = "/img/arrow_imgs/left.png";

      var backBtn = document.createElement("button");
      backBtn.classList.add("arrowleft");
      backBtn.appendChild(backBtnImg);
      backBtn.addEventListener("click", function () {
        arleftM();
      });

      var btnContainer = document.createElement("div");
      btnContainer.classList.add("move1");
      btnContainer.appendChild(submitBtnContainer);
      btnContainer.appendChild(backBtn);

      div.appendChild(divQues);
      div.appendChild(divBtn);
      div.appendChild(btnContainer);
      screen.appendChild(div);

      tescontai.appendChild(screen);

      var backBtnImg = document.createElement("img");
      backBtnImg.src = "/img/arrow_imgs/left.png";
    }
  }
  iM++;
}

function GetValueM() {
  var demoBtns = document.querySelectorAll("#demoM");
  demoBtns.forEach(function (demoBtn, index) {
    var demoBtnParent = demoBtns[index].closest(".testc");
    var demoBtnParentValue = demoBtnParent.dataset.value;
    var demoBtnValue = demoBtns[index].dataset.value;
    splitValueM(demoBtnParentValue, demoBtnValue);
  });
  plusM += 1;
  demoBtns.forEach(function (demoBtn, index) {
    demoBtn.addEventListener("click", function () {
      var demoBtnParent = demoBtns[index].closest(".testc");
      var demoBtnParentValue = demoBtnParent.dataset.value;
      var demoBtnValue = demoBtns[index].dataset.value;
      analysisValueM(demoBtnParentValue, demoBtnValue);
      updateColorM(demoBtnParentValue, demoBtnValue);
      if (abcM.length >= allowClickM) {
        if (autoNext === true) {
          if (webM < 70) {
            createQuestionM();
            arightM();
            GetValueM();
          } else {
          }
        } else {
        }
      } else {
      }
    });
  });
}

function analysisValueM(quesValue, scoreValue) {
  if (parseInt(quesValue) < 11) {
    if (aM.length === 0) {
      var temporaryObj = new Object();
      temporaryObj.index = parseInt(quesValue);
      temporaryObj.value = parseInt(scoreValue);
      addObjM(temporaryObj, quesValue);
    } else {
      var checkQues = aM.some(function (objQues) {
        return objQues.index === parseInt(quesValue);
      });

      if (checkQues === true) {
        var checkScore = aM.findIndex(function (objScore) {
          return objScore.index === parseInt(quesValue);
        });

        if (checkScore !== -1) {
          aM[checkScore].value = parseInt(scoreValue);
        } else {
        }
      } else {
        var addingObj = new Object();
        addingObj.index = parseInt(quesValue);
        addingObj.value = parseInt(scoreValue);
        addObjM(addingObj, quesValue);
      }
    }
  } else if (parseInt(quesValue) >= 11 && parseInt(quesValue) < 31) {
    if (bM.length === 0) {
      var temporaryObj = new Object();
      temporaryObj.index = parseInt(quesValue);
      temporaryObj.value = parseInt(scoreValue);
      addObjM(temporaryObj, quesValue);
    } else {
      var checkQues = bM.some(function (objQues) {
        return objQues.index === parseInt(quesValue);
      });

      if (checkQues === true) {
        var checkScore = bM.findIndex(function (objScore) {
          return objScore.index === parseInt(quesValue);
        });

        if (checkScore !== -1) {
          bM[checkScore].value = parseInt(scoreValue);
        } else {
        }
      } else {
        var addingObj = new Object();
        addingObj.index = parseInt(quesValue);
        addingObj.value = parseInt(scoreValue);
        addObjM(addingObj, quesValue);
      }
    }
  } else if (parseInt(quesValue) >= 31 && parseInt(quesValue) < 51) {
    if (cM.length === 0) {
      var temporaryObj = new Object();
      temporaryObj.index = parseInt(quesValue);
      temporaryObj.value = parseInt(scoreValue);
      addObjM(temporaryObj, quesValue);
    } else {
      var checkQues = cM.some(function (objQues) {
        return objQues.index === parseInt(quesValue);
      });

      if (checkQues === true) {
        var checkScore = cM.findIndex(function (objScore) {
          return objScore.index === parseInt(quesValue);
        });

        if (checkScore !== -1) {
          cM[checkScore].value = parseInt(scoreValue);
        } else {
        }
      } else {
        var addingObj = new Object();
        addingObj.index = parseInt(quesValue);
        addingObj.value = parseInt(scoreValue);
        addObjM(addingObj, quesValue);
      }
    }
  } else if (parseInt(quesValue) >= 51 && parseInt(quesValue) < 71) {
    if (dM.length === 0) {
      var temporaryObj = new Object();
      temporaryObj.index = parseInt(quesValue);
      temporaryObj.value = parseInt(scoreValue);
      addObjM(temporaryObj, quesValue);
    } else {
      var checkQues = dM.some(function (objQues) {
        return objQues.index === parseInt(quesValue);
      });

      if (checkQues === true) {
        var checkScore = dM.findIndex(function (objScore) {
          return objScore.index === parseInt(quesValue);
        });

        if (checkScore !== -1) {
          dM[checkScore].value = parseInt(scoreValue);
        } else {
        }
      } else {
        var addingObj = new Object();
        addingObj.index = parseInt(quesValue);
        addingObj.value = parseInt(scoreValue);
        addObjM(addingObj, quesValue);
      }
    }
  }
}

function addObjM(thing, number) {
  if (number < 11) {
    aM.push(thing);
  } else if (number >= 11 && number < 31) {
    bM.push(thing);
  } else if (number >= 31 && number < 51) {
    cM.push(thing);
  } else if (number >= 51 && number < 71) {
    dM.push(thing);
  }
}

function updateColorM(parentValue, childValue) {
  var findParent = buttonStatesM.findIndex(function (button) {
    return (
      button.index === parseInt(parentValue) &&
      button.value === parseInt(childValue)
    );
  });
  if (findParent !== -1) {
    RefindM(buttonStatesM[findParent].index, buttonStatesM[findParent].value);
  }
  changeColorM();
}

function RefindM(objIndex, objValue) {
  if (abcM.length === 0) {
    var who = new Object();
    who.index = objIndex;
    who.value = objValue;
    who.status = "black";
    abcM.push(who);
  } else {
    var checkParentValid = abcM.some(function (abcM) {
      return abcM.index === objIndex;
    });
    if (checkParentValid === true) {
      var findParentValid = abcM.findIndex(function (abcM) {
        return abcM.index === objIndex;
      });
      if (findParentValid !== -1) {
        if (abcM[findParentValid].value === objValue) {
        } else {
          abcM[findParentValid].value = objValue;
          abcM[findParentValid].status = "black";
        }
      }
    } else {
      var who = new Object();
      who.index = objIndex;
      who.value = objValue;
      who.status = "black";
      abcM.push(who);
    }
  }
}

function splitValueM(indexParent, valueChild) {
  var tempObj = new Object();
  tempObj.index = parseInt(indexParent);
  tempObj.value = parseInt(valueChild);
  tempObj.status = "none";
  tempArrayM.push(tempObj);
  pushToArrayM(indexJumpM);
}

function pushToArrayM(index) {
  buttonStatesM = tempArrayM.slice(index * plusM);
}

function changeColorM() {
  var demoBtns = document.querySelectorAll("#demoM");
  demoBtns.forEach(function (obj, index) {
    var demoBtnParent = demoBtns[index].closest(".testc");
    var demoBtnParentValue = demoBtnParent.dataset.value;
    var demoBtnValue = demoBtns[index].dataset.value;
    var checkParentValid = abcM.some(function (obj) {
      return obj.index === parseInt(demoBtnParentValue);
    });
    if (checkParentValid === true) {
      var findParentValid = abcM.findIndex(function (obj) {
        return obj.index === parseInt(demoBtnParentValue);
      });
      if (findParentValid !== -1) {
        if (abcM[findParentValid].value === parseInt(demoBtnValue)) {
          demoBtns[index].classList.add("changecolor");
        } else {
          demoBtns[index].classList.remove("changecolor");
        }
      }
    }
  });
}

function compareValueM(AA, AB, BA, BB, CA, CB, DA, DB) {
  var note = "";

  if (AA.length < AB.length) {
    note = "I";
  } else if (AA.length > AB.length) {
    note = "E";
  } else if (AA.length === 0 && AB.length === 0) {
    note = "";
  }

  if (BA.length < BB.length) {
    note += "N";
  } else if (BA.length > BB.length) {
    note += "S";
  } else if (BA.length === 0 && BB.length === 0) {
    note += "";
  }

  if (CA.length < CB.length) {
    note += "F";
  } else if (CA.length > CB.length) {
    note += "T";
  } else if (CA.length === 0 && CB.length === 0) {
    note += "";
  }

  if (DA.length < DB.length) {
    note += "P";
  } else if (DA.length > DB.length) {
    note += "J";
  } else if (DA.length === 0 && DB.length) {
    note += "";
  }

  aright();
  createFinalPageM(note);
}

function createFinalPageM(result) {
  var screen = document.createElement("div");
  screen.classList.add("sceentest");

  var div = document.createElement("div");
  div.classList.add("testc");

  var quesContent = document.createElement("h1");
  quesContent.innerText = `Bạn là người có tính cách thuộc nhóm ${result}`;

  var divQues = document.createElement("div");
  divQues.classList.add("ques");
  divQues.appendChild(quesContent);
  div.appendChild(divQues);
  screen.appendChild(div);
  tescontai.appendChild(screen);
}

body.addEventListener("keyup", function (e) {
  if (clickM === 2) {
    CountM(e);
  } else {
  }
});

function arightM() {
  s = s - 100;
  x = s + "vw";
  tescontai.style.left = x;
  webM++;
  allowClickM++;
}

function arleftM() {
  s = s + 100;
  x = s + "vw";
  tescontai.style.left = x;
  webM--;
  allowClickM--;
}

var webM = 1;
function CountM(e) {
  if (e.keyCode === 39) {
    if (webM < 70) {
      if (abcM.length >= allowClickM) {
        createQuestionM();
        GetValueM();
        arightM();
      } else {
        alertInfo.classList.add("show");
        alertInfo.classList.remove("hide");
        alertInfo.classList.add("showAlert");
        setTimeout(function () {
          alertInfo.classList.remove("show");
          alertInfo.classList.add("hide");
        }, 5000);
      }
    } else {
    }
  } else if (e.keyCode === 37) {
    if (clickM === 2 && webM === 1) {
    } else {
      arleftM();
    }
  }
}

function startIntro() {
  const intro = introJs();
  intro.setOptions({
    steps: [
      {
        element: ".introduction",
        intro:
          "Đây là nơi để bạn lựa chọn xem bạn sẽ làm bài test nào. Trong tương lai sẽ có nhiều thêm bài test và sự pha trộn giữa các bài test để từ đó đạt được kết quả chính xác nhất có thể.",
      },
      {
        element: ".step-one",
        intro:
          "Đây là bài test trắc nghiệm hướng nghiệp Holland bao gồm 54 câu hỏi trắc nghiệm tất cả. Theo bài test này thì sẽ được chia thành 6 nhóm nghề và tương ứng mỗi nhóm nghề sẽ là một số ngành cụ thể thuộc vào nhóm nghề đó.",
      },
      {
        element: ".step-two",
        intro:
          "Đây là bài test trắc nghiệm tính cách MBTI bao gồm 70 câu hỏi trắc nghiệm tất cả. Theo bài test này thì sẽ được chia thành 16 nhóm tính cách và ứng với mỗi nhóm tính cách sẽ là một số thông tin cụ thể hơn về nhóm nghề này",
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
