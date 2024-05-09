import readlineSync from "readline-sync";

// Définition de la fonction prompt qui prend une question en paramètre
export function prompt(question) {
  // readlineSync.question retourne la réponse de l'utilisateur une fois qu'il appuie sur Entrée
  const answer = readlineSync.question(question);

  // Retourne la réponse saisie par l'utilisateur
  return answer;
}
