const SCALE = [
  { text: "Không bao giờ", points: 0 },
  { text: "Rất hiếm khi", points: 1 },
  { text: "Thỉnh thoảng", points: 2 },
  { text: "Khá thường xuyên", points: 3 },
  { text: "Rất thường xuyên", points: 4 }
];

const QUESTIONS = [
  "Bạn có từng đọc một nội dung nhưng nhận ra mình không thực sự tập trung vào nó và phải đọc lại không?",
  "Bạn có từng quên mất lý do mình đi từ phòng này sang phòng khác không?",
  "Bạn có từng không chú ý đến các biển báo chỉ đường khi đang di chuyển không?",
  "Bạn có từng nhầm lẫn giữa bên trái và bên phải khi chỉ đường cho người khác không?",
  "Bạn có thường vô tình va phải người khác không?",
  "Bạn có từng quên mất mình đã tắt đèn, tắt bếp hoặc khóa cửa hay chưa không?",
  "Bạn có từng không chú ý lắng nghe tên của người khác khi được giới thiệu không?",
  "Bạn có từng nói điều gì đó rồi sau đó mới nhận ra rằng lời nói ấy có thể khiến người khác cảm thấy bị xúc phạm không?",
  "Bạn có từng không nghe thấy người khác nói chuyện với mình vì đang mải làm một việc khác không?",
  "Bạn có từng mất bình tĩnh rồi sau đó cảm thấy hối tiếc không?",
  "Bạn có từng để những thư từ hoặc thông tin quan trọng chưa được phản hồi trong nhiều ngày không?",
  "Bạn có từng quên hướng rẽ trên một con đường quen thuộc nhưng ít khi đi qua không?",
  "Bạn có từng không nhìn thấy món đồ mình đang tìm trong siêu thị dù nó thực sự ở ngay trước mắt không?",
  "Bạn có từng đột nhiên băn khoăn liệu mình có sử dụng một từ ngữ đúng cách hay không?",
  "Bạn có từng gặp khó khăn khi đưa ra quyết định không?",
  "Bạn có từng quên những cuộc hẹn đã được lên lịch trước đó không?",
  "Bạn có từng quên mất mình đã đặt một món đồ ở đâu không?",
  "Bạn có từng vô tình vứt bỏ thứ mình muốn giữ lại và giữ thứ đáng lẽ phải vứt đi không?",
  "Bạn có từng mơ màng, suy nghĩ lan man trong khi đáng lẽ phải tập trung lắng nghe điều gì đó không?",
  "Bạn có từng quên tên của những người mình đã gặp không?",
  "Bạn có từng bắt đầu làm một việc nhưng sau đó lại vô tình bị phân tâm và chuyển sang làm một việc khác không?",
  "Bạn có từng cảm thấy mình biết một điều gì đó nhưng không thể nhớ ra ngay, dù nó gần như đã ở ngay đầu lưỡi không?",
  "Bạn có từng quên mất mình định mua gì khi đến cửa hàng không?",
  "Bạn có thường vô tình làm rơi đồ vật không?",
  "Bạn có từng rơi vào tình huống không thể nghĩ ra điều gì để nói dù muốn tiếp tục cuộc trò chuyện không?"
];

