const quizData = [
  {
    question: "1. soru buraya gelecek",
    a: "seçenek 1-a",
    b: "seçenek 1-b",
    c: "seçenek 1-c",
    d: "seçenek 1-d",
    e: "seçenek 1-e",
    correct: "a",
  },
  {
    question: "2. soru buraya gelecek",
    a: "seçenek 2-a",
    b: "seçenek 2-b",
    c: "seçenek 2-c",
    d: "seçenek 2-d",
    e: "seçenek 2-e",
    correct: "b",
  },
  {
    question: "3. soru buraya gelecek",
    a: "seçenek 3-a",
    b: "seçenek 3-b",
    c: "seçenek 3-c",
    d: "seçenek 3-d",
    e: "seçenek 3-e",
    correct: "c",
  },
  {
    question: "4. soru buraya gelecek",
    a: "seçenek 4-a",
    b: "seçenek 4-b",
    c: "seçenek 4-c",
    d: "seçenek 4-d",
    e: "seçenek 4-e",
    correct: "d",
  },
  {
    question: "5. soru buraya gelecek",
    a: "seçenek 5-a",
    b: "seçenek 5-b",
    c: "seçenek 5-c",
    d: "seçenek 5-d",
    e: "seçenek 5-e",
    correct: "e",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  deselectedAnswers();
  questionEl.innerText = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
  e_text.innerHTML = currentQuizData.e;
}
function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene </button>
      `;
    }
  }
});
