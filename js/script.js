document.addEventListener("DOMContentLoaded", function () {
  // Récupération des éléments HTML
  const guessInput = document.getElementById("guessInput"); // Récupère l'élément input pour la saisie du nombre
  const result = document.getElementById("result"); // Récupère l'élément où afficher le résultat
  const guessButton = document.getElementById("guessButton"); // Récupère le bouton pour soumettre la devinette
  const restartButton = document.getElementById("restartButton"); // Récupère le bouton pour redémarrer le jeu

  // Fonction pour générer un nombre aléatoire entre min et max
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Retourne un nombre aléatoire entre min et max inclus
  };

  // Génération du nombre cible aléatoire entre 0 et 100
  const targetNumber = getRandomNumber(0, 100); // Génère un nombre cible aléatoire

  // Fonction pour vérifier si un nombre est valide (entre 0 et 100)
  const isValidNumber = (number) => {
    return !Number.isNaN(number) && number >= 0 && number <= 100; // Vérifie si le nombre est un nombre valide entre 0 et 100
  };

  let attemptsCount = 0; // Variable pour stocker le total des tentatives

  // Fonction pour jouer au jeu de devinettes
  const playGuessingGame = () => {
    // Demande à l'utilisateur de saisir un nombre
    const guessNumber = parseInt(guessInput.value); // Convertit la saisie en nombre entier
    attemptsCount += 1; // Incrémente le compteur de tentatives

    // Vérifie si le nombre saisi est valide
    if (!isValidNumber(guessNumber)) {
      result.innerHTML = "Erreur : Le nombre doit être compris entre 0 et 100"; // Affiche un message d'erreur
      guessInput.style.border = "1.5px solid red"; // Change la bordure de l'input en rouge
      return; // Arrête l'exécution de la fonction
    }

    // Compare le nombre saisi avec le nombre cible
    if (guessNumber > targetNumber) {
      result.innerHTML = "📈 Le nombre entré est **trop grand**"; // Affiche un message lorsque le nombre est trop grand
    } else if (guessNumber < targetNumber) {
      result.innerHTML = "📉 Le nombre entré est **trop petit**"; // Affiche un message lorsque le nombre est trop petit
    } else {
      guessInput.style.border = "1.5px solid #9ebc9e"; // Change la bordure de l'input en vert
      result.innerHTML = `<span>🟢 Bravo ! Le nombre aléatoire était bien ${targetNumber}.</span><br>`; // Affiche un message de réussite avec le nombre cible
      result.innerHTML += `<span>✨ Vous avez réussi en ${attemptsCount} tentatives.</span>`; // Affiche le nombre de tentatives réussies
      guessButton.style.display = "none"; // Cache le bouton après avoir trouvé le nombre
      restartButton.style.display = "inline-block"; // Affiche le bouton "Rejouer"
      return; // Arrête l'exécution de la fonction
    }
  };

  // Fonction pour redémarrer le jeu
  const restartGame = () => {
    // Rafraîchit la page pour redémarrer le jeu
    location.reload(); // Recharge la page
  };

  // Ajout de l'événement click sur le bouton
  guessButton.addEventListener("click", playGuessingGame); // Appelle la fonction playGuessingGame lorsque le bouton est cliqué
  restartButton.addEventListener("click", restartGame); // Appelle la fonction restartGame lorsque le bouton "Rejouer" est cliqué

  // Affichage du nombre cible pour les tests
  console.log(targetNumber); // Affiche le nombre cible dans la console
});