const LEVELS = [
  {
    id: 1,
    min: 0,
    range: "0–33 điểm",
    badge: "Mức 1 – Xanh",
    title: "Bộ não “xanh”",
    headline: "Chúc mừng! Bạn hiếm khi gặp các sai sót nhận thức trong sinh hoạt hằng ngày.",
    desc: [
      "Nhìn chung, tần suất bạn gặp các sai sót nhỏ về chú ý và trí nhớ trong 6 tháng gần đây ở mức thấp theo bảng tự đánh giá này. Tuy nhiên, việc tiếp xúc thường xuyên với video ngắn và những nội dung liên tục kích thích sự chú ý vẫn có thể khiến bạn dễ xao nhãng nếu không kiểm soát tốt thời gian."
    ],
    advice: "Hãy tiếp tục duy trì thói quen sử dụng mạng xã hội hợp lý, dành thời gian cho việc đọc sách, vận động và những hoạt động đòi hỏi sự tập trung. Phòng ngừa từ sớm luôn dễ dàng hơn thay đổi một thói quen đã hình thành lâu dài!",
    orientation: "Phòng ngừa và duy trì thói quen tốt.",
    plan: [
      {
        title: "1.1. Lựa chọn nội dung có ích",
        text: "Ưu tiên nội dung giáo dục, sáng tạo; hạn chế video ngắn lặp lại và nội dung gây xao nhãng."
      },
      {
        title: "1.2. Cân bằng thời gian",
        text: "Duy trì thói quen đọc sách, vận động thể chất và giao tiếp trực tiếp; không để mạng xã hội ảnh hưởng đến giờ học và giờ ngủ."
      },
      {
        title: "1.3. Chủ động kiểm soát",
        text: "Kiểm tra thời gian sử dụng điện thoại hằng tuần, tự điều chỉnh khi nhận thấy mình dành quá nhiều thời gian cho giải trí trực tuyến."
      }
    ]
  },
  {
    id: 2,
    min: 34,
    range: "34–66 điểm",
    badge: "Mức 2 – Chớm vàng",
    title: "Bộ não “chớm vàng”",
    headline: "Bạn đang gặp các sai sót nhận thức thường ngày ở mức cần được chú ý!",
    desc: [
      "Kết quả cho thấy bạn thỉnh thoảng bị phân tâm, quên hoặc sơ suất trong sinh hoạt hằng ngày. Nếu tình trạng này kéo dài, hiệu quả học tập, nghỉ ngơi và các hoạt động cần sự tập trung có thể bị ảnh hưởng."
    ],
    advice: "Hãy bắt đầu bằng việc giảm thời gian lướt mạng không cần thiết, tập trung vào một nhiệm vụ mà không sử dụng điện thoại và hình thành những thói quen tích cực hơn. Những thay đổi nhỏ nhưng được duy trì đều đặn có thể tạo ra khác biệt đáng kể.",
    adviceLead: "Đã đến lúc hành động!",
    orientation: "Nhận diện nguyên nhân và chủ động giảm thiểu tác động tiêu cực.",
    plan: [
      {
        title: "2.1. Nhận diện thói quen gây xao nhãng",
        goal: "Xác định những yếu tố khiến bản thân sử dụng mạng xã hội lâu hơn dự định.",
        steps: [
          "Kiểm tra báo cáo thời gian sử dụng điện thoại để xác định ứng dụng chiếm nhiều thời gian nhất.",
          "Trong 7 ngày, ghi lại thời điểm thường lướt mạng và lý do sử dụng, chẳng hạn buồn chán, căng thẳng hay muốn trì hoãn việc học.",
          "Cuối tuần, xác định 1–2 thói quen cần thay đổi trước tiên."
        ],
        expect: "Hiểu rõ nguyên nhân gây xao nhãng và có căn cứ để điều chỉnh hành vi."
      },
      {
        title: "2.2. Thiết lập giới hạn sử dụng",
        goal: "Giảm thời gian lướt mạng không cần thiết và hạn chế gián đoạn trong học tập.",
        steps: [
          "Dựa trên thời gian sử dụng hiện tại để đặt giới hạn phù hợp cho từng ứng dụng giải trí; giảm dần nếu thời lượng hiện tại quá cao.",
          "Tắt thông báo không cần thiết, để điện thoại ngoài tầm tay khi học và tránh mở video ngắn trong giờ nghỉ giữa các phiên học.",
          "Dành những khoảng thời gian cố định trong ngày cho mạng xã hội, thay vì mở ứng dụng bất cứ khi nào cảm thấy buồn chán."
        ],
        expect: "Giảm sử dụng điện thoại ngoài kế hoạch và tăng khả năng tập trung vào nhiệm vụ đang thực hiện."
      },
      {
        title: "2.3. Thay thế thói quen thiếu lành mạnh",
        goal: "Hình thành những hoạt động thay thế để hạn chế quay lại thói quen lướt mạng theo phản xạ.",
        steps: [
          "Lập lịch hằng ngày, dành thời gian cụ thể cho học tập, vận động, đọc sách và giải trí ngoài màn hình.",
          "Khi muốn mở mạng xã hội vì buồn chán, chủ động chuyển sang một hoạt động đã lựa chọn trước, chẳng hạn đi bộ, nghe nhạc hoặc trò chuyện với bạn bè.",
          "Cuối mỗi tuần, đánh giá thời gian sử dụng thiết bị, mức độ tập trung và khả năng hoàn thành công việc; điều chỉnh kế hoạch nếu chưa phù hợp."
        ],
        time: "Thử nghiệm trong 3–4 tuần và tiếp tục duy trì những thay đổi có hiệu quả.",
        expect: "Tăng khả năng tự kiểm soát và cân bằng giữa hoạt động trực tuyến với cuộc sống thực tế."
      }
    ]
  },
  {
    id: 3,
    min: 67,
    range: "67–100 điểm",
    badge: "Mức 3 – Báo động đỏ",
    title: "Bộ não “báo động đỏ”",
    headline: "Đã đến lúc nghiêm túc nhìn lại khả năng tập trung và thói quen sinh hoạt của bạn!",
    desc: [
      "Điểm số của bạn cho thấy bạn thường xuyên gặp các sai sót về chú ý và trí nhớ trong sinh hoạt hằng ngày. Nếu bạn hay bị phân tâm, lướt mạng lâu hơn dự định hoặc để điện thoại ảnh hưởng đến việc học và giấc ngủ, bạn nên chủ động thay đổi thói quen ngay từ bây giờ."
    ],
    orientation: "Điều chỉnh hành vi có hệ thống, tăng cường hỗ trợ và duy trì thay đổi lâu dài.",
    plan: [
      {
        title: "3.1. Kiểm soát các tác nhân gây xao nhãng",
        goal: "Giảm những yếu tố kích thích việc sử dụng mạng xã hội liên tục, tạo môi trường thuận lợi để lấy lại quyền chủ động.",
        ordered: true,
        steps: [
          "Kiểm tra báo cáo sử dụng thiết bị trong 7 ngày để xác định ứng dụng và thời điểm chiếm nhiều thời gian nhất.",
          "Tắt thông báo, loại bỏ ứng dụng gây xao nhãng khỏi màn hình chính hoặc tạm gỡ ứng dụng giải trí không cần thiết.",
          "Thiết lập các khung giờ không sử dụng điện thoại khi học, ăn uống và trước khi ngủ. Nếu cần, sử dụng chức năng giới hạn ứng dụng hoặc nhờ người thân hỗ trợ duy trì quy tắc.",
          "Sau một tuần, đánh giá mức độ phù hợp của các giới hạn và điều chỉnh nếu chúng ảnh hưởng đến việc học hoặc liên lạc cần thiết."
        ],
        expect: "Giảm những lần mở ứng dụng ngoài chủ đích và tạo điều kiện thuận lợi cho việc điều chỉnh thói quen."
      },
      {
        title: "3.2. Xây dựng kế hoạch điều chỉnh cá nhân",
        goal: "Thay đổi thói quen dựa trên nguyên nhân thực tế, thay vì chỉ dựa vào quyết tâm nhất thời.",
        ordered: true,
        steps: [
          { lead: "Theo dõi hành vi:", text: "Ghi lại thời gian sử dụng, mục đích mở ứng dụng, cảm xúc trước khi sử dụng và những công việc bị trì hoãn." },
          { lead: "Đặt mục tiêu cụ thể:", text: "Dựa trên mức sử dụng ban đầu, xác định mục tiêu giảm thời gian giải trí không cần thiết hoặc hoàn thành các phiên học không bị gián đoạn. Mục tiêu cần thực tế và có thể đo lường." },
          { lead: "Thiết lập lịch sinh hoạt:", text: "Phân chia thời gian cho học tập, nghỉ ngơi, vận động và giải trí; duy trì giờ ngủ tương đối ổn định." },
          { lead: "Xây dựng cơ chế hỗ trợ:", text: "Trao đổi với phụ huynh hoặc người đáng tin cậy để thống nhất cách hỗ trợ, chẳng hạn cùng xem lại tiến độ mỗi tuần và điều chỉnh kế hoạch khi gặp khó khăn." },
          { lead: "Đánh giá định kỳ:", text: "Sau mỗi tuần, so sánh kết quả với mục tiêu, xác định nguyên nhân chưa đạt và điều chỉnh cách thực hiện." }
        ],
        time: "Theo dõi hằng ngày trong ít nhất 4 tuần, sau đó tiếp tục duy trì những biện pháp phù hợp.",
        expect: "Hình thành kế hoạch điều chỉnh có căn cứ, cải thiện khả năng quản lý thời gian và giảm việc sử dụng thiết bị thiếu kiểm soát."
      },
      {
        title: "3.3. Theo dõi dài hạn và tìm kiếm hỗ trợ khi cần",
        goal: "Xử lý những khó khăn kéo dài trong việc kiểm soát sử dụng thiết bị và hạn chế ảnh hưởng đến học tập, giấc ngủ, sức khỏe tinh thần.",
        ordered: true,
        steps: [
          { lead: "Thiết lập các chỉ số theo dõi:", text: "Mỗi tuần ghi nhận thời gian sử dụng giải trí, khả năng hoàn thành nhiệm vụ học tập, giờ ngủ và mức độ ảnh hưởng đến sinh hoạt." },
          { lead: "Duy trì hoạt động thay thế:", text: "Xây dựng lịch vận động, đọc sách, giao tiếp trực tiếp và các sở thích ngoài màn hình. Chọn hoạt động phù hợp với điều kiện và sở thích cá nhân để dễ duy trì." },
          { lead: "Đánh giá tiến bộ theo tháng:", text: "So sánh các chỉ số với thời điểm bắt đầu để nhận biết thay đổi. Nếu chưa tiến bộ, xem xét nguyên nhân và điều chỉnh kế hoạch thay vì chỉ tiếp tục siết chặt giới hạn." },
          { lead: "Tìm kiếm hỗ trợ phù hợp:", text: "Nếu việc sử dụng thiết bị vẫn khó kiểm soát hoặc gây ảnh hưởng đáng kể đến học tập, giấc ngủ và các mối quan hệ, hãy trao đổi với phụ huynh, chuyên viên tâm lý hoặc nhân viên y tế để được đánh giá và hỗ trợ." },
          { lead: "Duy trì kết quả:", text: "Khi thói quen được cải thiện, tiếp tục kiểm tra định kỳ và giữ lại những quy tắc có hiệu quả, thay vì đột ngột loại bỏ toàn bộ giới hạn." }
        ],
        time: "Đánh giá hằng tuần trong giai đoạn đầu, sau đó theo dõi hằng tháng và điều chỉnh theo tình hình thực tế.",
        expect: "Duy trì những thay đổi tích cực, nhận diện sớm nguy cơ quay lại thói quen cũ và tìm được sự hỗ trợ phù hợp khi cần."
      }
    ]
  }
];

