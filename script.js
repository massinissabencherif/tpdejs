let questionIndex = 0;
let score = 0;

const questions = [
  {
    question: "Combien y'a t-il de jeux Final Fantasy ?",
    reponses: ["16", "14", "19", "Trop"],
    bonneReponse: 0,
  },
  {
    question: "Qui est le meilleur ami de Son Goku",
    reponses: ["Bulma", "Végéta", "Krilin", "Nicolas Anelka"],
    bonneReponse: 2,
  },
  {
    question: "Qui a écrit 'Les Misérables' ?",
    reponses: ["Victor Hugo", "Moi", "ChatGPT", "Voltaire"],
    bonneReponse: 0,
  },
  {
    question: "Quel plat est le préféré des français ?",
    reponses: ["Pizza", "Sushi", "Couscous", "Boeuf bourguignon"],
    bonneReponse: 2,
  },
];

const questionText = document.getElementById("question");
const reponsesDiv = document.getElementById("reponses");
const btnSuivant = document.getElementById("btnSuivant");
const btnValider = document.getElementById("btnValider");

function afficherQuestion() {
  const questionActuelle = questions[questionIndex];
  questionText.textContent = questionActuelle.question;
  reponsesDiv.innerHTML = "";

  questionActuelle.reponses.forEach((rep, index) => {
    const bouton = document.createElement("button");
    bouton.textContent = rep;
    bouton.addEventListener("click", () => {
      if (index === questionActuelle.bonneReponse) {
        score++;
      }
      btnSuivant.style.display = "inline-block";
      document.querySelectorAll("#reponses button").forEach((b) => (b.disabled = true));
    });
    reponsesDiv.appendChild(bouton);
  });

  btnValider.style.display = "inline-block";
  btnSuivant.style.display = "none";
}

btnSuivant.addEventListener("click", () => {
  questionIndex++;
  if (questionIndex < questions.length) {
    afficherQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultat").style.display = "block";
    document.getElementById("score").textContent = `Votre score est : ${score} / ${questions.length}`;
  }
});

btnValider.addEventListener("click", () => {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("resultat").style.display = "block";
  document.getElementById("score").textContent = `Votre score est : ${score} / ${questions.length}`;
});

afficherQuestion();