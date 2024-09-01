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
var iM = 1;
var webM = 1;

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
  var quesContent = document.createElement("h4");
  quesContent.innerText = `MBTI là công cụ đánh giá tính cách của Myers-Briggs, dựa trên bốn cặp đối lập:

- Hướng ngoại - Hướng nội (E-I)
- Giác quan - Trực giác (S-N)
- Lý trí - Cảm xúc (T-F)
- Nguyên tắc - Linh hoạt (J-P)

Bằng cách kết hợp bốn cặp này, MBTI tạo ra 16 nhóm tính cách khác nhau với những ưu và nhược điểm riêng biệt. MBTI test sẽ giúp bạn hiểu sâu hơn về bản thân, từ đó lựa chọn được nghề nghiệp phù hợp và nâng cao hiệu suất làm việc.

  #Bài trắc nghiệm này có 70 câu tất cả. Hãy chọn câu trả lời mà bạn cho là phù hợp hơn với bản thân mình. Chỉ đọc câu trả lời và chọn, bạn không nên cố gắng phân tích quá nhiều các lựa chọn này vì làm như vậy sẽ khiến kết quả của bạn kém chính xác.
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
    nextBtnImg.src = rightimg;

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
      nextBtnImg.src = rightimg;

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
      backBtnImg.src = leftimg;

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
      backBtnImg.src = leftimg;

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
      backBtnImg.src = leftimg;
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
  var Anote = "";
  var Bnote = "";
  var Cnote = "";
  var Dnote = "";
  var noteA = "";
  var noteB = "";
  var noteC = "";
  var noteD = "";
  if (AA.length < AB.length) {
    note = "I";
    noteA = "I";
    Anote = Math.round((AB.length / (AB.length + AA.length)) * 100) + "%";
  } else if (AA.length > AB.length) {
    note = "E";
    noteA = "E";
    Anote = Math.round((AA.length / (AB.length + AA.length)) * 100) + "%";
  } else if (AA.length === 0 && AB.length === 0) {
    note = "";
  }

  if (BA.length < BB.length) {
    note += "N";
    noteB = "N";
    Bnote = Math.round((BB.length / (BA.length + BB.length)) * 100) + "%";
  } else if (BA.length > BB.length) {
    note += "S";
    noteB = "S";
    Bnote = Math.round((BA.length / (BA.length + BB.length)) * 100) + "%";
  } else if (BA.length === 0 && BB.length === 0) {
    note += "";
  }

  if (CA.length < CB.length) {
    note += "F";
    noteC = "F";
    Cnote = Math.round((CB.length / (CA.length + CB.length)) * 100) + "%";
  } else if (CA.length > CB.length) {
    note += "T";
    noteC = "T";
    Cnote = Math.round((CA.length / (CA.length + CB.length)) * 100) + "%";
  } else if (CA.length === 0 && CB.length === 0) {
    note += "";
  }

  if (DA.length < DB.length) {
    note += "P";
    noteD = "P";
    Dnote = Math.round((DB.length / (DA.length + DB.length)) * 100) + "%";
  } else if (DA.length > DB.length) {
    note += "J";
    noteD = "J";
    Dnote = Math.round((DA.length / (DA.length + DB.length)) * 100) + "%";
  } else if (DA.length === 0 && DB.length) {
    note += "";
  }

  aright();
  var type = "Mbti";
  sendResultToServerMbti({
    note,
    type,
    Anote,
    Bnote,
    Cnote,
    Dnote,
    noteA,
    noteB,
    noteC,
    noteD,
  });
  createFinalPageM(
    note,
    Anote,
    Bnote,
    Cnote,
    Dnote,
    noteA,
    noteB,
    noteC,
    noteD
  );
}

function sendResultToServerMbti(result) {
  fetch("/result/mbti", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
let currentSlide = 0;
function createFinalPageM(result, A, B, C, D, noteA, noteB, noteC, noteD) {
  var contentcomment = document.createElement("h3");
  switch (result) {
    case "ISTJ": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ISTJ!
      
      Với tính cách ISTJ, họ là những người chủ động tìm kiếm các công việc có kỹ năng thực tiễn và sự ổn định. Công việc đòi hỏi chịu trách nhiệm và sự cẩn thận là những yếu tố hoàn hảo cho họ.
      
Sự ổn định và những quy tắc rõ ràng.

Những người ISTJ rất quan trọng sự ổn định và khả năng dự liệu của mình. Trong công việc, họ thích ở những nơi làm việc được tổ chức tốt, ổn định với những kỳ vọng rõ ràng.

ISTJ cảm thấy hứng thú với môi trường có các quy tắc và luật lệ được xác định rõ ràng. Nghề nghiệp cho những người có chung kiểu tính cách này có thể là các ngành liên quan đến kế toán.

Làm việc độc lập

ISTJ thích làm việc của riêng họ. Tuy nhiên, vì tính cách có trách nhiệm, họ sẽ thấy được những lợi ích khi làm việc như một phần của tập thể. Các công việc trong lĩnh vực thống kê hoặc nghiên cứu sẽ cho phép các ISTJ làm việc một mình trong khi vẫn báo cáo lại cho các nhóm có cùng chí hướng.

Sự chính xác và trách nhiệm.

ISTJ coi trọng độ chính xác và dữ liệu sạch sẽ, đồng thời có trách nhiệm và bảo vệ. ISTJ bị ám ảnh bởi các chi tiết và làm mọi thứ một cách hoàn hảo. Họ thường rất năng suất, có tổ chức và trật tự. Các ISTJ đáng tin cậy và vâng lời vì họ thực hiện công việc ở cấp độ cao và tuân thủ các quy tắc. Họ phát triển một kế hoạch, tuân thủ nó và chọn sức khỏe trên mức hài lòng ngay lập tức. Đương nhiên, họ coi trọng khả năng dự đoán, sự ổn định.

Các ngành phù hợp

Dựa trên tính cách ISTJ, dưới đây là một số ngành nghề và sự nghiệp phù hợp cho người có tính cách này:

Kế toán: ISTJ có tính cẩn thận, tỉ mỉ, tuân thủ quy tắc, điều này phù hợp với công việc kế toán và xử lý thông tin tài chính.

Quản lý dự án: Khả năng tổ chức, lập kế hoạch và kiểm soát của ISTJ là lợi thế trong vai trò quản lý dự án.

Quản lý nguồn nhân lực: Tính trung thực, trách nhiệm và sự cẩn thận của ISTJ làm cho họ trở thành người quản lý nhân sự hiệu quả.

Y tá hoặc kỹ thuật viên y tế: ISTJ có khả năng làm việc chính xác và tuân thủ quy trình y tế, điều này phù hợp với vai trò y tá hoặc kỹ thuật viên y tế.

Kỹ sư: ISTJ có kỹ năng tư duy logic và phân tích, điều này phù hợp với lĩnh vực kỹ thuật và công nghệ.

Luật sư: ISTJ có tính cẩn thận và khả năng tư duy phân tích, điều này phù hợp với lĩnh vực luật pháp.

Kiểm toán viên: Tính trung thực, tỉ mỉ và khả năng phân tích của ISTJ làm cho họ phù hợp với vai trò kiểm toán viên.

Danh sách này chỉ đưa ra một số ví dụ và không đại diện cho tất cả các ngành nghề phù hợp. Quan trọng nhất là tìm hiểu sở thích, kỹ năng và giá trị cá nhân của bản thân để lựa chọn một sự nghiệp phù hợp nhất.`;
      break;
    }
    case "ISFJ": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ISFJ!
      
      Sự quan tâm và chăm sóc người khác:
Ngành Y tế: ISFJ thường có sự quan tâm và sẵn lòng chăm sóc người khác, vì vậy các lĩnh vực như y tá, điều dưỡng, hoặc làm việc trong các cơ sở y tế có thể thích hợp.

Ngành giáo dục: ISFJ có tính tương tác tốt và sẵn lòng hỗ trợ, vì vậy việc trở thành giáo viên, cố vấn học tập, hoặc làm việc trong ngành giáo dục.

Công việc tổ chức và chi tiết:
Lĩnh vực Quản lý sự kiện: ISFJ có khả năng tổ chức tốt và chú trọng vào chi tiết, do đó công việc tổ chức sự kiện, hội thảo, hay quản lý dự án.

Ngành Quản lý nhân sự: ISFJ điều có sự tậm tâm và sắp xếp công việc một cách cẩn thận, điều này có thể phù hợp với việc làm trong lĩnh vực quản lý nhân sự.

Sự trung thành và tuân thủ quy tắc
Ngành Luật: ISFJ thường có tính trung thành cao và sẵn lòng tuân thủ quy tắc, vì vậy việc làm trong lĩnh vực luật pháp hoặc pháp lý.

Ngành Tài chính: Khả năng quản lý tài chính và tuân thủ quy tắc, do đó họ có thể đáp ứng các công việc liên quan đến kế toán, ngân hàng, hoặc tư vấn tài chính.

Sự nhạy cảm và sự ủng hộ
Ngành Truyền thông và Truyền thông xã hội: ISFJ có khả năng lắng nghe và đồng cảm với người khác, có thể thích hợp làm việc trong lĩnh vực truyền thông, PR, hoặc quảng cáo.

Lĩnh vực Tâm lý học: ISFJ thường có khả năng lắng nghe và ủng hộ người khác, việc trở thành tư vấn viên hoặc làm việc trong lĩnh vực
 
Công việc phù hợp

Với đặc điểm và ưu điểm của mình, ISFJ thường thích hợp với những công việc sau:

Y tá, điều dưỡng: ISFJ có khả năng chăm sóc người khác và quan tâm tới sức khỏe và sự trị liệu. Công việc y tá, điều dưỡng đảm bảo cho họ thực hiện vai trò chăm sóc và hỗ trợ cho các bệnh nhân.

Giáo viên: ISFJ có sự tương tác tốt và sẵn lòng hỗ trợ. Việc làm giáo viên cho phép họ chia sẻ kiến thức và hướng dẫn học sinh, đồng thời tạo ra một môi trường học tập thuận lợi.

Luật sư: ISFJ thường trung thành và tuân thủ quy tắc. Việc làm luật sư áp dụng kiến thức pháp lý và giúp đỡ người khác trong việc giải quyết các vấn đề pháp lý là môi trường khá phù hợp với họ.

Quản lý sự kiện: ISFJ có khả năng tổ chức tốt và chú trọng vào chi tiết. Công việc quản lý sự kiện yêu cầu kỹ năng lập kế hoạch, tổ chức và điều phối các hoạt động sự kiện.

Ngân hàng và tài chính: ISFJ với tính quản lý rủi ro và tinh thần trách nhiệm lên hàng đầu và luôn sẵn lòng đáp ứng các yêu cầu, quy định. Việc quản lý tài sản, xử lý giao dịch, đảm bảo tuân thủ quy tắc và luật pháp là rất quan trọng. 

Tư vấn sức khỏe tâm thần: ISFJ thường lắng nghe và đồng cảm với người khác. Việc làm tư vấn viên sức khỏe tâm thần thích hợp cho họ hỗ trợ, cung cấp lời khuyên cho những người đang trải qua khó khăn tâm lý.

Quản lý nhân sự: Sự chăm chỉ và sắp xếp công việc một cách cẩn thận. Công việc quản lý nhân sự cho phép họ quản lý và phát triển nguồn nhân lực trong tổ chức.

Nhân viên hành chính: ISFJ có khả năng làm việc tỉ mỉ, xử lý công việc văn phòng. Công việc nhân viên hành chính đòi hỏi sự tổ chức, sắp xếp và hiệu quả trong việc quản lý các công việc văn phòng hàng ngày.

Tổ chức phi lợi nhuận: ISFJ thường có ý thức xã hội cao mong muốn đóng góp cho cộng đồng. Làm việc trong các tổ chức phi lợi nhuận phù hợp cho ISFJ thực hiện sứ mệnh xã hội và hỗ trợ những người khó khăn.

Chuyên viên tư vấn: ISFJ có xu hướng tư vấn và hỗ trợ người khác trong các vấn đề cá nhân và tâm lý. Công việc tư vấn có thể bao gồm tư vấn học tập, tư vấn sức khỏe hoặc tư vấn sự nghiệp.

Lưu ý rằng danh sách này chỉ là một số ví dụ và không phải là hạn chế. Mỗi người ISFJ có thể có sự kết hợp độc đáo của các đặc điểm và sở thích riêng, do đó có thể tìm thấy công việc phù hợp với cá nhân của mình.
`;
      break;
    }
    case "INFJ": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm INFJ!
      
      INFJ thích tạo mối quan hệ mới và khám phá môi trường làm việc của người khác. Mặc dù ưa thích làm việc độc lập, họ cũng đánh giá cao việc xây dựng các kết nối với mọi người theo thời gian và có thể phát triển mạnh mẽ trong công ty với những cá nhân cũng đang cố gắng hình thành mối quan hệ với những người xung quanh.

Tính nhất quán và khả năng dự đoán là hai yếu tố quan trọng không thể bỏ qua đối với INFJ. Họ cần sự nhất quán để cảm thấy an tâm và thoải mái trong công việc. Bởi tâm lý phán xét, họ đưa ra quyết định dựa trên những suy nghĩ của riêng mình và họ lọc thông tin dựa vào cách họ nhìn nhận thế giới xung quanh. Đồng thời, với khả năng suy nghĩ thấu đáo, họ thường nhìn thấu tâm can của một vấn đề.

INFJ thường đóng vai trò hỗ trợ trong các nhóm, không ưa thích trở thành trung tâm chú ý. Họ rất nhạy cảm với cảm xúc của người khác, điều này giúp họ hiểu rõ những kỹ năng nằm ở đâu và tạo điều kiện thúc đẩy sự tham gia của tất cả mọi người. Điều này khiến họ trở thành những nhà lãnh đạo hấp dẫn. Tính cách đặc biệt của họ thiên về cách tiếp cận quản lý mang tính tương tác hơn là độc đoán. Họ thu hút sự tôn trọng vì lòng tận tâm, đạo đức làm việc và nguyên tắc của mình, đồng thời khuyến khích phát triển tài năng cho người khác.

Những công việc phù hợp nhất với INFJ cung cấp cảm giác có mục tiêu và cho phép họ đóng góp cho cuộc sống con người hoặc bảo vệ môi trường. Họ cũng thể hiện năng khiếu trong lĩnh vực sáng tạo, nơi họ có thể sử dụng trực giác và sáng tạo để tạo ra những giải pháp độc đáo và ý tưởng mới.

Công việc phù hợp

Dưới đây là mô tả về công việc phù hợp với tính cách INFJ:

Tư vấn và trị liệu: INFJ có khả năng lắng nghe sâu sắc và đồng cảm, điều này có thể phù hợp với các ngành tư vấn tâm lý, tư vấn sự nghiệp, tư vấn hôn nhân gia đình, trị liệu hướng nội. INFJ có khả năng giúp đỡ tạo môi trường an toàn cho người khác để khám phá và phát triển bản thân.


Giáo dục: INFJ có sư nhạy bén trong truyền đạt thông điệp và tạo môi trường học tập lành mạnh. Các ngành giáo dục, giảng dạy, huấn luyện, hoặc làm việc trong các tổ chức phi lợi nhuận liên quan đến giáo dục có thể phù hợp với INFJ. 

Sáng tạo và nghệ thuật: INFJ thường có cái nhìn sâu sắc và tầm nhìn nghệ thuật. Các ngành nghề sáng tạo như viết lách, thiết kế đồ họa, nhiếp ảnh, âm nhạc, diễn xuất hoặc làm việc trong các lĩnh vực nghệ thuật có thể phù hợp với INFJ. INFJ có khả năng thể hiện cảm xúc và ý nghĩa sâu sắc thông qua nghệ thuật.

Quan hệ công chúng và truyền thông: INFJ có khả năng tạo mối quan hệ mạnh mẽ và sử dụng ngôn từ một cách ảnh hưởng. Các ngành quan hệ công chúng, truyền thông, truyền thông xã hội, hoặc làm việc trong các tổ chức phi lợi nhuận có thể phù hợp với INFJ. INFJ có khả năng xây dựng và quản lý hệ thống giao tiếp hiệu quả để tạo ảnh hưởng và tạo sự thay đổi tích cực.

Y tế và chăm sóc: INFJ thường có sự quan tâm và chăm sóc đối với người khác. Các ngành y tế, chăm sóc sức khỏe, tâm lý học, công việc xã hội, hoặc làm việc trong các tổ chức phi lợi nhuận liên quan đến sức khỏe và chăm sóc có thể phù hợp với INFJ. INFJ có khả năng lắng nghe hiểu về nhu cầu của người khác, có thể tạo môi trường hỗ trợ.
`;
      break;
    }
    case "INTJ": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm INTJ!
      
      INTJ thường chọn lựa nghề nghiệp trong những lĩnh vực mà họ hiểu rõ. Một ngành công việc phổ biến cho họ thường liên quan đến khoa học hoặc công nghệ, nhưng thực tế họ có thể thể hiện mình ở nhiều ngành khác, đặc biệt là những nơi yêu cầu trí tuệ, tư duy sáng tạo và sự thông minh (như luật, điều tra, hoặc các ngành chuyên ngành). Các INTJ thường ít quan tâm đến vị trí quản lý, họ chỉ đảm nhận vai trò này nếu cần để tăng sức mạnh và tự do hành động, không phải vì họ yêu thích quản lý con người.

INTJ được biết đến với khả năng tiếp thu những lý thuyết phức tạp và biến chúng thành các ý tưởng và hành động cụ thể. Họ là những chiến lược gia xuất sắc, có khả năng xây dựng kế hoạch và triển khai những thách thức dài hạn mà không gặp nhiều khó khăn. Các kỹ năng này đặc biệt hữu ích trong sự nghiệp, đặc biệt là trong lĩnh vực lập kế hoạch, chiến lược và áp dụng các nguyên tắc lý thuyết.

INTJ cũng tập trung mạnh mẽ vào sự độc lập trong tư duy. Họ thích đối mặt với các thách thức phức tạp và không thích công việc hàng ngày, vì vậy họ thường tìm cách tránh hoặc biến đổi chúng. Họ thường tỏ ra độc lập như con sói và thành công trong sự nghiệp thường xuyên xoay quanh đặc điểm này, cho phép họ duy trì không gian sáng tạo và tâm hồn cống hiến mà không bị làm phiền bởi những yếu tố ngẫu nhiên.

Những người có kiểu tính INTJ đặt hiệu suất làm việc và năng lượng lên hàng đầu. Họ thích làm việc trong những nghề nghiệp đòi hỏi tư duy sáng tạo và quyết đoán. Họ luôn khuyến khích mọi người cố gắng hết mình để hoàn thành nhiệm vụ với chất lượng tốt nhất và họ không đánh giá cao những người tận dụng mối quan hệ để thăng tiến trong công việc. INTJ coi trọng sự cống hiến và hiệu suất cá nhân hơn là kỹ năng giao tiếp xã hội và quan hệ cá nhân.