const $ = (id) => document.getElementById(id);
const QUIZ_PAGE = "lam-bai.html";
const RESULT_PAGE = "ket-qua.html";
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TOTAL = QUESTIONS.length;
const MAX_PER_QUESTION = Math.max(...SCALE.map((o) => o.points));
const MAX_SCORE = TOTAL * MAX_PER_QUESTION;

function readState() {
  const params = new URLSearchParams(location.hash.slice(1));
  const raw = params.get("a") || "";
  const list = new Array(TOTAL).fill(null);
  for (let i = 0; i < TOTAL; i++) {
    const n = parseInt(raw[i], 10);
    if (n >= 0 && n < SCALE.length) list[i] = n;
  }
  return { answers: list, q: parseInt(params.get("q"), 10) };
}

function encodeAnswers(list) {
  return "a=" + list.map((a) => (a === null ? "-" : a)).join("");
}

function pageUrl(file, list, q) {
  return file + "#" + encodeAnswers(list) + (Number.isInteger(q) ? "&q=" + q : "");
}

function saveAnswers(list, q) {
  const hash = "#" + encodeAnswers(list) + (Number.isInteger(q) ? "&q=" + q : "");
  try {
    history.replaceState(null, "", hash);
  } catch (e) {
    location.replace(hash);
  }
}

