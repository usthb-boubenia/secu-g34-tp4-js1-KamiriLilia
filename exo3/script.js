"use strict"; // Slide 141 : Active le mode strict pour éviter les erreurs sillencieuse

// Slide 40 : Tableau d’objets représentant les étudiants
// Chaque étudiant a deux notes : note1 et note2
const Students = [
  { id: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
  { id: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 }
];

// -----------------------------------------------------
// Fonction A : Appelle la fonction B pour chaque étudiant
// -----------------------------------------------------
function A() {
  // Slide 45 : Fonction sans paramètre
  // Slide 44 : Boucle forEach pour parcourir un tableau
  Students.forEach(etudiant => {
    // Calcul de la moyenne selon la formule donnée dapres classroom
    // Moyenne = (note1 + note2) / 2 + 5
    // slide 41 : les operateurs
    const moyenne = (etudiant.note1 + etudiant.note2) / 2 + 5;

    // Slide 45 : Appel de la fonction B avec la moyenne (paramètre float)
    const resultat = B(moyenne);

    // Slide 33 : Affichage formaté dans la console
    // Slide 42 : Structure conditionnelle if...else  ( dans ce cas cest indirecte )
    console.log(etudiant.id + " : " + (resultat ? "ADMIS" : "AJOURNÉ"));
  });
}

// -----------------------------------------------------
// Fonction B : prend un float (moyenne) et retourne un booléen
// -----------------------------------------------------
function B(moyenne) {
  // Slide 42 : Structure conditionnelle if...else
  // Slide 45 : Fonction avec valeur de retour booléenne
  if (moyenne >= 10.0) {
    return true; // Étudiant admis
  } else {
    return false; // Étudiant ajourné
  }
}