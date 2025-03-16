// votre code ici
/**
 * Vérifie l'âge d'une personne et renvoie un message en fonction de la tranche d'âge.
 * @param {number} age - L'âge de la personne.
 * @returns {string} - Un message indiquant la tranche d'âge.
 */
function checkAge(age) {
    if (age < 18) {
      return "Vous êtes mineur.";
    } else if (age >= 18 && age < 65) {
      return "Vous êtes majeur.";
    } else {
      return "Vous êtes senior.";
    }
  }
export default checkAge;