let answers = readState().answers;

function totalScore() {
  return answers.reduce((sum, a) => sum + SCALE[a].points, 0);
}

function pickLevel(score) {
  let found = LEVELS[0];
  LEVELS.forEach((lv) => { if (score >= lv.min) found = lv; });
  return found;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function initIntro() {
  const introText = $("introText");
  const startHint = $("startHint");
  const startBtn = $("startBtn");
  let startUnlocked = false;

  function updateIntroScroll() {
    if (!startUnlocked) {
      const bottom = introText.getBoundingClientRect().bottom;
      if (bottom <= window.innerHeight - 24) unlockStart();
    }
  }

  function unlockStart() {
    startUnlocked = true;
    startHint.hidden = true;
    startBtn.hidden = false;
    startBtn.classList.add("is-revealed");
  }

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; updateIntroScroll(); });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  const statRows = document.querySelectorAll(".stats li");
  if ("IntersectionObserver" in window && !REDUCED) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.35 });
    statRows.forEach((r) => io.observe(r));
  } else {
    statRows.forEach((r) => r.classList.add("is-in"));
  }

  startBtn.addEventListener("click", () => { location.href = QUIZ_PAGE; });

  updateIntroScroll();
}

function initQuiz() {
  const count = TOTAL;

  const readyScreen = $("screenReady");
  const quizScreen = $("screenQuiz");
  const readyTitle = $("readyTitle");
  const readyBtn = $("readyBtn");
  let started = false;

  const quizCount = $("quizCount");
  const quizBar = $("quizBar");
  const quizBarFill = $("quizBarFill");
  const questionText = $("questionText");
  const optionsBox = $("options");
  const backBtn = $("backBtn");
  const nextBtn = $("nextBtn");

  const startQ = readState().q;
  let current = startQ >= 0 && startQ < count ? startQ : 0;

  function updateProgress() {
    const pct = Math.round((answers.filter((a) => a !== null).length / TOTAL) * 100);
    quizBarFill.style.width = pct + "%";
    quizBar.setAttribute("aria-valuenow", pct);
  }

  function renderQuestion() {
    quizCount.textContent = "Câu " + (current + 1) + " / " + TOTAL;
    updateProgress();

    questionText.textContent = "Câu " + (current + 1) + ". " + QUESTIONS[current];

    optionsBox.innerHTML = "";
    if (!REDUCED) {
      [questionText, optionsBox].forEach((n) => { n.classList.remove("is-swap"); void n.offsetWidth; n.classList.add("is-swap"); });
    }
    SCALE.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", answers[current] === i ? "true" : "false");
      const focusIdx = answers[current] === null ? 0 : answers[current];
      btn.tabIndex = i === focusIdx ? 0 : -1;
      if (answers[current] === i) btn.classList.add("is-selected");

      const key = document.createElement("span");
      key.className = "option-key";
      key.textContent = String(i + 1);

      const label = document.createElement("span");
      label.textContent = opt.text;

      btn.append(key, label);
      btn.addEventListener("click", () => selectOption(i));
      optionsBox.appendChild(btn);
    });

    backBtn.disabled = current === 0;
    nextBtn.disabled = answers[current] === null;
    nextBtn.textContent = current < count - 1 ? "Câu tiếp theo" : "Xem kết quả";
  }

  function selectOption(i) {
    answers[current] = i;
    saveAnswers(answers, current);
    updateProgress();
    [...optionsBox.children].forEach((el2, idx) => {
      const on = idx === i;
      el2.tabIndex = on ? 0 : -1;
      el2.classList.toggle("is-selected", on);
      el2.setAttribute("aria-checked", on ? "true" : "false");
    });
    nextBtn.disabled = false;
  }

  function goNext() {
    if (answers[current] === null) return;
    if (current < count - 1) {
      current++;
      saveAnswers(answers, current);
      renderQuestion();
      questionText.focus({ preventScroll: true });
    } else {
      location.href = pageUrl(RESULT_PAGE, answers);
    }
  }

  function goBack() {
    if (current > 0) {
      current--;
      saveAnswers(answers, current);
      renderQuestion();
      questionText.focus({ preventScroll: true });
    }
  }

  nextBtn.addEventListener("click", goNext);
  backBtn.addEventListener("click", goBack);

  document.addEventListener("keydown", (e) => {
    if (!started) {
      if (e.key === "Enter" && document.activeElement.tagName !== "BUTTON") beginQuiz();
      return;
    }
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= SCALE.length) {
      selectOption(n - 1);
      optionsBox.children[n - 1].focus({ preventScroll: true });
    } else if (["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(e.key)) {
      e.preventDefault();
      const cur = answers[current];
      const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
      const next = cur === null ? (step > 0 ? 0 : SCALE.length - 1) : (cur + step + SCALE.length) % SCALE.length;
      selectOption(next);
      optionsBox.children[next].focus({ preventScroll: true });
    } else if (e.key === "Enter" && answers[current] !== null && document.activeElement.tagName !== "BUTTON") {
      goNext();
    }
  });

  window.addEventListener("pageshow", (e) => { if (e.persisted) location.reload(); });

  function beginQuiz() {
    started = true;
    readyScreen.hidden = true;
    quizScreen.hidden = false;
    window.scrollTo({ top: 0, behavior: "instant" });
    renderQuestion();
    questionText.focus({ preventScroll: true });
  }

  readyBtn.addEventListener("click", beginQuiz);

  const hasProgress = answers.some((a) => a !== null);
  if (Number.isInteger(startQ) || hasProgress) {
    if (!Number.isInteger(startQ)) {
      const firstMissing = answers.findIndex((a) => a === null);
      current = firstMissing === -1 ? count - 1 : firstMissing;
    }
    beginQuiz();
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
    readyTitle.focus({ preventScroll: true });
  }
}

