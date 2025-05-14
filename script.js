const questions = [
    {
      question: "Qui est le pokémon le plus fort",
      reponses: ["Pikachu", "Dracaufeu", "Canarticheau", "Simabraz"],
      bonneReponse: 1
    },
    {
      question: "Combien y'a t'il eu de final fantasy",
      reponses: ["16", "19", "11", "Trop"],
      bonneReponse: 0
    },
    {
        question: "Quelle ville est la plus peuplée du monde",
        reponses: ["Londres", "New York", "Paris", "Tokyo"],
        bonneReponse: 3
      }
  ];
  
  let questionIndex = 0;
  let score = 0;
  
  const accueil = document.getElementById("accueil");
  const quiz = document.getElementById("quiz");
  const resultat = document.getElementById("resultat");
  const questionText = document.getElementById("question-text");
  const reponsesDiv = document.getElementById("reponses");
  const btnCommencer = document.getElementById("btnCommencer");
  const btnSuivant = document.getElementById("btnSuivant");
  const btnValider = document.getElementById("btnValider");
  const scoreText = document.getElementById("score");
  
  btnCommencer.addEventListener("click", () => {
    accueil.style.display = "none";
    quiz.style.display = "block";
    afficherQuestion();
  });
  
  btnSuivant.addEventListener("click", () => {
    questionIndex++;
    if (questionIndex < questions.length) {
      afficherQuestion();
    } else {
      quiz.style.display = "none";
      resultat.style.display = "block";
      scoreText.textContent = `Votre score est ${score}/${questions.length}`;
    }
  });
  
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
        document.querySelectorAll("#reponses button").forEach(b => b.disabled = true);
      });
      reponsesDiv.appendChild(bouton);
    });
  
    btnSuivant.style.display = "none";
  }
  