INTJ luôn đề cao hiệu suất công việc và năng lực. Điều này dẫn đến việc họ thường thích những công việc đòi hỏi sự sáng tạo và quyết đoán. Họ luôn tin rằng mọi người nên cố gắng hết mình để hoàn thành nhiệm vụ với chất lượng tốt nhất có thể và họ không đánh giá cao những người tận dụng mối quan hệ để thăng tiến trong công việc. Họ coi trọng sự cống hiến và hiệu suất cá nhân hơn là kỹ năng giao tiếp xã hội và quan hệ cá nhân.

Tóm lại, INTJ thường tỏ ra xuất sắc trong việc tạo ra và thực hiện các giải pháp sáng tạo cho các vấn đề phức tạp. Họ thường làm việc độc lập hoặc trong nhóm nhỏ, áp dụng chiến lược và sự phân tích để tạo ra sự khác biệt. Môi trường làm việc lý tưởng cho INTJ cần phải có tính logic, hiệu quả, có cấu trúc và sự khả năng phân tích, cùng với đồng nghiệp có trình độ và thông minh.
 
Công việc phù hợp

Tính cách INTJ có những đặc điểm và sự nghiệp của họ thường phù hợp với các vị trí và lĩnh vực có yêu cầu về sự tư duy chiến lược, logic và sự đồng thuận. Dưới đây là một số định hướng về sự nghiệp phổ biến cho người INTJ:

Nhà lãnh đạo/Quản lý: INTJ thường có tư duy chiến lược và khả năng lãnh đạo tự nhiên. Với khả năng tư duy logic và quản lý thông tin, họ có thể thích hợp với vai trò lãnh đạo trong các tổ chức và doanh nghiệp.

Kỹ sư/Khoa học gia: Người INTJ thường có khả năng phân tích và tiếp cận các vấn đề phức tạp. Với sự hướng nội và trực giác của mình, họ có thể làm việc trong lĩnh vực kỹ thuật, nghiên cứu khoa học hoặc phát triển công nghệ.

Kiến trúc sư/Thiết kế: Sự sáng tạo và tư duy chi tiết của INTJ có thể phù hợp với lĩnh vực thiết kế và kiến trúc. Họ có khả năng đưa ra ý tưởng độc đáo và đáp ứng yêu cầu kỹ thuật và thẩm mỹ.

Luật sư/Nhà tư vấn: INTJ có khả năng suy luận logic và phân tích chi tiết, điều này có thể làm cho họ trở thành những luật sư hoặc nhà tư vấn hiệu quả. Họ có khả năng xử lý thông tin phức tạp và áp dụng quy định pháp lý vào thực tế.

Quản lý dự án: Với tính cách tổ chức và định hướng vào mục tiêu, INTJ có thể là những quản lý dự án xuất sắc. Họ có khả năng lập kế hoạch, quản lý tài nguyên và đưa ra quyết định một cách logic và hiệu quả.

Chuyên gia tư vấn/Phân tích: INTJ có khả năng nắm bắt các khía cạnh phức tạp của vấn đề và tư duy logic để phân tích.
`;
      break;
    }
    case "ISTP": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ISTP!
       
Điểm nổi bật đầu tiên của ISTP là tính tò mò và khao khát khám phá chi tiết thực tế và kiến thức. Họ thích tìm hiểu cách mọi thứ hoạt động và áp dụng chúng để giải quyết các vấn đề phức tạp. Hướng tiếp cận rõ ràng, cụ thể là đặc trưng của họ và công việc nên tập trung vào điều này.

Sự tự do là yếu tố cần thiết đối với ISTP trong môi trường làm việc. Họ cần đa dạng và không gian để thể hiện bản thân. ISTP giỏi xử lý khủng hoảng và không ngần ngại đối mặt với rủi ro. Họ thường trở nên thành công trong các ngành yêu cầu sự dũng cảm như phi công, lính cứu hỏa hay thám tử.

ISTP đặt giá trị vào kết quả dưới sự tự tin và trung thành. Sự suy nghĩ ngắn hạn là điểm mạnh của họ, và họ thích thấy kết quả ngay lập tức. ISTP hướng đến sự độc lập và tránh những cam kết cố định. Mặc dù có những đặc điểm không thường thấy, họ có thể tận dụng chúng trong các ngành nghề như cảnh sát, nhà phân tích hệ thống, vận động viên hoặc doanh nhân.

ISTP cũng tốt trong môi trường kỹ thuật chuyên nghiệp, đam mê kiểm soát công cụ và thiết bị cơ khí hoặc công nghệ. Họ đặc biệt coi trọng hiệu suất, logic và sự linh hoạt trong công việc.
 
Công việc phù hợp

Đây là một số lựa chọn công việc phù hợp với tính cách ISTP:

Kỹ sư hoặc kỹ thuật viên: Với kỹ năng kỹ thuật và khả năng giải quyết vấn đề, ISTP có thể thành công trong các vai trò kỹ sư hoặc kỹ thuật viên. Công việc này bao gồm thiết kế, xây dựng, bảo trì và sửa chữa các hệ thống, máy móc hoặc cơ cấu kỹ thuật.

Công nhân kỹ thuật: ISTP có thể trở thành các công nhân kỹ thuật chuyên về xây dựng, điện, cơ khí hoặc tự động hóa. Công việc này liên quan đến việc thực hiện và sửa chữa các công việc vật lý, sử dụng công cụ và thiết bị kỹ thuật.

Kỹ thuật viên sửa chữa: ISTP có khả năng phân tích và sửa chữa vấn đề. Với kiến thức kỹ thuật và khả năng làm việc với công cụ, ISTP có thể trở thành kỹ thuật viên sửa chữa trong lĩnh vực như ô tô, máy móc, thiết bị điện tử hoặc thiết bị y tế.

Lập trình viên: Với tính tò mò và khả năng tư duy logic, ISTP có thể phù hợp với công việc lập trình. Họ có thể tham gia vào việc phát triển phần mềm hoặc phần cứng, sửa lỗi và tối ưu hóa hệ thống.

Chuyên gia kỹ thuật hoặc tư vấn: ISTP có thể sử dụng kiến thức và kỹ năng kỹ thuật của mình để trở thành chuyên gia hoặc tư vấn trong lĩnh vực cụ thể như công nghệ thông tin, xây dựng hoặc thiết kế sản phẩm.

Thợ mộc hoặc thợ làm mẫu: ISTP có khả năng thực hiện công việc thủ công chi tiết và tạo ra các sản phẩm vật lý. Công việc như thợ mộc, thợ làm mẫu hoặc nghệ sĩ chế tạo có thể phù hợp với sự sáng tạo và kỹ năng thực hành của ISTP.`;
      break;
    }
    case "ISFP": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ISFP!
      
      ISFP là những cá nhân đặc biệt, hướng tới một sự nghiệp thay vì chỉ đơn thuần một công việc. Họ khát khao xây dựng một con đường sự nghiệp để thể hiện những giá trị cốt lõi bên trong, chứ không chỉ làm việc với mục tiêu nhàn hạ. Tích hợp với tình yêu đối với hiện tại và khả năng thưởng thức cuộc sống, ISFP không phù hợp với môi trường làm việc quá sôi động. Họ đòi hỏi không gian cá nhân và tự do để khám phá khả năng nhận thức tinh tế của mình. Bằng việc được tự do tận dụng tài năng thiên phú, họ sẽ khám phá và phát triển bản chất nghệ sĩ xuất sắc bên trong. Thực tế cho thấy hầu hết các nghệ sĩ nổi tiếng trên thế giới thuộc nhóm ISFP.

Tập trung sâu sắc vào cảm xúc và phản ứng của người khác, cùng với khả năng cung cấp sự giúp đỡ, ISFP tự nhiên trở thành những nhà tư vấn và giáo viên. Họ tận dụng bản năng này một cách tự nhiên.

ISFP ưa thích môi trường làm việc hợp tác và tôn trọng, nơi họ có thể thực hiện công việc một cách nhẹ nhàng và nhận được sự hỗ trợ khi cần. Mặc dù thường làm việc độc lập, ISFP mong muốn các đồng nghiệp của họ linh hoạt, sẵn sàng hỗ trợ và trung thành.

Công việc phù hợp

ISFP cần không gian cá nhân và tự do để sử dụng khả năng nhạy bén của mình. Nếu được tự do khám phá và phát triển sở trường tự nhiên, họ sẽ khám phá bản chất nghệ sĩ xuất sắc trong tâm hồn mình. Thực tế cho thấy, nhiều nghệ sĩ nổi tiếng trên thế giới thuộc vào nhóm ISFP.

Nghệ sĩ: ISFP có tài năng sáng tạo và khả năng thể hiện bản thân thông qua nghệ thuật. Công việc như họa sĩ, nhạc sĩ, diễn viên, nhà thiết kế, người mẫu hay nhiếp ảnh gia có thể phù hợp với ISFP.

Nhân viên y tế: ISFP có lòng quan tâm và sẵn lòng chăm sóc người khác. Công việc như điều dưỡng, kỹ thuật viên y tế, nhân viên chăm sóc tại bệnh viện hoặc trung tâm y tế cộng đồng có thể phù hợp với ISFP.

Ngành thẩm mỹ và làm đẹp: ISFP có khả năng thẩm mỹ và sự nhạy cảm với cái đẹp. Công việc như thợ làm tóc, thợ làm móng, chuyên viên trang điểm hoặc nhân viên spa có thể phù hợp với ISFP.

