// Import de la fonction prompt depuis le fichier prompt.js
import { prompt } from "./prompt.js";

// Affichage des instructions et des règles du jeu
console.log(`
Bienvenue au jeu de devinettes de nombres ! 🎮

Règles :
1. Le système générera un nombre aléatoire entre 0 et 100.
2. Votre tâche est de deviner ce nombre.
3. Entrez un nombre lorsque vous y êtes invité.
4. Si votre supposition est trop haute ou trop basse, vous en serez informé, et vous pourrez deviner à nouveau.
5. Le jeu continue jusqu'à ce que vous deviniez le bon nombre.

Commençons ! 🚀`);

// Définition de la fonction principale du jeu
const game = () => {
  // Fonction pour générer un nombre aléatoire entre min et max
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // Génération du nombre cible aléatoire entre 0 et 100
  const targetNumber = getRandomNumber(0, 100);

  // Fonction pour vérifier si un nombre est valide (entre 0 et 100)
  const isValidNumber = (number) => {
    return !Number.isNaN(number) && number >= 0 && number <= 100;
  };

  let attemptsCount = 0; // Variable pour stocker le total des tentatives

  // Fonction pour jouer au jeu de devinettes
  const playGuessingGame = () => {
    // Demande à l'utilisateur de saisir un nombre
    const guessNumber = Number(prompt("Enter the number : "));
    attemptsCount += 1; // Incrémente le compteur de tentatives

    // Vérifie si le nombre saisi est valide
    if (!isValidNumber(guessNumber)) {
      console.log("Erreur : Le nombre doit être compris entre 0 et 100");
      playGuessingGame(); // Redémarre le jeu
      return;
    }

    // Compare le nombre saisi avec le nombre cible
    if (guessNumber > targetNumber) {
      console.log("📈 Le nombre entré est **trop grand**");
      playGuessingGame(); // Redémarre le jeu
      return;
    }
    if (guessNumber < targetNumber) {
      console.log("📉 Le nombre entré est **trop petit**");
      playGuessingGame(); // Redémarre le jeu
      return;
    }
    if (guessNumber === targetNumber) {
      console.log(`🟢 Bravo ! le nombre aléatoire était bien ${targetNumber}.`);
      console.log(`✨ Vous avez réussi en ${attemptsCount} tentatives.`);
    }
  };

  // Fonction pour redémarrer le jeu
  const restartGame = () => {
    // Demande à l'utilisateur s'il veut rejouer
    const choice = prompt("Voulez-vous rejouer ? (O/N) : ");

    if (choice.toUpperCase() === "O") {
      console.log("\n\n");
      // Relance le jeu
      game();
    } else if (choice.toUpperCase() === "N") {
      console.log("Merci et à bientôt !");
    } else {
      console.log("Choix invalide. Entrez O ou N.");
      restartGame(); // Redemande le choix si la saisie est invalide
    }
  };

  // Affichage du nombre cible pour les tests
  console.log(targetNumber);
  // Début du jeu
  playGuessingGame();
  // Redémarrage du jeu après la fin de la partie
  restartGame();
};

// Appel de la fonction principale pour démarrer le jeu
game();
