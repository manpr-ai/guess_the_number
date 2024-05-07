import { prompt } from "./prompt.js";
console.log(`
Bienvenue au jeu de devinettes de nombres ! 🎮

Règles :
1. Le système générera un nombre aléatoire entre 0 et 100.
2. Votre tâche est de deviner ce nombre.
3. Entrez un nombre lorsque vous y êtes invité.
4. Si votre supposition est trop haute ou trop basse, vous en serez informé, et vous pourrez deviner à nouveau.
5. Le jeu continue jusqu'à ce que vous deviniez le bon nombre.

Commençons ! 🚀`);

const game = () => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const targetNumber = getRandomNumber(1, 100);

  const isValidNumber = (number) => {
    return !Number.isNaN(number) && number > 0 && number <= 100;
  };

  let attemptsCount = 0; // Variable pour stocker le total des tentatives

  const playGuessingGame = () => {
    const guessNumber = Number(prompt("Enter the number : "));
    attemptsCount += 1;
    if (!isValidNumber(guessNumber)) {
      console.log("Erreur : Le nombre doit etre compris entre 0 et 100");
      playGuessingGame();
      return;
    }
    if (guessNumber > targetNumber) {
      console.log("📈 Le nombre entré est **trop grand**");
      playGuessingGame();
      return;
    }
    if (guessNumber < targetNumber) {
      console.log("📉 Le nombre entré est **trop petit**");
      playGuessingGame();
      return;
    }
    if (guessNumber === targetNumber) {
      console.log(`🟢 Bravo ! le nombre aléatoire était bien ${targetNumber}.`);
      console.log(`✨ Vous avez réussi en ${attemptsCount} tentatives.`);
    }
  };

  const restartGame = () => {
    const choice = prompt("Voulez vous rejouer ? (O/N) : ");

    if (choice.toUpperCase() === "O") {
      console.log("\n\n");
      // Game va relancer la partie
      game();
    } else if (choice.toUpperCase() === "N") {
      console.log("Merci et à bientot !");
    } else {
      console.log("Invalid choice. Please enter O or N.");
      restartGame();
    }
  };

  console.log(targetNumber);
  playGuessingGame();
  restartGame();
};

game();