Du lịch và dịch vụ khách hàng: ISFP thường thích khám phá và trải nghiệm. Công việc hướng dẫn du lịch, tổ chức sự kiện, lễ tân hoặc quản lý dịch vụ khách hàng có thể phù hợp với ISFP.

Thiết kế nội thất và trang trí: ISFP có khả năng nhạy bén với màu sắc, không gian và tỷ lệ. Công việc như kiến trúc sư, thiết kế nội thất, trang trí sân khấu hoặc trang trí nội thất có thể phù hợp với ISFP.

Lưu ý rằng danh sách này chỉ là một số ví dụ và không đầy đủ. Quan trọng hơn, ISFP nên tìm hiểu và phát triển những kỹ năng và sở thích của mình để chọn công việc phù hợp và mang đến sự hài lòng và thành công.`;
      break;
    }
    case "INFP": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm INFP!
      
      Hầu hết các người thuộc nhóm tính cách INFP thường mang trong mình những nguyên tắc và giá trị sâu sắc. Họ tận tụy trong việc bảo vệ những ý tưởng mà họ kính trọng và tận tâm với cả sự nghiệp và bản thân mình. Điều này là một phần quan trọng trong nhiều ngành nghề phù hợp với INFP.

Các cá nhân INFP thường quan tâm đến việc phục vụ người khác và thường có mong muốn làm việc vì lợi ích của người khác. Họ thể hiện sự chân thành và sẵn lòng đặt nhu cầu của người khác lên hàng đầu, bất kể người đó có ưu việt hơn hay thấp hơn họ.

Mặc dù họ có sự hướng dẫn rõ ràng, họ cũng nhạy cảm và dễ bị chỉ trích. Tính kết hợp này với sự ưa thích làm việc độc lập, INFP thường không thoải mái với những công việc căng thẳng hoặc yêu cầu làm việc nhóm chặt chẽ. Các ngành nghề đòi hỏi tư duy đặc thù và tập trung cá nhân thường khiến họ cảm thấy hài lòng.

Như là đặc điểm của INFP, khi tìm kiếm công việc, họ luôn tìm kiếm những gì thực sự yêu thích sự tự do sáng tạo và khả năng thể hiện giá trị cá nhân để đóng góp và cải thiện cuộc sống cho người khác.

Các ngành phù hợp

Có nhiều ngành nghề có thể phù hợp với tính cách INFP. Dưới đây là một số ví dụ về các ngành nghề mà INFP có thể tìm hiểu:

Tư vấn tâm lý hoặc tư vấn sinh viên: INFPs có khả năng lắng nghe, thấu hiểu và cung cấp hỗ trợ cho người khác. Công việc tư vấn tâm lý hoặc tư vấn sinh viên có thể phù hợp với khả năng này.

Công việc xã hội: INFPs thường quan tâm đến vấn đề xã hội và mong muốn thay đổi tích cực trong cộng đồng. Công việc trong lĩnh vực công tác xã hội, quản lý dự án phi lợi nhuận hoặc làm việc với tổ chức từ thiện có thể phù hợp với tính cách này.

Nhà văn hoặc biên tập viên: INFPs thường có khả năng sáng tạo và cảm nhận sâu sắc về các giá trị và tính cách con người. Công việc như viết sách, biên tập nội dung hoặc làm việc trong lĩnh vực truyền thông có thể phù hợp với sở thích của INFPs.

Lĩnh vực nghệ thuật: Với sự sáng tạo và cảm nhận sâu sắc, INFPs có thể phù hợp với lĩnh vực nghệ thuật như nghệ sĩ hội họa, diễn viên, nhạc sĩ, nhà thiết kế đồ họa, hoặc người làm thiết kế thời trang.`;
      break;
    }
    case "INTP": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm INFP!
      
      Tính cách INTP có một số liên quan đến sự nghiệp, bao gồm:

Tư duy phân tích và logic: INTP có khả năng suy luận logic và phân tích sắc bén. Vì vậy, họ thường thành công trong các công việc yêu cầu khả năng giải quyết vấn đề, phân tích dữ liệu và tư duy sáng tạo.

Sự sáng tạo và khám phá: INTP có khả năng sáng tạo và tư duy nghệ thuật. Họ thích tìm hiểu sâu về các khía cạnh khác nhau của một vấn đề và đưa ra các giải pháp mới mẻ và độc đáo.

Kiến thức đa dạng: INTP thích khám phá kiến thức đa dạng và có xu hướng học hỏi trong nhiều lĩnh vực khác nhau. Họ có thể thành công trong các công việc đòi hỏi hiểu biết rộng và khả năng áp dụng kiến thức vào thực tế.

Độc lập và tự chủ: INTP có xu hướng làm việc độc lập và tự chủ. Họ thích có không gian riêng để nghiên cứu và sáng tạo, và thường tận dụng khả năng tự quản lý công việc của mình.

Nhân viên nghiên cứu: Với tư duy phân tích và sự sáng tạo, INTP có thể thành công trong các công việc nghiên cứu và phát triển. Công việc trong lĩnh vực khoa học, công nghệ, y học, hoặc nghiên cứu xã hội có thể phù hợp với tính cách của họ.

Chuyên gia trong lĩnh vực kỹ thuật: INTP có khả năng hiểu rõ cấu trúc và quy trình kỹ thuật. Họ có thể phát triển sự chuyên sâu trong các lĩnh vực như kỹ thuật cơ khí, điện tử, máy tính, và tự động hóa.

Công việc phù hợp

Tính cách INTP có thể phù hợp với nhiều ngành nghề khác nhau, đặc biệt là những công việc yêu cầu tư duy phân tích, sáng tạo và tìm hiểu sâu sắc. Dưới đây là một số sự nghiệp liên quan đến tính cách INTP:

Nhà nghiên cứu/Kỹ sư: Với khả năng phân tích và tư duy logic, INTP thích tìm hiểu và nghiên cứu về các vấn đề phức tạp. Các ngành nghiên cứu khoa học, kỹ thuật và công nghệ thông tin có thể phù hợp với tính cách này.

Lập trình viên/Phát triển phần mềm: INTP có khả năng tư duy logic và khám phá, điều này làm cho họ có kỹ năng tổ chức và giải quyết vấn đề tốt. Công việc trong lĩnh vực lập trình và phát triển phần mềm có thể phù hợp với INTP.

Kiến trúc sư: Tính cách INTP thường thích tạo ra những giải pháp sáng tạo và hiểu rõ về cấu trúc và thiết kế. Vì vậy, nghề kiến trúc và thiết kế có thể là sự lựa chọn thích hợp.

Nghệ sĩ/Âm nhạc: INTP cũng có khả năng sáng tạo và tư duy nghệ thuật. Với sự khao khát khám phá và tự do sáng tạo, nghề nghiệp liên quan đến nghệ thuật, âm nhạc và thiết kế đồ họa có thể hợp với tính cách này.

Tư vấn/Truyền thông: Với khả năng phân tích và suy luận, INTP có thể làm việc trong lĩnh vực tư vấn và truyền thông. Họ có thể đưa ra các quan điểm và ý kiến phân tích sắc bén trong việc giải quyết vấn đề và tư vấn cho người khác.

