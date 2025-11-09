import { tags } from "./tags.js";

const portfolio = {
  title: "Portfolio",
  img: "",
  altImg: "Capture d'écran du projet Portfolio",
  firstCreatedAt: "2024-12-03T10:00:00.000Z",
  createdAt: "2025-11-07T10:00:00.000Z",
  content:
    "Réalisation d'un CV et portfolio regrouppant mes projets scolaireset personnels.\n" +
    "Utilisation du javascript pour la page portfolio afin de créer lesfiltres " +
    "(utilisation de classList). Utilisation du php afin de n'avoir qu'un fichier " +
    "pour le header et le modifier dans les 3pages.\n" +
    "Apprentissage de Sass en cours afin de rendre le CSS plus facile à maintenir",
  code: "https://github.com/AdelinePat/portfolio",
  demo: "",
  tags: [
    tags.sass,
    tags.html,
    tags.javascript,
    tags.personal,
    tags.figma,
    tags.git,
  ],
};

export const projects = [
  portfolio,
  {
    title: "Hardware et virtualisation",
    img: "./assets/project_img/component.jpg",
    altImg: "Image représentant le projet hardware et virtualisation",
    createdAt: "2024-10-28T10:00:00.000Z",
    content:
      "Projet dans le cadre de la formation La Plateforme_ . Apprentissage des différents " +
      "composants hardware, utilisation de VMware, installation de windows 11 et linux.",
    code: "",
    demo: "",
    tags: [
      tags.linux,
      tags.osInstall,
      tags.virtualization,
      tags.vmware,
      tags.school,
    ],
  },
  {
    title: "Tic Tac Toe",
    img: "https://raw.githubusercontent.com/AdelinePat/tictactoe/refs/heads/main/tictactoe.jpg",
    altImg: "Image du jeu du morpion",
    createdAt: "2024-11-08T10:00:00.000Z",
    content:
      "Réalisation d'un jeu de morpion avec python, création d'un jeu joueur contre joueur et joueur contre bot\n" +
      "Première version du bot : l'algorithme cherche le premier emplacement vide disponible " +
      "(en partant du haut à gauche en allant vers la droite et en bas) pour y placer son signe.\n" +
      "Deuxième version du bot : l'algorithme liste tous les emplacements disponibles restants " +
      "et choisi au hasard un emplacement avec le module random.",
    code: "https://github.com/AdelinePat/tictactoe",
    demo: "",
    tags: [tags.python, tags.algorithmic, tags.school, tags.git],
  },
  {
    title: "Bloom Petals",
    img: "https://raw.githubusercontent.com/AdelinePat/webdesign-fleuriste/refs/heads/main/preview-desktop.jpg",
    altImg: "Capture d'écran du projet Bloom Petals",
    createdAt: "2024-11-23T10:00:00.000Z",
    content:
      "Premier projet HTML et CSS, réalisation d'un site pour une fleuriste nommée Bloom Petals.\n" +
      "Apprentissage des balises HTML5 et bonnes pratiques",
    code: "https://github.com/AdelinePat/webdesign-fleuriste",
    demo: "https://adelinepat.github.io/webdesign-fleuriste/",
    tags: [tags.html, tags.css, tags.figma, tags.school, tags.git],
  },
  {
    title: "Blackpink",
    img: "https://raw.githubusercontent.com/AdelinePat/fansite/refs/heads/main/preview_fansite1_blackpink.jpg",
    altImg: "Capture d'écran du projet Blackpink",
    createdAt: "2024-12-02T10:00:00.000Z",
    content:
      "Création d'un fansite sur blackpink, projet individuel lié au projet Fansite en groupe.\n" +
      "Utilisation des pseudo classes et des transitions",
    code: "https://github.com/AdelinePat/fansite",
    demo: "https://adelinepat.github.io/fansite/fansite1.html",
    tags: [tags.html, tags.css, tags.figma, tags.school, tags.git],
  },
  {
    title: "Hackaton - KoSphere",
    img: "./assets/project_img/kosphere_project.jpg",
    altImg: "image représentant le projet d'idéation du hackaton",
    createdAt: "2024-12-13T10:00:00.000Z",
    content:
      "Participation à un hackaton à la Plateforme_ . Idéation sur un sujet imposé : " +
      "l'amélioration de l'utiisation des IoT au sein de notre centre de formation\n" +
      " Echange des idées au sein d'une équipe de 4 à l'aide du crazy 8\n" +
      " L'idée choisie est une machine à café connectée avec une application notifiant " +
      "les utilisateurs si une machine est en panne, à nouveau en service et quelle " +
      "quantité de quelle boisson se trouve dans la machine.\n" +
      " Le problème nous ayant poussé à choisir cette idée plutôt qu'une autre : " +
      "les machines à café souvent en panne poussent les élèves à aller consommer en " +
      "dehors de l'école, causant une perte de temps et de la mauvaise humeur lorsque " +
      "l'utilisateur découvre que toutes les machines sont en pannes.",
    code: "",
    demo: "",
    tags: [tags.ideation, tags.teamwork, tags.school],
  },
  {
    title: "AzerType",
    img: "./assets/project_img/azertype_project.jpg",
    altImg: "image de AzerType",
    createdAt: "2024-12-26T10:00:00.000Z",
    content:
      `Création d'un jeu pour s'entraîner à taper au clavier dans le cadre d'un cours OpenClassRooms : ` +
      `<ahref="https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript">Apprenez à programmer avec JavaScript</a >\n` +
      `Le cours se concentrait sur l'apprentissage du javascript. Le CSS et HTML a donc été fourni par OpenClassRooms\n` +
      `Utilisation du DOM (Document Object Model), modification du contenu html selon certaines conditions ` +
      `(au niveau du score), utilisation d'une regex pour le formulaire.`,
    code: "https://github.com/AdelinePat/AzerType",
    demo: "https://adelinepat.github.io/AzerType/",
    tags: [tags.regex, tags.personal, tags.javascript],
  },
  {
    title: "Calculatrice",
    img: "./assets/project_img/calculator_project1.jpg",
    altImg: "Capture d'écran du projet de la calculatrice",
    createdAt: "2025-01-21T10:00:00.000Z",
    content:
      "Réalisation d'une calculatrice dans le terminal avec python. " +
      "Prise en compte d'un input géré par une regex.\n" +
      "Utilisation du try except, gestion des diverses exceptions possible " +
      "(ZeroDivisionError, gestion des erreurs possible après traitement par la regex)",
    code: "https://github.com/AdelinePat/my_calculator",
    demo: "",
    tags: [
      tags.python,
      tags.algorithmic,
      tags.regex,
      tags.errorHandling,
      tags.teamwork,
      tags.git,
      tags.school,
    ],
  },
  {
    title: "Jeu du pendu",
    img: "./assets/project_img/hangman_project.jpg",
    altImg: "Capture d'écran du projet de Jeu du pendu",
    createdAt: "2025-01-29T10:00:00.000Z",
    content:
      "Réalisation d'un jeu du pendu avec python en utilisant l'interface graphique Pygame.\n" +
      "Utilisation d'un fichier Json pour enregistrer les scores et les  supprimer.",
    code: "https://github.com/AdelinePat/hangman",
    demo: "",
    tags: [tags.python, tags.pygame, tags.teamwork, tags.school, tags.git],
  },
  {
    title: "Fruit Ninja",
    img: "./assets/project_img/fruit_ninja_project.jpg",
    altImg: "Capture d'écran du projet de jeu Fruit Ninja",
    createdAt: "2025-02-04T10:00:00.000Z",
    content:
      "Réalisation d'un jeu type Fruit Ninja avec python en utilisant l'interface graphique Pygame. " +
      "Lorsque la touche du clavier correspondante a été appuyée, le fruit est coupé.\n" +
      "Création de plusieurs classes (fruits, boutons) et utilisation de " +
      "l'<strong>héritage</strong> (bouton_image hérite de bouton)",
    code: "https://github.com/AdelinePat/typing-game",
    demo: "",
    tags: [
      tags.oop,
      tags.algorithmic,
      tags.teamwork,
      tags.python,
      tags.pygame,
      tags.school,
      tags.git,
    ],
  },
  {
    title: "Pokemon",
    img: "./assets/project_img/pokemon_project.jpg",
    altImg: "Capture d'écran du projet de jeu pokemon",
    createdAt: "2025-03-02T10:00:00.000Z",
    content:
      "Réalisation d'un jeu Pokémon en groupe. Créations d'une classe pokémon <strong>héritant</strong> " +
      "d'évolution afin de gérer le gain d'expérience, de level up et l'évolution.\n" +
      "Utilisation du modèle MVC (Model View Controller) afin de faire communiquer les " +
      "classes et fichier back avec les classes et fichiers front\n" +
      "Sauvegarde des données dans des json (traduction des objets en " +
      "dictionnaire) puis instanciation des objets depuis les fichiers json",
    code: "https://github.com/AdelinePat/pokemon",
    demo: "",
    tags: [
      tags.oop,
      tags.python,
      tags.school,
      tags.pygame,
      tags.algorithmic,
      tags.teamwork,
      tags.git,
    ],
  },
  {
    title: "Budget Buddy",
    img: "./assets/project_img/budget_buddy_project.jpg",
    altImg: "image de l'application budget buddy",
    createdAt: "2025-03-25T10:00:00.000Z",
    content:
      "Réalisation d'un application de gestion bancaire. Utilisation de SQL, " +
      "SQL CLI et du connecteur mysql-connector-python.\n" +
      "Travail de conception du projet, réalisation : d'un diagramme de classe, " +
      "d'une maquette Figma du projet. Répartition des tâches dans le groupe, intégration et test manuel des nouvelles features.\n" +
      "Réalisation d'une interface graphique avec Tkinter, projet basé sur le Model View Controller\n" +
      "Création de compte client et bancaire, regex pour les emails et les mots de passe, " +
      "hashage avec sallage des mots de passe avant de les enregistrer en base de donnée.",
    code: "https://github.com/AdelinePat/budget_buddy",
    demo: "",
    tags: [
      tags.mysql,
      tags.oop,
      tags.mvc,
      tags.python,
      tags.algorithmic,
      tags.tkinter,
      tags.teamwork,
      tags.school,
      tags.git,
    ],
  },
  {
    title: "Démineur",
    img: "./assets/project_img/minesweeper_project.jpg",
    altImg: "Capture d'écran du projet du jeu du démineur",
    createdAt: "2025-03-31T10:00:00.000Z",
    content:
      "Travail de conception du projet, réalisation : d'un diagramme de classe, d'une maquette Figma du projet. " +
      "Répartition des tâches dans le groupe, intégration et test manuel des nouvelles features.\n" +
      "Réalisation d'un jeu de démineur avec pygame. Utilisation d'un design system (création " +
      "des différents composants réutilisables et modifiable de l'interface graphique)\n" +
      "Programmation orientée objet. Utilisation de la récursivité pour découvrir en chaîne les cases libres.\n" +
      "Score enregistré dans un json",
    code: "https://github.com/AdelinePat/minesweeper",
    demo: "",
    tags: [
      tags.oop,
      tags.designSystem,
      tags.mvc,
      tags.algorithmic,
      tags.python,
      tags.pygame,
      tags.school,
      tags.teamwork,
      tags.git,
    ],
  },
  {
    title: "Pierre Feuille Ciseaux",
    img: "./assets/project_img/rock-paper-scissors.webp",
    altImg: "image représentant le jeu pierre feuille ciseaux",
    createdAt: "2025-05-18T10:00:00.000Z",
    content:
      "Projet d'entraînement à C++, utilisant un simple menu, des namespaces",
    code: "https://github.com/AdelinePat/rock-paper-scissors",
    demo: "",
    tags: [tags.cmake, tags.cpp, tags.console, tags.personal],
  },
  {
    title: "My Discord",
    img: "./assets/project_img/whispr-mydiscord.jpg",
    altImg: "Application My Discord",
    createdAt: "2025-05-12T10:00:00.000Z",
    content:
      "Création d'une application de messagerie type discord avec le langage C.\n" +
      "Installation et mise en place de l'environnement de développement sous windows utilisant MSYS2.\n" +
      "Création de socket, deux applications : une pour le serveur et l'autre pour le client.\n" +
      "Communication entre les deux applications via les sockets en envoyant les données sous forme de json.\n" +
      "Conception et gestion d'une base de données PostgreSQL avec création de trigger et " +
      "de fonction permettant de donner l'accès aux utilisateurs aux channels publics.\n" +
      "Utilisation de GTK3 pour l'interface graphique",
    code: "https://github.com/AdelinePat/myDiscord",
    demo: "",
    tags: [
      tags.postgresql,
      tags.socket,
      tags.c,
      tags.makefile,
      tags.school,
      tags.teamwork,
    ],
  },
  {
    title: "Todo C++",
    img: "./assets/project_img/todolist_cpp.jpg",
    altImg: "projet console todo list",
    createdAt: "2025-05-25T10:00:00.000Z",
    content:
      "Réalisation d'une todo liste en console avec C++\n" +
      "Nettoyage des inputs utilisateurs pour avoir le bon format final.\n" +
      "Réalisation des actions CRUD dans un fichier csv.\n" +
      "Gestion des erreurs",
    code: "https://github.com/AdelinePat/todolist_cpp",
    demo: "",
    tags: [tags.cpp, tags.cmake, tags.console, tags.personal],
  },
  {
    title: "Tower Defense",
    img: "https://github.com/AdelinePat/tower-defense/blob/main/docs/README/main_menu.png?raw=true",
    altImg: "Capture d'écran du projet Tower Defense",
    createdAt: "2025-06-17T10:00:00.000Z",
    content:
      "Réalisation d'un jeu type Tower Defense\n" +
      "Création des ennemis via une factory, 4 types d'ennemi " +
      "dont un créé par défaut si aucune précision n'est donnée\n" +
      "Utilisation du design pattern strategy pour les mouvements des ennemis\n" +
      "Chaque ennemi gère son propre mouvement, abstraction et polymorphisme utilisé\n" +
      "Factory pour création des trois différents type de tours, même principe que pour les ennemis",
    code: "https://github.com/AdelinePat/tower-defense",
    demo: "",
    tags: [tags.cpp, tags.unity, tags.oop, tags.school, tags.teamwork],
  },
  {
    title: "Global Converter",
    img: "https://github.com/AdelinePat/globalConverter/blob/main/ressources/globalConverter.png?raw=true",
    altImg: "Capture d'écran du projet Global Converter",
    createdAt: "2025-06-30T10:00:00.000Z",
    content:
      "Réalisation d'une application console pour convertir des lettres en différente base\n" +
      "Factory pour les différents convertisseurs. Interface gérant l'ensemble " +
      "des convertisseurs, chacun d'entre eux gère sa propre logique.\n" +
      "Conversion d'une lettre vers les bases : décimal (ASCII), hexadécimal, octal et binaire\n" +
      "Possibilité d'utiliser le chiffrement de césar avec la clé au choix de l'utilisateur.",
    code: "https://github.com/AdelinePat/globalConverter",
    demo: "",
    tags: [
      tags.java,
      tags.errorHandling,
      tags.console,
      tags.designPattern,
      tags.oop,
      tags.school,
      tags.teamwork,
    ],
  },
  {
    title: "Plateforme Tracker",
    img: "https://github.com/AdelinePat/LaPlateformeTracker/blob/main/src/main/resources/plateforme-tracker.png?raw=true",
    altImg: "Capture d'écran du projet La Plateforme Tracker",
    createdAt: "2025-07-10T10:00:00.000Z",
    content:
      "Création d'une application de gestion des élèves d'une école\n" +
      "Base de données PostgreSQL action CRUD possible pour les étudiants avec " +
      "filtre en fonction du nom / prénom (LIKE), âge ou note (BETWEEN : range)\n" +
      "Création de compte administrateur pour les formateurs et équipe pédagogique " +
      "avec salage des mots de passe, sel unique pour chaque compte créé. " +
      "Regex pour le mot de passe \n" +
      "Utilisation de javafx pour l'interface graphique et de Maven pour les dépendances du projets",
    code: "https://github.com/AdelinePat/LaPlateformeTracker",
    demo: "",
    tags: [
      tags.maven,
      tags.unitaryTest,
      tags.java,
      tags.junit,
      tags.errorHandling,
      tags.designPattern,
      tags.oop,
      tags.postgresql,
      tags.school,
      tags.teamwork,
    ],
  },
  {
    title: "CV d'entraînement",
    img: "https://github.com/AdelinePat/resume/blob/main/img/preview%20CV%20Curriculum%20Vitae.png?raw=true",
    altImg: "Projet d'entraînement de réalisation de CV",
    createdAt: "2025-07-22T10:00:00.000Z",
    content:
      "Réalisation d'un CV dans le cadre du cours Dyma\n" +
      "Objectif : utiliser Sass, grid, flex et tout ce qui a été appris lors de la certification\n" +
      "Le design général a été donné lors du cours, mais l'utilisation et création des mixin et " +
      "l'utisation de l'héritage pour les barres de compétences ont été des rajouts que j'ai trouvé plus intéressant que le template proposés.",
    code: "https://github.com/AdelinePat/resume",
    demo: "https://adelinepat.github.io/resume/",
    tags: [tags.sass, tags.personal, tags.html],
  },
];

const articleTemplate = {
  title: "",
  img: "",
  altImg: "",
  createdAt: "2025-07-22T10:00:00.000Z",
  content: "",
  code: "",
  demo: "",
  tags: [],
};
