const questions = [
  // intoduction
  {
    questionText:
      "Choisir le pour compléter la phrase suivante : \n Cette vidéo parle des composantes ...... d'un ordinateur",
    answerOptions: [
      { answerText: "logiciels.", isCorrect: false },
      { answerText: "matériels.", isCorrect: true },
      { answerText: "aucune de ses mots.", isCorrect: false },
    ],
  },
  {
    questionText:
      "Les composantes mentionnées dans la vidéo sont appeler aussi des composantes :",
    answerOptions: [
      { answerText: "software.", isCorrect: false },
      { answerText: "hardware.", isCorrect: true },
      { answerText: "aucune de ses mots.", isCorrect: false },
    ],
  },
  {
    questionText: "Les composantes mentionner dans cette vidéo sont :",
    answerOptions: [
      { answerText: "Interne", isCorrect: true },
      { answerText: "Externe", isCorrect: false },
      { answerText: "Autre", isCorrect: false },
    ],
  },
  {
    questionText:
      "Les composantes d'un ordinateur bureau sont totalement différents sur celle d'un ordinateur portable:",
    answerOptions: [
      { answerText: "Vraie", isCorrect: false },
      { answerText: "Faux", isCorrect: true },
    ],
  },
  //   Carte mère
  {
    questionText: "Quelle composante relient les différents autre composantes?",
    answerOptions: [
      { answerText: "Disque dure", isCorrect: false },
      { answerText: "Chipset", isCorrect: false },
      { answerText: "La carte graphique", isCorrect: false },
      { answerText: "La carte réseaux", isCorrect: false },
      { answerText: "La carte mère", isCorrect: true },
    ],
  },
  {
    questionText:
      "Choisir la bonne réponse pour compléter la phrase suivante :\n Chaque ordinateur possède une grande carte de ..... appelée carte mère.",
    answerOptions: [
      { answerText: "circuit imprimé", isCorrect: true },
      { answerText: "métale imprimé", isCorrect: false },
      { answerText: "ciuvre imprimé", isCorrect: false },
    ],
  },
  {
    questionText: "La carte mère est une composante interne :",
    answerOptions: [
      { answerText: "Vraie", isCorrect: true },
      { answerText: "Faux", isCorrect: false },
    ],
  },
  {
    questionText: "L'ordinateur peut fonctionner sans la carte mère?",
    answerOptions: [
      { answerText: "Vraie", isCorrect: false },
      { answerText: "Faux", isCorrect: true },
    ],
  },
  //   cpu
  {
    questionText:
      "Parmi les composantes suivante, laquelle utilise la RAM pour faire des calcules?",
    answerOptions: [
      { answerText: "disque dur", isCorrect: false },
      { answerText: "carte réseaux", isCorrect: false },
      { answerText: "micro-processeur", isCorrect: true },
    ],
  },
  {
    questionText:
      "Choisir la bonne réponse :\n le micro-processeur est le ....... d'un ordinateur.",
    answerOptions: [
      { answerText: "mémoire", isCorrect: false },
      { answerText: "sérveaux", isCorrect: true },
      { answerText: "stockage", isCorrect: false },
    ],
  },
  {
    questionText:
      "Choisir la bonne réponse :\n le micro-processeur ....... les informations.",
    answerOptions: [
      { answerText: "stock", isCorrect: false },
      { answerText: "traite", isCorrect: true },
    ],
  },
  {
    questionText:
      "Choisir la bonne réponse :\n le micro-processeur  ..... les commandes.",
    answerOptions: [
      { answerText: "stock", isCorrect: false },
      { answerText: "crée", isCorrect: false },
      { answerText: "exécute", isCorrect: true },
    ],
  },
  //   ram
  {
    questionText:
      "Sélectionner la bonne réponse :\n laquelle des composantes a été mentionner dans le vidé :",
    answerOptions: [
      { answerText: "ROM", isCorrect: false },
      { answerText: "RAM", isCorrect: true },
      { answerText: "Aucune", isCorrect: false },
    ],
  },
  {
    questionText:
      "Les données sur la mémoire RAM sont conserver aprés la coupe de l'électricité de l'ordinateur?",
    answerOptions: [
      { answerText: "Vraie", isCorrect: false },
      { answerText: "Faux", isCorrect: true },
    ],
  },
  {
    questionText:
      "Les données sur la mémoire RAM ne sont pas conserver aprés la coupe de l'électricité de l'ordinateur?",
    answerOptions: [
      { answerText: "Vraie", isCorrect: true },
      { answerText: "Faux", isCorrect: false },
    ],
  },
  {
    questionText: "La mémoire RAM appeler aussi?",
    answerOptions: [
      { answerText: "Mémoire Vive", isCorrect: true },
      { answerText: "Mémoire Mort", isCorrect: false },
    ],
  },
  //   disque dure
  {
    questionText: "Les disques dure sert à",
    answerOptions: [
      { answerText: "Exécuter les commandes", isCorrect: false },
      { answerText: "stocker les données.", isCorrect: true },
      { answerText: "Traiter les données", isCorrect: false },
      { answerText: "Aucune de ses Réponses", isCorrect: false },
    ],
  },
  {
    questionText: "Lequel de ces types qui utilisent un plateau magnétique?",
    answerOptions: [
      { answerText: "SSD", isCorrect: false },
      { answerText: "SDD", isCorrect: false },
      { answerText: "HDD", isCorrect: true },
      { answerText: "DHD", isCorrect: false },
    ],
  },
  {
    questionText: "Lequel de ces tpyes est plus cher?",
    answerOptions: [
      { answerText: "SSD", isCorrect: false },
      { answerText: "SDD", isCorrect: true },
      { answerText: "HDD", isCorrect: false },
      { answerText: "DHD", isCorrect: false },
    ],
  },
  {
    questionText: "Lequel de ces types est le plus rapide?",
    answerOptions: [
      { answerText: "SSD", isCorrect: false },
      { answerText: "SDD", isCorrect: true },
      { answerText: "HDD", isCorrect: false },
      { answerText: "DHD", isCorrect: false },
    ],
  },
];

export default questions;