Tuy nhiên, cần lưu ý rằng sự nghiệp phù hợp với tính cách INTP không chỉ dựa vào tính cách mà còn phụ thuộc vào sở thích cá nhân và kỹ năng phát triển. Mỗi người INTP có thể có sự ưu tiên và hướng nghiệp riêng.`;
      break;
    }
    case "ESTP": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ESTP!
      
      Khi đề cập đến lựa chọn nghề nghiệp, ESTP có một danh sách đa dạng phong phú để khám phá. Tính cách này thích đưa ra quyết định nhanh chóng, làm cho họ trở thành ứng cử viên xuất sắc cho các vai trò yêu cầu tư duy nhanh nhạy. Điều này càng được củng cố bởi thực tế rằng ESTP sống trong hiện tại và ưa thích thấy kết quả của họ ngay lập tức thay vì suy nghĩ về tương lai. Sức hấp dẫn của họ khả năng giao tiếp xuất sắc giúp họ tạo nên một lợi thế quan trọng.

Trong các tình huống xã hội, họ được biết đến là lạc quan, thân thiện. Theo David Keirsey, nhóm ESTP có tác động mạnh mẽ đối với môi trường xung quanh. Họ không chỉ giỏi giao tiếp và tương tác với mọi người, mà còn có khả năng hiểu, diễn giải ngôn ngữ ,phi ngôn ngữ. Điều này giúp họ thành công trong các ngành liên quan đến bán hàng và tiếp thị.

Tuy nhiên, họ thường thiếu kiên nhẫn, dẫn đến việc những công việc yêu cầu sự cẩn trọng hoặc lặp đi lặp lại không phù hợp với họ. Khả năng quan sát của họ có thể rất hữu ích trong một số lĩnh vực, nhưng tính tò mò và năng lượng dồi dào thường thúc đẩy họ hành động hơn là phân tích. Họ thường lựa chọn các sự nghiệp thú vị nhưng không ổn định, sẵn sàng đối mặt với rủi ro dù lớn hay nhỏ.

Họ được thúc đẩy bởi logic, thường chọn các ngành liên quan đến kỹ thuật, thể thao, ngoại giao và kỹ năng đàm phán. Họ cũng muốn có sự linh hoạt trong việc giải quyết vấn đề mà không bị ràng buộc bởi quy tắc cứng nhắc.

Các ngành phù hợp

Tính cách ESTP phù hợp với nhiều ngành công việc có yêu cầu đối phó với thử thách, tương tác xã hội, và khả năng thực hành. Dưới đây là một số nghành có thể phù hợp với ESTP:

Kinh doanh: ESTP có sự linh hoạt, khả năng giao tiếp tốt và sự tự tin. Họ có thể thành công trong các vị trí quản lý, kinh doanh bất động sản, quản lý sử dụng nguồn lực, doanh nghiệp khởi nghiệp.

Bán hàng và tiếp thị: Tính cách hướng ngoại khả năng tương tác xuất sắc của ESTP làm cho họ trở thành người bán hàng, nhân viên tiếp thị hoặc chuyên viên kinh doanh hiệu quả.

Kỹ thuật và Công nghệ: ESTP có khả năng thực hành tốt tình yêu với việc giải quyết vấn đề. Họ có thể làm việc trong các lĩnh vực kỹ thuật như kỹ sư cơ khí, điện, điện tử hoặc lập trình viên.

Thể thao: Sức khỏe tốt và đam mê với hoạt động thể thao khiến ESTP phù hợp với việc trở thành vận động viên, HLV thể thao, hay làm việc trong quản lý sự kiện thể thao.

Y tế cấp cứu: ESTP có khả năng phản ứng nhanh chóng trong tình huống khẩn cấp, điều này phù hợp với vai trò trong ngành y tế cấp cứu hoặc chăm sóc y tế khẩn cấp.

Kỹ năng thực hành: Nghề thợ thủ công, thợ sửa chữa, thợ làm bánh, hoặc ngành thực phẩm có thể phù hợp với ESTP vì họ thích làm việc với tay và thấy hứng thú trong việc tạo ra sản phẩm thực tế.

Quân đội và lực lượng an ninh: Khả năng quản lý tình huống, đưa ra quyết định nhanh chóng sẵn sàng đối mặt với thử thách khiến ESTP trở thành ứng viên phù hợp cho các vị trí trong lực lượng quân đội, cảnh sát, hay bảo vệ.

Giáo dục thể chất: Với sự đam mê với thể thao và hoạt động thể chất, ESTP có thể trở thành giáo viên thể dục hoặc huấn luyện viên thể thao.

Tuy nhiên, hãy nhớ rằng mỗi người ESTP là một cá nhân riêng biệt có thể có sự kết hợp khác nhau của đặc điểm và sở thích. Việc chọn nghề nghiệp phù hợp còn phụ thuộc vào sự hài hòa giữa cá nhân cũng như môi trường làm việc.`;
      break;
    }
    case "ESFP": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ESFP!

      Việc giao tiếp với người khác đóng một vai trò vô cùng quan trọng đối với kiểu tính cách này, hầu hết các hướng sự nghiệp của ESFP đều dựa trên nhu cầu này. Thêm vào đó, tính cách của ESFP thường rất ngẫu hứng, họ không thích bị ràng buộc bởi lịch trình chặt chẽ, các nhiệm vụ có cấu trúc hay công việc đơn điệu và nhàm chán.

Các công việc liên quan đến tài liệu lý thuyết, công việc hành chính hoặc phân tích dữ liệu chi tiết thường gặp khó khăn với ESFP bất kỳ công việc nào liên quan đến những yếu tố như vậy hoặc tương tự đều không phù hợp với bản chất của họ. Ngược lại, công việc phù hợp nhất cho ESFP thường là cho phép họ có đủ tự do để thể hiện khám phá với những điều độc đáo, thú vị và mang tính thẩm mỹ.

ESFP thường là những người có khuynh hướng đến các lĩnh vực nghệ thuật, họ thích làm việc trong môi trường xã hội năng động, nơi họ có thể tự do thể hiện sự sáng tạo cùng với những đồng nghiệp thân thiện, hòa đồng và tràn đầy nhiệt huyết.

Các ngành phù hợp

Tính cách ESFP thường thích các công việc có sự linh hoạt, giao tiếp nhiều với người khác, và có yêu cầu về sự sống động. Dưới đây là một số ngành có thể phù hợp với tính cách ESFP:

Nghệ thuật : ESFP thường có đam mê cho các hoạt động nghệ thuật như âm nhạc, diễn xuất, nhảy múa. Các ngành nghệ thuật này cho phép họ thể hiện sự sáng tạo của mình.

Du lịch và Dịch vụ: ESFP có thể học hỏi, tự phát triển qua việc giao tiếp với những người khác cũng như thám hiểu các địa danh và văn hóa khác nhau.

Giảng dạy hoặc đào tạo: Trong việc chia sẻ kiến thức với người khác, ESFP có thể tự do thể hiện ý kiến của mình và tác động lên người họ dạy.

Dịch vụ xã hội: ESFP thường có sự nhạy bén đối với các vấn đề xã hội và hòa nhập với các tổ chức phi chính phủ hoặc từ thiện.

Thượng mại và Bán hàng: Sự giao tiếp tốt của ESFP có thể giúp họ thành công trong việc bán hàng, quảng cáo và quan hệ khách hàng.

Sự kiện và Quản lý sự kiện: Khả năng tổ chức và giao tiếp của ESFP có thể giúp họ thành công trong lĩnh vực tổ chức sự kiện.

Dịch vụ y tế: Ngành y tế yêu cầu sự quan tâm đến người khác và kỹ năng tương tác xã hội, điều đó phù hợp với tính cách ESFP.

Nhà hàng và Nhà phê bình ẩm thực: ESFP có thể thể hiện sự sáng tạo và đam mê trong việc thử nghiệm các món ăn mới hoặc tạo ra các trải nghiệm ẩm thực mới mẻ.

Phần mềm và Thiết kế trang web: Nếu có sự kết hợp giữa sự sáng tạo của ESFP và kỹ năng công nghệ, họ có thể thành công trong lĩnh vực thiết kế trang web hoặc phần mềm.`;
      break;
    }
    case "ENFP": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ENFP!

      ENFP được vinh dự bởi khả năng đa năng của họ. Một ENFP có thể đạt được thành tựu ấn tượng trong nhiều lĩnh vực mà họ quan tâm. Tuy nhiên, họ dễ cảm thấy chán nản và thường không quá ưa thích công việc đòi hỏi chi tiết và lặp đi lặp lại. Họ tìm kiếm những công việc mang tính sáng tạo, cho phép họ tự do thể hiện ý tưởng mới hoặc làm việc theo nhóm. Họ không thích những mô hình hạn chế và những công việc đơn điệu.

ENFP thể hiện sự tài năng đa dạng, năng động và hướng tới tương lai. Họ có khả năng cạnh tranh với các nhóm tính cách khác trong nhiều lĩnh vực nghề nghiệp khi họ tập trung vào cái nhìn tổng thể hoặc phát triển nguyên tắc cơ bản. Mặc dù thuộc nhóm F, ENFP vẫn xuất sắc trong việc sử dụng tư duy logic, kết hợp một cách mạnh mẽ giữa trực giác và suy luận. Họ có khả năng tập trung vào mục tiêu chính và sau đó lập kế hoạch, tổ chức để đạt được chúng. Với khả năng này, họ có thể tỏa sáng trong nhiều lĩnh vực, từ nhà khoa học, kỹ sư cho đến doanh nhân.

Dưới đây là một số lĩnh vực mà ENFP có thể tỏa sáng, chẳng hạn như trở thành những nhà khoa học, kỹ sư tham gia vào các mạng lưới hoạt động lớn:

Các ENFP thường tỏ ra sáng tạo và tràn đầy ý tưởng, giúp họ thích hợp cho nhiều vai trò khác nhau, từ sáng tạo nghệ thuật, viết lách, quản lý dự án đến lĩnh vực tư vấn và giảng dạy. Khả năng thấu hiểu người khác của họ cũng là một điểm mạnh trong các lĩnh vực như tâm lý học, tư vấn tâm lý, và chăm sóc sức khỏe tinh thần

Các ngành phù hợp

Tính cách ENFP thường thích hợp với nhiều lĩnh vực đa dạng do sự đa năng, năng động và đam mê của họ. Dưới đây là một số lĩnh vực có thể phù hợp với ENFP:

Nghệ thuật và Sáng tạo: Nghệ thuật sân khấu, hội họa, âm nhạc, vũ đạo, viết lách, thiết kế đồ họa.

Giáo dục và Huấn luyện: Giảng dạy, đào tạo, huấn luyện viên, tư vấn giáo dục.

Truyền thông xã hội: Biên tập viên, nhà báo, quản lý truyền thông, quảng cáo, PR.

Sản xuất nội dung sáng tạo: Youtuber, người tạo nội dung trên mạng xã hội, podcaster.

Nghiên cứu xã hội và Hành vi con người: Tâm lý học, xã hội học, nhân học, tư vấn tâm lý.

Tư vấn và Tổ chức sự kiện: Tư vấn tâm lý, tư vấn hướng nghiệp, tổ chức sự kiện, quản lý dự án.

Y tế và Chăm sóc sức khỏe tinh thần: Tư vấn tâm lý, tư vấn hướng dẫn dinh dưỡng, nhân viên chăm sóc sức khỏe tinh thần.

Kinh doanh sáng tạo: Khởi nghiệp, quản lý dự án, quản lý sản phẩm, quản lý nhân sự.

Lĩnh vực xã hội và Phi lợi nhuận: Công tác xã hội, quản lý dự án phi lợi nhuận, tổ chức sự kiện từ thiện.

Công nghệ thông tin và Phát triển phần mềm: Thiết kế giao diện người dùng, phát triển ứng dụng, quản lý dự án công nghệ thông tin.`;
      break;
    }
    case "ENTP": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ENTP!

      Trí thông minh của ENTP có thể đạt tới mức gây sự khâm phục, thậm chí khiến người khác cảm thấy ái ngại. Với sự kết hợp độc đáo giữa tính hướng ngoại (E), thiên hướng trí tuệ (NT) và tính linh hoạt (P), họ trở nên đặc biệt hiệu quả trong việc sử dụng và kết nối các ý tưởng.