function renderTotalSummary(box) {
  const score = totalScore();
  const level = pickLevel(score);

  const item = el("li", "group-result level-" + level.id);
  item.style.setProperty("--i", 0);

  const head = el("div", "gr-head");
  head.append(el("h3", "gr-name", "Tổng điểm CFQ"), levelBadge(level));

  const scoreLine = el("div", "gr-score");
  scoreLine.append(el("span", "gr-num", String(score)), el("span", "gr-max", "/ " + MAX_SCORE + " điểm"));

  const scale = el("div", "scale");
  scale.setAttribute("aria-hidden", "true");
  const track = el("div", "scale-track");
  const marker = el("span", "scale-marker");
  track.appendChild(marker);
  const ends = el("div", "scale-ends");
  ends.append(el("span", "", "0"), el("span", "", String(MAX_SCORE)));
  scale.append(track, ends);

  item.append(head, scoreLine, scale);
  box.appendChild(item);

  const numEl = scoreLine.firstChild;
  if (!REDUCED && score > 0) {
    numEl.textContent = "0";
    const t0 = performance.now() + 250, dur = 900;
    const tick = (t) => {
      const k = Math.min(Math.max((t - t0) / dur, 0), 1);
      numEl.textContent = String(Math.round(score * (1 - Math.pow(1 - k, 3))));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  marker.style.left = "0%";
  setTimeout(() => { marker.style.left = (score / MAX_SCORE) * 100 + "%"; }, REDUCED ? 0 : 350);
}

function renderLevelDetails(box) {
  const level = pickLevel(totalScore());
  const art = el("article", "level-detail level-" + level.id);

  art.append(
    el("p", "result-label", "Khoảng điểm " + level.range.replace(" điểm", "")),
    el("h2", "level-title", "Mức " + level.id + " · " + level.title),
    el("p", "level-headline", level.headline)
  );
  level.desc.forEach((t) => art.appendChild(el("p", "result-desc", t)));

  if (level.advice) {
    const p = el("p", "result-desc");
    const lead = el("strong", "", level.adviceLead || "Lời khuyên dành cho bạn:");
    p.append(lead, " " + level.advice);
    art.appendChild(p);
  }

  const orient = el("p", "orientation");
  orient.append(el("strong", "", "Định hướng:"), " " + level.orientation);
  art.appendChild(orient);

  level.plan.forEach((block) => {
    const sec = el("section", "plan-block");
    sec.appendChild(el("h3", "tips-title", block.title));

    if (block.text) sec.appendChild(el("p", "", block.text));

    if (block.goal) {
      const p = el("p", "plan-line");
      p.append(el("strong", "", "Mục tiêu:"), " " + block.goal);
      sec.appendChild(p);
    }

    if (block.steps) {
      sec.appendChild(el("p", "plan-label", "Cách thực hiện:"));
      const list = el(block.ordered ? "ol" : "ul", "tips");
      block.steps.forEach((st) => {
        const li = document.createElement("li");
        if (typeof st === "string") {
          li.textContent = st;
        } else {
          li.append(el("strong", "", st.lead), " " + st.text);
        }
        list.appendChild(li);
      });
      sec.appendChild(list);
    }

    if (block.time) {
      const p = el("p", "plan-line");
      p.append(el("strong", "", "Thời gian áp dụng:"), " " + block.time);
      sec.appendChild(p);
    }
    if (block.expect) {
      const p = el("p", "plan-line");
      p.append(el("strong", "", "Kết quả mong đợi:"), " " + block.expect);
      sec.appendChild(p);
    }

    art.appendChild(sec);
  });

  box.appendChild(art);
}

const BADGE_ART = {
  1: '<path d="M12 21V12"/><path class="a" d="M12 13C7 13 4.500 10 4.500 6.500C9 6.500 12 9 12 13Z"/><path class="b" d="M12 11C12 7.500 14.500 5 19.500 5C19.500 9 16.500 11.500 12 11Z"/>',
  2: '<circle class="a" cx="9" cy="9" r="4"/><path d="M9 2v1.500M2 9h1.500M4 4l1 1M14 4l-1 1"/><path class="b" d="M7 20a4 4 0 0 1 .6-7.900A5 5 0 0 1 17.300 13 3.500 3.500 0 0 1 17 20Z"/>',
  3: '<path class="b" d="M6.500 14a4 4 0 0 1 .6-7.900A5 5 0 0 1 16.800 7 3.500 3.500 0 0 1 16.500 14Z"/><path class="a" d="M12.500 12l-3 5h3L11 22l4.500-6.500h-3l1.500-3.500z"/>'
};
function levelBadge(level) {
  const badge = el("span", "level-badge");
  badge.innerHTML = '<svg class="badge-art" viewBox="0 0 24 24" aria-hidden="true">' + (BADGE_ART[level.id] || "") + "</svg>";
  badge.append(level.badge);
  return badge;
}

function initResult() {
  const firstMissing = answers.findIndex((a) => a === null);
  if (firstMissing !== -1) {
    if (answers.every((a) => a === null)) {
      location.replace("index.html");
    } else {
      location.replace(pageUrl(QUIZ_PAGE, answers, firstMissing));
    }
    return;
  }

  renderTotalSummary($("groupResults"));
  renderLevelDetails($("levelDetails"));

  $("retryBtn").addEventListener("click", () => { location.href = QUIZ_PAGE; });
  $("homeBtn").addEventListener("click", () => { location.href = "index.html"; });

  window.scrollTo({ top: 0, behavior: "instant" });
  $("resultTitle").focus({ preventScroll: true });
}

function addDecor() {
  const layer = document.createElement("div");
  layer.className = "decor";
  layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = '<svg class="leaf-a" viewBox="0 0 160 220" aria-hidden="true"><path d="M80 216C78 150 92 90 72 8"/><path d="M79 168C55 163 40 148 38 128C60 130 76 144 79 168Z"/><path d="M81 150C104 145 120 130 122 110C100 112 84 126 81 150Z"/><path d="M79 118C58 112 46 98 44 80C64 82 77 95 79 118Z"/><path d="M80 96C100 90 112 76 114 58C94 60 82 74 80 96Z"/><path d="M76 62C62 56 54 44 54 30C68 32 76 44 76 62Z"/></svg>' + '<svg class="leaf-b" viewBox="0 0 160 220" aria-hidden="true"><path d="M80 216C78 150 92 90 72 8"/><path d="M79 168C55 163 40 148 38 128C60 130 76 144 79 168Z"/><path d="M81 150C104 145 120 130 122 110C100 112 84 126 81 150Z"/><path d="M79 118C58 112 46 98 44 80C64 82 77 95 79 118Z"/><path d="M80 96C100 90 112 76 114 58C94 60 82 74 80 96Z"/><path d="M76 62C62 56 54 44 54 30C68 32 76 44 76 62Z"/></svg>';
  document.body.prepend(layer);
}

(function boot() {
  const page = document.body.dataset.page;
  document.documentElement.classList.add("js");
  addDecor();
  if (page === "intro") initIntro();
  else if (page === "quiz") initQuiz();
  else if (page === "result") initResult();
})();
