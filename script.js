const SCALE = [
  { text: "Không bao giờ", points: 0 },
  { text: "Hiếm khi", points: 1 },
  { text: "Thỉnh thoảng", points: 2 },
  { text: "Thường xuyên", points: 3 },
  { text: "Luôn luôn", points: 4 }
];

const GROUPS = [
  {
    name: "Biên độ tập trung",
    en: "Attention Span",
    questions: [
      "Bạn có xu hướng tự động mở điện thoại ra lướt khi đang làm việc dù không có thông báo nào không?",
      "Bạn có cảm thấy mất kiên nhẫn và nhấn “bỏ qua” hoặc tua nhanh khi xem các video dài hơn 1 phút không?",
      "Khi ngồi im lặng mà không có điện thoại (ví dụ: chờ xe buýt, xếp hàng), bạn có cảm thấy bồn chồn và bứt rứt không?"
    ]
  },
  {
    name: "Tư duy & Ngôn ngữ",
    en: "Cognitive & Language",
    questions: [
      "Bạn có xu hướng thường xuyên sử dụng các từ lóng trên mạng trong các cuộc trò chuyện không?",
      "Khi gặp một vấn đề cần giải quyết, bạn có xu hướng tìm kiếm câu trả lời ngắn gọn ngay trên mạng thay vì tự suy nghĩ, lập luận không?",
      "Bạn có cảm thấy khó khăn khi phải diễn đạt một ý nghĩ phức tạp hoặc một cảm xúc của bản thân thành câu từ mạch lạc không?"
    ]
  },
  {
    name: "Kiểm soát xung động",
    en: "Impulse Control",
    questions: [
      "Bạn có từng rơi vào trạng thái định mở điện thoại lên xem giờ/check lịch học nhưng lại vô thức bấm vào TikTok/Reels/Shorts rồi lướt liên tục cả tiếng đồng hồ không?",
      "Bạn có cảm thấy rất khó để tắt điện thoại đi ngay cả khi mắt đã mỏi và bản thân biết mình cần phải đi ngủ không?",
      "Bạn có cảm giác lo lắng, bồn chồn hoặc sợ mình trở thành “người tối cổ” nếu không cập nhật các trào lưu (trends) mới nhất trên mạng không?"
    ]
  },
  {
    name: "Sức khỏe tinh thần & Cảm xúc",
    en: "Mental Health",
    questions: [
      "Sau một khoảng thời gian dài lướt mạng xã hội, bạn có cảm thấy đầu óc trống rỗng, mệt mỏi hoặc mất động lực làm việc khác không?",
      "Bạn có cảm thấy thế giới xung quanh mình (trường học, gia đình) trở nên nhàm chán hơn so với thế giới trên mạng xã hội không?",
      "Bạn có dễ nổi cáu, bực mình khi bị ai đó ngắt quãng lúc đang xem video ngắn không?"
    ]
  },
  {
    name: "Chức năng điều hành & Đời sống",
    en: "Executive Functioning",
    questions: [
      "Bạn có thường xuyên trì hoãn việc làm bài tập về nhà hoặc các nhiệm vụ quan trọng chỉ để dành thời gian lướt mạng không?",
      "Thói quen sử dụng mạng xã hội có đang làm bạn bị thiếu ngủ, thức khuya hoặc mệt mỏi không?",
      "Bạn có cảm thấy kết quả học tập hoặc trí nhớ của mình bị giảm sút từ khi sử dụng các nền tảng video ngắn không?"
    ]
  }
];