Kỹ năng giao tiếp xuất sắc của ENTP không chỉ giới hạn trong việc sử dụng lời nói mà còn bao gồm viết văn bản. Họ thường tham gia vào các cuộc tranh luận với ý tưởng của người khác, điều thú vị là họ cũng sở hữu khả năng lãnh đạo, mặc dù họ không thích việc quản lý người khác hoặc bị người khác quản lý.

Mặc dù cảm hứng của họ đến từ trí tuệ hơn là từ tình cảm, ENTP có khả năng tạo ra động lực và truyền cảm hứng cho người khác một cách dễ dàng.

Trong môi trường công việc, họ thường khen ngợi năng lực trí tuệ và sự tò mò, coi trọng kiến thức, tư duy logic hơn là tình cảm. Tính tự do cực kỳ quan trọng với họ, vì họ cảm thấy thoải mái nhất khi được phép sáng tạo mà không bị gò bó bởi các quy tắc và cấu trúc.

Tổng kết, ENTP tỏ ra cuốn hút với khả năng kết nối ý tưởng một cách hiệu quả, kỹ năng giao tiếp ưu việt và khả năng lãnh đạo độc đáo. Sự sáng tạo, tư duy logic và tinh thần tự do là những đặc điểm quan trọng trong bản chất của họ.

Các ngành phù hợp

ENTP thường thích thách thức trí tuệ và tận dụng sự sáng tạo của mình trong môi trường làm việc. Dưới đây là một số ngành có thể phù hợp với tính cách ENTP:

Khoa học và Nghiên cứu: ENTP thích khám phá và tìm hiểu. Các lĩnh vực như khoa học, nghiên cứu, công nghệ, sáng tạo mới có thể phù hợp với khả năng suy nghĩ sâu sắc và khao khát tìm hiểu của họ.

Lĩnh vực Sáng tạo: ENTP có sự sáng tạo và trí tưởng tượng phong phú, vì vậy các ngành như thiết kế đồ họa, truyền thông quảng cáo, âm nhạc, nghệ thuật kịch nghệ, viết lách có thể là lựa chọn thú vị cho họ.

Kinh doanh và Quản lý dự án: Khả năng lãnh đạo và khả năng kết nối ý tưởng của ENTP thích hợp cho lĩnh vực quản lý dự án và kinh doanh, đặc biệt trong các ngành yêu cầu tư duy chiến lược và sáng tạo trong giải quyết vấn đề.

Lĩnh vực Kỹ thuật và Công nghệ thông tin: ENTP thường có khả năng tư duy logic và sự quan tâm đối với các hệ thống phức tạp. Lĩnh vực kỹ thuật, phát triển phần mềm, công nghệ thông tin có thể phù hợp với khả năng này.

Luật và Chính trị: ENTP có sự năng động và khả năng tham gia vào tranh luận tốt. Lĩnh vực luật và chính trị có thể cho phép họ áp dụng khả năng thuyết phục và tư duy phản biện của mình.

Giáo dục và Đào tạo: ENTP thường thích truyền đạt kiến thức và tạo ra sự khám phá. Các vai trò trong giảng dạy, huấn luyện, hoặc phát triển chương trình đào tạo có thể phù hợp với họ.

Tư vấn và Nghiên cứu thị trường: Khả năng phân tích thông tin, giao tiếp tốt và sự tò mò của ENTP có thể giúp họ trong việc làm tư vấn hoặc nghiên cứu thị trường.`;
      break;
    }
    case "ESTJ": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ESTJ!

      Thời gian dành riêng cho nội tâm được coi là một phần thưởng và nguồn động viên lớn sau khi hoàn thành công việc đối với ESTJ. Thậm chí, các hoạt động trong khoảnh khắc này phải có mục tiêu cụ thể.

ESTJ đánh giá cao khả năng lãnh đạo mạnh mẽ hoặc những cá nhân quyền lực đáng kính. Họ cảm thấy tràn đầy sinh lực và cảm hứng khi gặp những nhà lãnh đạo tự tin vào khả năng của họ và được thúc đẩy bởi giá trị đạo đức.

Cảm hứng và sức mạnh cũng đến từ những người có khả năng tạo ra tác động. ESTJ thích làm việc với những người có động lực thực hiện hành động. Do họ cảm thấy thúc đẩy bởi hệ thống giá trị cá nhân, họ tôn trọng và có ý thức về những người đồng hành như vậy. ESTJ phát triển tốt khi có cơ hội làm việc chia sẻ mục tiêu với những người có động cơ.

ESTJ cũng thích tạo và duy trì các thói quen, truyền thống. Họ cảm thấy mạnh mẽ hơn khi dựa vào sự ổn định và nhất quán, giúp họ tập trung vào việc hoàn thành mục tiêu của mình.

Các ngành phù hợp

ESTJ thường thể hiện mình phù hợp, hiệu quả trong nhiều lĩnh vực và ngành nghề do tính cách của họ, bao gồm sự tổ chức, trách nhiệm. Dưới đây là một số ngành mà ESTJ thường cảm thấy thoải mái:

Quản lý: ESTJ thường là người lãnh đạo tự nhiên và có khả năng quản lý tốt. Họ thích điều hành, lập kế hoạch và đảm bảo mọi thứ diễn ra theo đúng trật tự.

Kế toán và Tài chính: Với tính chính xác, sự tập trung vào chi tiết, ESTJ phù hợp trong lĩnh vực kế toán, tài chính, kiểm toán.

Y tế: Trong lĩnh vực y tế, ESTJ có thể làm việc trong quản lý cơ sở y tế, quản lý bệnh viện hoặc các vị trí liên quan đến quản lý y tế.

Luật sư: Tính trung thực và đáng tin cậy của ESTJ thường hợp với ngành luật, đặc biệt là trong việc thực thi luật pháp.

Hành chính và Quản trị nhân sự: ESTJ có khả năng quản lý và làm việc với con người, nên họ phù hợp trong lĩnh vực quản trị nhân sự, hành chính.

Ngành công nghiệp thực phẩm và đồ uống: Công việc trong ngành thực phẩm và đồ uống, đặc biệt là trong quản lý nhà hàng hoặc dịch vụ thực phẩm, cũng phù hợp với tính cách ESTJ.

Quản lý dự án: Sự tổ chức và khả năng quản lý tốt của ESTJ khiến họ có thể thành công trong việc quản lý dự án luôn đảm bảo tiến độ thực hiện.

Quân đội và Cảnh sát: ESTJ thường có khả năng lãnh đạo và tuân thủ quy tắc, nên họ thường phù hợp với ngành quân đội,  lĩnh vực an ninh.

Quản lý chuỗi cung ứng: Với khả năng quản lý tình huống và tập trung vào chi tiết, ESTJ có thể làm việc trong lĩnh vực quản lý chuỗi cung ứng.

Ngành công nghiệp sản xuất: Trong ngành công nghiệp sản xuất, ESTJ có thể thích nghi tốt với quá trình sản xuất và quản lý hiệu suất.`;
      break;
    }
    case "ESFJ": {
      contentcomment.innerHTML = `ESFJ

      Các ngành nghề phổ biến cho ESFJ thường liên quan đến ba đặc điểm chính: thực tế, lòng vị tha và tinh thần hòa đồng. Cách họ lựa chọn công việc thường phản ánh những đặc điểm này họ thường hướng ngoại và thực tế (SJ), và những đặc điểm này thường thúc đẩy họ chọn con đường sự nghiệp cụ thể.

Sự tổ chức, đáng tin cậy và tính logic là những đặc điểm mà ESFJ thường có. Họ nhiệt huyết với việc tạo ra môi trường có cấu trúc và dễ dàng dự đoán. Các ngành nghề phù hợp cho ESFJ thường liên quan đến những đặc điểm này, ví dụ như kế toán hoặc quản lý.

Ngoài ra, ESFJ cũng quan tâm đến việc giúp đỡ người khác một cách thiết thực, thông qua việc quan sát và thấy kết quả. Môi trường làm việc lý tưởng cho họ là nơi họ có thể áp dụng giá trị và kỹ năng giao tiếp của mình để quản lý nguồn nhân lực và quy trình.

Những ngành nghề này phù hợp với tính cách ESFJ và cho phép họ phát huy những phẩm chất tự nhiên của mình trong môi trường làm việc.

Công việc phù hợp

Tính cách ESFJ có nhiều đặc điểm phù hợp với các công việc liên quan đến sự chăm sóc người khác và giải quyết các vấn đề xã hội. Dưới đây là một số sự nghiệp thường phù hợp với ESFJ:

Y tá, điều dưỡng hoặc công việc liên quan đến y tế: ESFJ có sự chăm sóc và quan tâm đến sức khỏe và phục hồi của người khác, và có thể làm việc tốt trong lĩnh vực y tế như y tá, điều dưỡng, hay các chuyên gia chăm sóc y tế khác.

Giáo viên hoặc người huấn luyện: ESFJ có khả năng giao tiếp tốt và quan tâm đến sự phát triển và giáo dục của người khác. Họ có thể làm việc tốt như giáo viên, huấn luyện viên, hay các chủ nhiệm lớp.

Quản lý sự kiện và sự kiện: ESFJ có khả năng tổ chức và quản lý các sự kiện xã hội. Họ có thể làm việc trong lĩnh vực quản lý sự kiện, tổ chức hội thảo, hay làm sự kiện.

Quản lý nguồn nhân lực: ESFJ có khả năng tương tác tốt với người khác và có sự quan tâm đến cảm xúc và nhu cầu của nhân viên. Họ có thể làm việc trong lĩnh vực quản lý nguồn nhân lực hoặc phát triển nhân viên.

Nhân viên chăm sóc khách hàng hoặc khách sạn: ESFJ có khả năng giao tiếp tốt và quan tâm đến nhu cầu của khách hàng. Họ có thể làm việc trong lĩnh vực dịch vụ khách hàng hoặc quản lý khách sạn.

Tư vấn, hỗ trợ tâm lý hoặc xã hội: ESFJ có khả năng đồng cảm và quan tâm đến cảm xúc và nhu cầu của người khác. Họ có thể làm việc trong lĩnh vực tư vấn, hỗ trợ tâm lý, hoặc tư vấn xã hội.`;
      break;
    }
    case "ENFJ": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ENFJ!

      ENFJ cảm thấy hài lòng khi thực hiện những việc mà họ đam mê. Điều này giúp họ tương tác hiệu quả với các loại tính cách khác:

