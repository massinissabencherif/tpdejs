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
    {
      question: "Quelle est la capitale du Canada ?",
      reponses: ["Toronto", "Vancouver", "Ottawa", "Montréal"],
      bonneReponse: 2,
    },
    {
      question: "Quel est l'élément chimique représenté par le symbole 'Fe' ?",
      reponses: ["Fer", "Fluor", "Francium", "Phosphore"],
      bonneReponse: 0,
    },
    {
      question: "Quel est l’auteur de '1984' ?",
      reponses: ["George Orwell", "Aldous Huxley", "Stephen King", "Ray Bradbury"],
      bonneReponse: 0,
    },
    {
      question: "Quel pays a remporté la Coupe du Monde 2018 ?",
      reponses: ["Brésil", "Allemagne", "France", "Croatie"],
      bonneReponse: 2,
    },
    {
      question: "Quelle planète est la plus proche du Soleil ?",
      reponses: ["Vénus", "Terre", "Mars", "Mercure"],
      bonneReponse: 3,
    },
  ];
  

const questionText = document.getElementById("question");
const reponsesDiv = document.getElementById("reponses");
const btnSuivant = document.getElementById("btnSuivant");
const btnValider = document.getElementById("btnValider");
const progressBar = document.getElementById("progressBar");

function afficherQuestion() {
  const questionActuelle = questions[questionIndex];
  questionText.textContent = questionActuelle.question;
  reponsesDiv.innerHTML = "";

  questionActuelle.reponses.forEach((reponse, index) => {
    const button = document.createElement("button");
    button.textContent = reponse;
    button.addEventListener("click", () => {
      document.querySelectorAll("#reponses button").forEach(btn => btn.disabled = true);
      button.style.backgroundColor = index === questionActuelle.bonneReponse ? "green" : "red";
      if (index === questionActuelle.bonneReponse) score++;
      btnSuivant.style.display = "inline-block";
    });
    reponsesDiv.appendChild(button);
  });

  btnValider.style.display = "inline-block";
  btnSuivant.style.display = "none";

  updateProgressBar();
}

btnSuivant.addEventListener("click", () => {
  questionIndex++;
  if (questionIndex < questions.length) {
    afficherQuestion();
  } else {
    afficherResultat();
  }
});

btnValider.addEventListener("click", () => {
  document.querySelectorAll("#reponses button").forEach(btn => btn.disabled = true);
  afficherResultat();
});

function afficherResultat() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("resultat").style.display = "block";
  document.getElementById("score").textContent = `Votre score est de ${score}/${questions.length}`;
  updateProgressBar(100);
}

document.getElementById("btnCommencer").addEventListener("click", function () {
  document.getElementById("accueil").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  updateProgressBar(0);
  afficherQuestion();
});

function updateProgressBar(forcePercent = null) {
  const percent = forcePercent !== null
    ? forcePercent
    : (questionIndex / questions.length) * 100;
  progressBar.style.width = `${percent}%`;
}
