"use strict"; // Slide 141 : Active le mode strict pour éviter les erreurs sillencieuse

// Chaque fonction illustre une notion de base du langage JavaScript
// et affiche les résultats dans la console (Slide 33 : console.log())

// -----------------------------------------------------
// Fonction F1
// -----------------------------------------------------
function f1() {
    // Slide 45 : Fonction sans paramètre
  // Slide 37 : Déclaration de variables simples (type String)
  // Slide 41 : Concatenation simple avec console.log()
  let etudiant1 = "Etudiant 1";
  let etudiant2 = "Etudiant 2";
  let etudiant3 = "Etudiant 3";

  console.log(etudiant1); // Slide 33 : affichage console
  console.log(etudiant2);
  console.log(etudiant3);
}

// -----------------------------------------------------
// Fonction F2
// -----------------------------------------------------
// Slide 45 : Fonction sans paramètre
function f2() {
  // Slide 39 : Définition d’un objet JavaScript avec trois propriétés
  const etudiant = {
    nom: "John",
    prenom: "Doe",
    age: 30
  };

  // Slide 33 : console.log() permet d’afficher directement l’objet complet
  // L’objet apparaît en gris (accollades et clés) car la console formate les objets
  console.log(etudiant);
}

// -----------------------------------------------------
// Fonction F3
// -----------------------------------------------------
// Slide 45 : Fonction sans paramètre
function f3() {
  // Slide 38 : Tableau d’objets
  const etudiants = [
    { nom: "Nom1", prenom: "Prenom1", age: 21 },
    { nom: "Nom2", prenom: "Prenom2", age: 22 },
    { nom: "Nom3", prenom: "Prenom3", age: 23 }
  ];

  // Slide 44 : Boucle forEach pour parcourir un tableau
  etudiants.forEach(e => {
    // Slide 41 : Opérateur + pour concaténer des chaînes
    console.log(e.nom + "-" + e.prenom + "-" + e.age);
  });
}