Sự công nhận cho nỗ lực của họ trong công việc rất quan trọng. Khi nhóm đồng nghiệp trân trọng họ, ủng hộ quyết định và đánh giá cao tài năng lãnh đạo, ENFJ thường cảm thấy tự tin và thoải mái hơn, từ đó làm việc hiệu quả hơn.

Khái niệm này cũng áp dụng ngược lại: ENFJ phát triển tốt khi họ nhận được đánh giá cao trong công việc. Sự thành công trong công việc thường liên quan đến cảm giác rằng công việc của họ có ý nghĩa. Họ đặc biệt thích điều này, và sự nhận thức và ủng hộ về khả năng lãnh đạo của họ càng thúc đẩy sự phát triển.

Tính cách ENFJ phát triển tốt trong môi trường làm việc hợp tác và hỗ trợ. Họ thường sử dụng trí tuệ cảm xúc và trực giác để thúc đẩy người khác đạt đỉnh tiềm năng, vì vậy, họ thường tìm kiếm vai trò tư vấn trong môi trường làm việc.

Vì ENFJ có tư duy nhân đạo, họ tìm kiếm công việc liên quan đến xã hội hoặc từ thiện. ENFJ cũng có khả năng xuất sắc trong việc tổ chức và kế hoạch, cùng với sự hiểu biết sâu rộng về kinh doanh và tài chính, làm cho họ trở thành nguồn lực có giá trị cho mọi tổ chức.

Các ngành phù hợp

Tính cách ENFJ có nhiều ưu điểm và khả năng phát triển trong nhiều lĩnh vực nghề nghiệp. Dưới đây là một số lĩnh vực sự nghiệp phù hợp với tính cách ENFJ:

Tư vấn và Tâm lý học: Sự đồng cảm sâu sắc của ENFJ và khả năng lắng nghe tốt làm cho họ phù hợp trong lĩnh vực tư vấn tâm lý, tư vấn sự nghiệp hoặc tâm lý học.

Giáo dục và Đào tạo: ENFJ có khả năng truyền đạt kiến thức một cách hiệu quả và tạo môi trường học tập tích cực. Họ có thể trở thành giáo viên, huấn luyện viên hoặc giảng dạy trong các khóa học đào tạo.

Y tế và Chăm sóc sức khỏe: ENFJ thường thích chăm sóc người khác và có thể làm việc trong lĩnh vực y tế, y tá, tư vấn dinh dưỡng hoặc chăm sóc sức khỏe tinh thần.

Truyền thông và Quan hệ công chúng: ENFJ có khả năng giao tiếp xuất sắc và có thể làm việc trong lĩnh vực truyền thông, quan hệ công chúng, truyền hình, truyền thông xã hội hoặc biên kịch.

Nhân sự và Phát triển nguồn nhân lực: ENFJ có khả năng xây dựng môi trường làm việc tích cực. Họ có thể làm trong lĩnh vực nhân sự, phát triển nguồn nhân lực hoặc đào tạo nhân viên.

Tổ chức sự kiện và Quản lý dự án: ENFJ có khả năng tổ chức và quản lý sự kiện, dự án hoặc chương trình. Họ có thể làm việc trong lĩnh vực quản lý sự kiện, quản lý dự án hoặc sản xuất.

Từ thiện và Tình nguyện: ENFJ thường thích giúp đỡ cộng đồng và có thể làm việc trong các tổ chức từ thiện, hoạt động tình nguyện hoặc làm việc trong các dự án xã hội.

Tùy thuộc vào sở thích, kỹ năng và mục tiêu cá nhân, ENFJ có thể phát triển sự nghiệp trong nhiều lĩnh vực khác nhau, với sự hướng dẫn, đồng cảm và tận tâm của họ.
`;
      break;
    }
    case "ENTJ": {
      contentcomment.innerHTML = `Có thể bạn thuộc nhóm ENTJ!

      ENTJ được xác định bởi một số đặc điểm mà hầu hết mọi người tiếp xúc với họ đều có thể nhận ra: nghị lực, quyết tâm và khả năng lãnh đạo. Những đặc điểm này thường thúc đẩy ENTJ theo đuổi các ngành nghề cụ thể cũng giới hạn một phần lựa chọn sự nghiệp của họ. Tuy nhiên, họ không bao giờ cảm thấy hối tiếc về điều này.

ENTJ thích biến các ý tưởng thành những kế hoạch thực tế, đây là một trong những điểm mạnh chính của họ. Điều này cũng tương ứng với hướng nghề nghiệp mà họ thường chọn. Họ luôn hướng tới tương lai và thường tự tin hơn so với các nhóm tính cách khác. Những đặc điểm này giúp cho ENTJ thường xuất sắc trong các vị trí quản lý, doanh nhân, lĩnh vực chiến lược nơi họ có thể hiện nghị lực, quyết tâm trong việc thực hiện ý tưởng, ngay cả khi phải đối mặt với nhiều thách thức.

Với khả năng giao tiếp bằng lời nói xuất sắc, ENTJ thường tạo sự ấn tượng. Họ yêu thích sự cấu trúc và trật tự, nhưng đồng thời không thích sự bằng phẳng và nhàm chán. Điều này thể hiện rõ qua việc họ thường có tầm nhìn xa thường phù hợp với các vị trí lãnh đạo. Một điểm chắc chắn là, ENTJ không bao giờ hài lòng với việc chỉ đảm nhận vị trí nhân viên cấp dưới trong thời gian dài.

Các ngành phù hợp

ENTJ thường thích hoạt động trong những lĩnh vực có tính thách thức, cạnh tranh đòi hỏi khả năng lãnh đạo và quản lý. Dưới đây là một số ngành phù hợp với kiểu tính cách ENTJ:

Quản lý và Lãnh đạo: ENTJ tự nhiên nổi bật trong vai trò quản lý và lãnh đạo. Họ có khả năng tổ chức, hướng dẫn và định hướng nhóm, làm việc tốt trong các vị trí quản lý cấp cao.

Doanh nhân và Khởi nghiệp: ENTJ thường có tầm nhìn chiến lược, sự quyết đoán cần thiết cho việc xây dựng và quản lý doanh nghiệp.

Tư vấn chiến lược: Họ có khả năng phân tích sắc bén và tầm nhìn chiến lược, làm cho họ phù hợp với việc tư vấn chiến lược và quản lý dự án.

Luật sư và Chính trị gia: Tính cách quyết đoán và khả năng thuyết phục tốt khiến ENTJ phù hợp với việc trở thành luật sư hoặc tham gia trong lĩnh vực chính trị.

Tài chính và Quản lý rủi ro: Tính cách phân tích khả năng quyết định nhanh giúp ENTJ trong các ngành liên quan đến tài chính, đầu tư và quản lý rủi ro.

Kế hoạch hóa sự kiện và Quản lý dự án: ENTJ có khả năng tổ chức và quản lý tốt, làm cho họ phù hợp với việc kế hoạch, tổ chức sự kiện, quản lý dự án.

Công nghệ thông tin và Kỹ thuật: Họ thường có tư duy logic sắc bén, phù hợp với việc làm việc trong lĩnh vực công nghệ thông tin và kỹ thuật.

Quảng cáo và Tiếp thị: Tính cách quyết đoán khả năng thúc đẩy làm cho họ phù hợp với việc tham gia trong lĩnh vực quảng cáo và tiếp thị.

Y học và Quản lý y tế: Khả năng quản lý và tổ chức tốt của ENTJ có thể được áp dụng trong lĩnh vực y học và quản lý y tế.