const LEVELS = [
  {
    id: 1,
    min: 0,
    range: "0–4 điểm",
    badge: "Mức 1 – Xanh",
    title: "Bộ não “xanh”",
    headline: "Chúc mừng! Bạn đang kiểm soát khá tốt thói quen sử dụng mạng xã hội.",
    desc: [
      "Nhìn chung, việc sử dụng nội dung số của bạn chưa cho thấy nhiều dấu hiệu đáng lo ngại theo bảng tự đánh giá này. Tuy nhiên, việc tiếp xúc thường xuyên với video ngắn và những nội dung liên tục kích thích sự chú ý vẫn có thể khiến bạn dễ xao nhãng nếu không kiểm soát tốt thời gian."
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
    min: 5,
    range: "5–8 điểm",
    badge: "Mức 2 – Chớm vàng",
    title: "Bộ não “chớm vàng”",
    headline: "Bạn đang có một số thói quen sử dụng mạng xã hội cần được chú ý!",
    desc: [
      "Kết quả cho thấy bạn có thể đang dành nhiều thời gian cho nội dung trực tuyến hoặc gặp khó khăn trong việc kiểm soát thói quen sử dụng. Nếu tình trạng này kéo dài, thời gian dành cho học tập, nghỉ ngơi và các hoạt động cần sự tập trung có thể bị thu hẹp."
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
    min: 9,
    range: "9–12 điểm",
    badge: "Mức 3 – Báo động đỏ",
    title: "Bộ não “báo động đỏ”",
    headline: "Đã đến lúc nghiêm túc nhìn lại thói quen sử dụng mạng xã hội của bạn!",
    desc: [
      "Điểm số của bạn cho thấy nhiều dấu hiệu cần được chú ý trong cách sử dụng nội dung số. Nếu bạn thường xuyên lướt mạng lâu hơn dự định, khó dừng lại hoặc để điện thoại ảnh hưởng đến việc học và giấc ngủ, bạn nên chủ động thay đổi thói quen ngay từ bây giờ."
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
const IN_SUBFOLDER = document.body.dataset.page === "group";
const ROOT = IN_SUBFOLDER ? "../" : "";
const GROUP_DIR = IN_SUBFOLDER ? "" : "nhom_cau_hoi/";
const groupPage = (n) => GROUP_DIR + "nhom-" + n + ".html";
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TOTAL = GROUPS.reduce((s, g) => s + g.questions.length, 0);
const MAX_PER_QUESTION = Math.max(...SCALE.map((o) => o.points));

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

function saveAnswers(list) {
  const hash = "#" + encodeAnswers(list);
  try {
    history.replaceState(null, "", hash);
  } catch (e) {
    location.replace(hash);
  }
}

let answers = readState().answers;

function groupOffset(groupIndex) {
  return GROUPS.slice(0, groupIndex).reduce((s, g) => s + g.questions.length, 0);
}

function groupScore(groupIndex) {
  const start = groupOffset(groupIndex);
  let sum = 0;
  GROUPS[groupIndex].questions.forEach((_, i) => {
    sum += SCALE[answers[start + i]].points;
  });
  return sum;
}

function groupMax(groupIndex) {
  return GROUPS[groupIndex].questions.length * MAX_PER_QUESTION;
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

  startBtn.addEventListener("click", () => { location.href = groupPage(1); });

  updateIntroScroll();
}

function initGroup() {
  const groupNo = parseInt(document.body.dataset.group, 10);
  const groupIndex = groupNo - 1;
  const group = GROUPS[groupIndex];
  const count = group.questions.length;
  const offset = groupOffset(groupIndex);
  const isLastGroup = groupNo === GROUPS.length;

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

  function renderQuestion() {
    const overall = offset + current;

    quizCount.textContent = "Câu " + (overall + 1) + " / " + TOTAL;
    const pct = Math.round((answers.filter((a) => a !== null).length / TOTAL) * 100);
    quizBarFill.style.width = pct + "%";
    quizBar.setAttribute("aria-valuenow", pct);

    questionText.textContent = group.questions[current];

    optionsBox.innerHTML = "";
    if (!REDUCED) {
      [questionText, optionsBox].forEach((n) => { n.classList.remove("is-swap"); void n.offsetWidth; n.classList.add("is-swap"); });
    }
    SCALE.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", answers[overall] === i ? "true" : "false");
      const focusIdx = answers[overall] === null ? 0 : answers[overall];
      btn.tabIndex = i === focusIdx ? 0 : -1;
      if (answers[overall] === i) btn.classList.add("is-selected");

      const key = document.createElement("span");
      key.className = "option-key";
      key.textContent = String(i + 1);

      const label = document.createElement("span");
      label.textContent = opt.text;

      btn.append(key, label);
      btn.addEventListener("click", () => selectOption(i));
      optionsBox.appendChild(btn);
    });

    backBtn.disabled = groupNo === 1 && current === 0;
    nextBtn.disabled = answers[overall] === null;
    if (current < count - 1) nextBtn.textContent = "Câu tiếp theo";
    else nextBtn.textContent = isLastGroup ? "Xem kết quả" : "Nhóm tiếp theo";
  }

  function selectOption(i) {
    answers[offset + current] = i;
    saveAnswers(answers);
    const done = Math.round((answers.filter((a) => a !== null).length / TOTAL) * 100);
    quizBarFill.style.width = done + "%";
    quizBar.setAttribute("aria-valuenow", done);
    [...optionsBox.children].forEach((el2, idx) => {
      const on = idx === i;
      el2.tabIndex = on ? 0 : -1;
      el2.classList.toggle("is-selected", on);
      el2.setAttribute("aria-checked", on ? "true" : "false");
    });
    nextBtn.disabled = false;
  }

  function goNext() {
    if (answers[offset + current] === null) return;
    if (current < count - 1) {
      current++;
      renderQuestion();
      questionText.focus({ preventScroll: true });
    } else if (!isLastGroup) {
      location.href = pageUrl(groupPage(groupNo + 1), answers);
    } else {
      location.href = pageUrl(ROOT + "ket-qua.html", answers);
    }
  }

  function goBack() {
    if (current > 0) {
      current--;
      renderQuestion();
      questionText.focus({ preventScroll: true });
    } else if (groupNo > 1) {
      const prev = GROUPS[groupIndex - 1];
      location.href = pageUrl(groupPage(groupNo - 1), answers, prev.questions.length - 1);
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
      const cur = answers[offset + current];
      const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
      const next = cur === null ? (step > 0 ? 0 : SCALE.length - 1) : (cur + step + SCALE.length) % SCALE.length;
      selectOption(next);
      optionsBox.children[next].focus({ preventScroll: true });
    } else if (e.key === "Enter" && answers[offset + current] !== null && document.activeElement.tagName !== "BUTTON") {
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

  const hasProgress = answers.slice(offset, offset + count).some((a) => a !== null);
  if (Number.isInteger(startQ) || hasProgress) {
    beginQuiz();
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
    readyTitle.focus({ preventScroll: true });
  }
}

function renderGroupSummary(box) {
  GROUPS.forEach((g, gi) => {
    const score = groupScore(gi);
    const max = groupMax(gi);
    const level = pickLevel(score);

    const item = el("li", "group-result level-" + level.id);
    item.style.setProperty("--i", gi);

    const head = el("div", "gr-head");
    head.append(
      el("h3", "gr-name", "Nhóm " + (gi + 1) + " · " + g.name),
      levelBadge(level)
    );

    const scoreLine = el("div", "gr-score");
    scoreLine.append(el("span", "gr-num", String(score)), el("span", "gr-max", "/ " + max + " điểm"));

    const scale = el("div", "scale");
    scale.setAttribute("aria-hidden", "true");
    const track = el("div", "scale-track");
    const marker = el("span", "scale-marker");
    track.appendChild(marker);
    const ends = el("div", "scale-ends");
    ends.append(el("span", "", "0"), el("span", "", String(max)));
    scale.append(track, ends);

    item.append(head, scoreLine, scale);
    box.appendChild(item);

    const numEl = scoreLine.firstChild;
    if (!REDUCED && score > 0) {
      numEl.textContent = "0";
      const t0 = performance.now() + gi * 110 + 250, dur = 900;
      const tick = (t) => {
        const k = Math.min(Math.max((t - t0) / dur, 0), 1);
        numEl.textContent = String(Math.round(score * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    marker.style.left = "0%";
    const pos = max === 0 ? 100 : (score / max) * 100;
    setTimeout(() => { marker.style.left = pos + "%"; }, REDUCED ? 0 : 350 + gi * 110);
  });
}

function renderLevelDetails(box) {
  const byLevel = new Map();
  GROUPS.forEach((g, gi) => {
    const level = pickLevel(groupScore(gi));
    if (!byLevel.has(level.id)) byLevel.set(level.id, { level, groups: [] });
    byLevel.get(level.id).groups.push("Nhóm " + (gi + 1) + " (" + g.name + ")");
  });

  [...byLevel.values()]
    .sort((a, b) => b.level.id - a.level.id)
    .forEach(({ level, groups }) => {
      const art = el("article", "level-detail level-" + level.id);

      art.append(
        el("p", "result-label", "Điểm nhóm " + level.range.replace(" điểm", "") + " · Áp dụng cho: " + groups.join(", ")),
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
          block.steps.forEach((s) => {
            const li = document.createElement("li");
            if (typeof s === "string") {
              li.textContent = s;
            } else {
              li.append(el("strong", "", s.lead), " " + s.text);
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
    });
}

/* Huy hiệu mức có hình vẽ nhỏ: mầm cây (1), mặt trời sau mây (2), mây dông (3) */
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
      let g = 0;
      while (firstMissing >= groupOffset(g + 1) && g < GROUPS.length - 1) g++;
      location.replace(pageUrl(groupPage(g + 1), answers));
    }
    return;
  }

  renderGroupSummary($("groupResults"));
  renderLevelDetails($("levelDetails"));

  $("retryBtn").addEventListener("click", () => { location.href = groupPage(1); });
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
  else if (page === "group") initGroup();
  else if (page === "result") initResult();
})();