Giáo dục và Đào tạo: ENTJ thường thích làm việc với kiến thức có khả năng lãnh đạo, làm cho họ phù hợp với việc giảng dạy và đào tạo.`;
      break;
    }
  }
  var screen = document.createElement("div");
  screen.classList.add("sceentest");

  var div = document.createElement("div");
  div.classList.add("testc");

  var comment = document.createElement("div");
  comment.classList.add("comment");

  var contaidia = document.createElement("div");
  contaidia.id = "slidembti";

  var contaiprocess = document.createElement("div");
  contaiprocess.id = "contaiprocess";

  var buttonleft = document.createElement("img");
  var buttonright = document.createElement("img");
  buttonleft.src = "/img/tool_imgs/back2.png";
  buttonright.src = "/img/tool_imgs/lauch2.png";
  buttonleft.id = "btnlt";
  buttonleft.classList.add("btnpr");
  buttonright.classList.add("btnpr");
  contaidia.appendChild(buttonleft);
  contaidia.appendChild(buttonright);

  contaidia.appendChild(contaiprocess);
  div.appendChild(contaidia);
  comment.appendChild(contentcomment);
  div.appendChild(comment);
  screen.appendChild(div);
  tescontai.appendChild(screen);

  buttonright.onclick = function nextSlide() {
    showSlide(currentSlide + 1);
  };
  buttonleft.onclick = function prevSlide() {
    showSlide(currentSlide - 1);
  };
  console.log(noteA);
  console.log(noteB);
  console.log(noteC);
  console.log(noteD);
  fourprocess(A, noteA);
  fourprocess(B, noteB);
  fourprocess(C, noteC);
  fourprocess(D, noteD);
  createIndicators();
  showSlide(currentSlide);
}
function fourprocess(z, kq) {
  var processcontai = document.createElement("div");
  processcontai.classList.add("progress-container");
  var contentprocess = document.createElement("p");
  contentprocess.innerHTML = "";
  var leftw = document.createElement("label");
  leftw.innerHTML = "";
  var rightw = document.createElement("label");
  rightw.innerHTML = "";
  var imgprocess = document.createElement("img");
  var contenimgprocess = document.createElement("div");
  contenimgprocess.classList.add("contenimgprocess");
  switch (kq) {
    case "I": {
      imgprocess.src = "img/mbti/introverted.svg";
      contentprocess.innerHTML = `Những người có xu hướng Hướng Nội (I) thường:

- Tập trung vào thế giới nội tâm của mình
- Lấy năng lượng từ việc suy ngẫm về các khái niệm, ý tưởng, trải nghiệm và ký ức
- Dành thời gian để suy ngẫm
- Giao tiếp qua việc viết; xử lý ý tưởng bên trong
- Suy nghĩ kỹ trước khi hành động
- Chủ động khi điều đó quan trọng đối với họ
- Tập trung vào một vài sở thích chuyên sâu`;
      leftw.innerHTML = "Hướng nội (E)";
      rightw.innerHTML = "<strong>Hướng ngoại (I)</strong>";
      break;
    }
    case "E": {
      imgprocess.src = "img/mbti/extraverted.svg";
      contentprocess.innerHTML = `Những người có xu hướng Hướng Ngoại (E) thường:

- Tập trung vào thế giới bên ngoài
- Lấy năng lượng từ việc tương tác với người khác
- Hành động nhanh chóng
- Giao tiếp bằng lời nói; xử lý ý tưởng thông qua thảo luận
- Hành động trước khi suy nghĩ thấu đáo
- Sẵn sàng chủ động
- Có nhiều sở thích đa dạng`;
      leftw.innerHTML = "<strong>Hướng nội (E)</strong>";
      rightw.innerHTML = "Hướng ngoại (I)";
      processcontai.classList.add("change");
      break;
    }
    case "N": {
      imgprocess.src = "/img/mbti/ntuitive.svg";
      contentprocess.innerHTML = `Những người có xu hướng Trực Giác (N) thường:

- Tìm kiếm những ý tưởng mới
- Nhìn vào bức tranh toàn cảnh
- Có cách tiếp cận cuộc sống đầy tưởng tượng
- Tập trung vào các khả năng tương lai, các mẫu hình và ý nghĩa
- Thích một khung tổng thể và tự mình hoàn thiện
- Tập trung vào các khái niệm, không phải ứng dụng thực tiễn
- Tin vào cảm hứng`;
      leftw.innerHTML = "<strong>Trực giác (N)</strong>";
      rightw.innerHTML = "Giác quan (S)";
      processcontai.classList.add("change");
      break;
    }
    case "S": {
      imgprocess.src = "/img/mbti/Sensing.svg";
      contentprocess.innerHTML = `Những người có xu hướng Giác Quan (S) thường:

- Tập trung vào sự thật và chi tiết cụ thể
- Nhớ các chi tiết quan trọng đối với họ
- Có cách tiếp cận thực tế với cuộc sống
- Tập trung vào thực tế hiện tại hay những thực tế đã qua
- Thích các hướng dẫn từng bước và thông tin được trình bày tuần tự
- Hiểu ý tưởng thông qua ứng dụng thực tiễn
- Tin vào kinh nghiệm`;
      leftw.innerHTML = "Trực giác (N)";
      rightw.innerHTML = "<strong>Giác quan (S)</strong>";
      break;
    }
    case "F": {
      imgprocess.src = "/img/mbti/feeling.svg";
      contentprocess.innerHTML = `Những người có xu hướng Cảm Xúc (F) thường:

- Áp dụng các giá trị cá nhân và xã hội—hướng đến con người
- Tiếp cận giải quyết vấn đề bằng sự đồng cảm
- Đưa ra lời khen ngợi (có thể là "nhạy cảm")
- Tìm kiếm sự hài hòa, cân nhắc quan điểm của mọi người
- Tìm kiếm những điều đúng đắn để hỗ trợ
- Tập trung vào các mối quan hệ
- Xem xét hoàn cảnh cá nhân khi ra quyết định`;
      leftw.innerHTML = "<strong>Cảm xúc (F)</strong>";
      rightw.innerHTML = "Lý trí (T)";
      processcontai.classList.add("change");
      break;
    }
    case "T": {
      imgprocess.src = "/img/mbti/thinking.svg";
      contentprocess.innerHTML = `Những người có xu hướng Lý Trí (T) thường:

- Sử dụng phân tích logic khi lập luận—hướng đến hệ thống
- Tiếp cận giải quyết vấn đề một cách khách quan
- Có cái nhìn phê phán (có thể "khắt khe")
- Xem xét các ưu và nhược điểm trong một tình huống
- Tìm kiếm những gì sai sót để có thể sửa chữa
- Tập trung vào nhiệm vụ
- Dựa vào các tiêu chí khách quan khi ra quyết định`;
      leftw.innerHTML = "Cảm xúc (F)";
      rightw.innerHTML = "<strong>Lý trí (T)</strong>";
      break;
    }
    case "P": {
      imgprocess.src = "/img/mbti/Perceiving.svg";
      contentprocess.innerHTML = `Những người có xu hướng Nhận Thức (P) thường:

- Linh hoạt
- Giữ các lựa chọn mở
- Theo dòng chảy của tình huống
- Thích sự tự phát
- Thích ứng với thông tin mới phát sinh
- Muốn trải nghiệm cuộc sống
- Cảm thấy tràn đầy năng lượng và làm việc tốt nhất vào phút cuối`;
      leftw.innerHTML = "Nguyên tắc (J)";
      rightw.innerHTML = "<strong>Linh hoạt (P)</strong>";
      break;
    }
    case "J": {
      imgprocess.src = "/img/mbti/judging.svg";
      contentprocess.innerHTML = `Những người có xu hướng Đánh Giá (J) thường:

- Thích lập kế hoạch và tuân thủ kế hoạch đó
- Mong muốn sự kết thúc rõ ràng
- Lên kế hoạch và tuân theo lịch trình
- Thích sự tổ chức và cấu trúc
- Làm việc một cách có phương pháp
- Muốn kiểm soát cuộc sống
- Cố gắng hết sức để tránh căng thẳng vào phút cuối`;
      leftw.innerHTML = "<strong>Nguyên tắc (J)</strong>";
      rightw.innerHTML = "Linh hoạt (P)";
      processcontai.classList.add("change");
      break;
    }
  }
  var processbar = document.createElement("div");
  processbar.classList.add("progress-bar");
  processbar.style.width = z;
  processbar.innerText = z;

  var contaiprocess = document.getElementById("contaiprocess");

  var processallcontai = document.createElement("div");
  processallcontai.classList.add("processallcontai");

  var process = document.createElement("div");
  process.classList.add("process");

  processcontai.appendChild(processbar);
  processallcontai.append(leftw);
  processallcontai.appendChild(processcontai);
  processallcontai.appendChild(rightw);
  contenimgprocess.appendChild(imgprocess);
  contenimgprocess.appendChild(contentprocess);
  process.appendChild(contenimgprocess);
  process.appendChild(processallcontai);
  contaiprocess.appendChild(process);
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

function createIndicators() {
  const slides = document.querySelectorAll(".process");
  const indicatorsContainer = document.createElement("div");
  indicatorsContainer.classList.add("indicators");
  slides.forEach((slide, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.addEventListener("click", () => showSlide(index));
    indicatorsContainer.appendChild(indicator);
  });
  var slidembti = document.getElementById("slidembti");
  slidembti.appendChild(indicatorsContainer);
  updateIndicators();
}

function showSlide(index) {
  const slides = document.querySelectorAll(".process");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  var contaiprocess = document.getElementById("contaiprocess");
  contaiprocess.style.left = `${offset}%`;
  updateIndicators();
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
        element: ".introduction-Test",
        intro: "Đây là trang trắc nghiệm hướng nghiệp",
      },
      {
        element: ".step-one-Test",
        intro: "Đây là nơi chứa đựng các bài test của website",
      },
      {
        element: ".step-two-Test",
        intro:
          "Đây là bài test hướng nghiệp Holland bao gồm 54 câu hỏi và kết quả rất chi tiết để bạn có thể biết được bản thân phù hợp với ngành nghề nào",
      },
      {
        element: ".step-three-Test",
        intro:
          "Đây là bài test tính cách Mbti bao gồm 70 câu hỏi và kết quả cũng rất chi tiết và tường tận để bạn có thể hiểu thêm về bản thân",
      },
    ],
    showProgress: true,
    showBullets: false,
    disableInteraction: true,
  });

  intro.start();
}
