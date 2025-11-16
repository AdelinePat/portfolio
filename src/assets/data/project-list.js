import { tags } from "./tags.js";

const portfolio = {
  title: "Portfolio",
  display: true,
  img: "./assets/project_img/portfolio.png",
  altImg: "Capture d'écran du projet Portfolio",
  firstCreatedAt: "2024-12-03T10:00:00.000Z",
  createdAt: "2025-11-07T10:00:00.000Z",
  content:
    "<p>Réalisation d'un CV et portfolio regrouppant mes projets scolaireset personnels.</p><p>" +
    "Utilisation du javascript pour la page portfolio afin de créer lesfiltres " +
    "(utilisation de classList). Utilisation du php afin de n'avoir qu'un fichier " +
    "pour le header et le modifier dans les 3pages.</p><p>" +
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
    tags.docker,
  ],
};

export const projects = [
  portfolio,
  {
    title: "Hardware et virtualisation",
    display: true,
    img: "./assets/project_img/component.jpg",
    altImg: "Image représentant le projet hardware et virtualisation",
    createdAt: "2024-10-28T10:00:00.000Z",
    content:
      "<p>Projet dans le cadre de la formation La Plateforme_ . Apprentissage des différents " +
      "composants hardware : CPU, GPU, refroidissement... utilisation de VMware, installation de windows 11 et Debian en utilisant un dual boot.</p>",
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
    display: true,
    img: "https://raw.githubusercontent.com/AdelinePat/tictactoe/refs/heads/main/tictactoe.jpg",
    altImg: "Image du jeu du morpion",
    createdAt: "2024-11-08T10:00:00.000Z",
    content:
      "<p>Réalisation d'un jeu de morpion avec python, création d'un jeu joueur contre joueur et joueur contre bot</p><p>" +
      "Première version du bot : l'algorithme cherche le premier emplacement vide disponible " +
      "(en partant du haut à gauche en allant vers la droite et en bas) pour y placer son signe.</p><p>" +
      "Deuxième version du bot : l'algorithme liste tous les emplacements disponibles restants " +
      "et choisi au hasard un emplacement avec le module random.</p>",
    code: "https://github.com/AdelinePat/tictactoe",
    demo: "",
    tags: [tags.python, tags.algorithmic, tags.school, tags.git],
  },
  {
    title: "Bloom Petals",
    display: true,
    img: "https://raw.githubusercontent.com/AdelinePat/webdesign-fleuriste/refs/heads/main/preview-desktop.jpg",
    altImg: "Capture d'écran du projet Bloom Petals",
    createdAt: "2024-11-23T10:00:00.000Z",
    content:
      "<p>Premier projet HTML et CSS, réalisation d'un site pour une fleuriste nommée Bloom Petals.</p><p>" +
      "Apprentissage des balises HTML5 et bonnes pratiques</p>",
    code: "https://github.com/AdelinePat/webdesign-fleuriste",
    demo: "https://adelinepat.github.io/webdesign-fleuriste/",
    tags: [tags.html, tags.css, tags.figma, tags.school, tags.git],
  },
  {
    title: "Blackpink",
    display: true,
    img: "https://raw.githubusercontent.com/AdelinePat/fansite/refs/heads/main/preview_fansite1_blackpink.jpg",
    altImg: "Capture d'écran du projet Blackpink",
    createdAt: "2024-12-02T10:00:00.000Z",
    content:
      "<p>Création d'un fansite sur blackpink, projet individuel lié au projet Fansite en groupe.</p><p>" +
      "Utilisation des pseudo classes et des transitions</p>",
    code: "https://github.com/AdelinePat/fansite",
    demo: "https://adelinepat.github.io/fansite/fansite1.html",
    tags: [tags.html, tags.css, tags.figma, tags.school, tags.git],
  },
  {
    title: "Hackaton - KoSphere",
    display: true,
    img: "./assets/project_img/kosphere_project.jpg",
    altImg: "image représentant le projet d'idéation du hackaton",
    createdAt: "2024-12-13T10:00:00.000Z",
    content:
      "<p>Participation à un hackaton à la Plateforme_ . Idéation sur un sujet imposé : " +
      "l'amélioration de l'utiisation des IoT au sein de notre centre de formation</p><p>" +
      " Echange des idées au sein d'une équipe de 4 à l'aide du crazy 8</p><p>" +
      " L'idée choisie est une machine à café connectée avec une application notifiant " +
      "les utilisateurs si une machine est en panne, à nouveau en service et quelle " +
      "quantité de quelle boisson se trouve dans la machine.</p><p>" +
      " Le problème nous ayant poussé à choisir cette idée plutôt qu'une autre : " +
      "les machines à café souvent en panne poussent les élèves à aller consommer en " +
      "dehors de l'école, causant une perte de temps et de la mauvaise humeur lorsque " +
      "l'utilisateur découvre que toutes les machines sont en pannes.</p>",
    code: "",
    demo: "",
    tags: [tags.ideation, tags.teamwork, tags.school],
  },
  {
    title: "AzerType",
    display: true,
    img: "./assets/project_img/azertype_project.jpg",
    altImg: "image de AzerType",
    createdAt: "2024-12-26T10:00:00.000Z",
    content:
      `<p>Création d'un jeu pour s'entraîner à taper au clavier dans le cadre d'un cours OpenClassRooms : ` +
      `<a href="https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript" target="_blank" rel="noopener">Apprenez à programmer avec JavaScript</a></p><p>` +
      `Le cours se concentrait sur l'apprentissage du javascript. Le CSS et HTML a donc été fourni par OpenClassRooms</p><p>` +
      `Utilisation du DOM (Document Object Model), modification du contenu html selon certaines conditions ` +
      `(au niveau du score), utilisation d'une regex pour le formulaire.`,
    code: "https://github.com/AdelinePat/AzerType",
    demo: "https://adelinepat.github.io/AzerType/",
    tags: [tags.regex, tags.personal, tags.javascript],
  },
  {
    title: "Calculatrice",
    display: true,
    img: "./assets/project_img/calculator_project1.jpg",
    altImg: "Capture d'écran du projet de la calculatrice",
    createdAt: "2025-01-21T10:00:00.000Z",
    content:
      "<p>Réalisation d'une calculatrice dans le terminal avec python. " +
      "Prise en compte d'un input géré par une regex.</p><p>" +
      "Utilisation du try except, gestion des diverses exceptions possible " +
      "(ZeroDivisionError, gestion des erreurs possible après traitement par la regex)</p>",
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
    display: true,
    img: "./assets/project_img/hangman_project.jpg",
    altImg: "Capture d'écran du projet de Jeu du pendu",
    createdAt: "2025-01-29T10:00:00.000Z",
    content:
      "<p>Réalisation d'un jeu du pendu avec python en utilisant l'interface graphique Pygame.</p><p>" +
      "Utilisation d'un fichier Json pour enregistrer les scores et les  supprimer.</p>",
    code: "https://github.com/AdelinePat/hangman",
    demo: "",
    tags: [tags.python, tags.pygame, tags.teamwork, tags.school, tags.git],
  },
  {
    title: "Fruit Ninja",
    display: true,
    img: "./assets/project_img/fruit_ninja_project.jpg",
    altImg: "Capture d'écran du projet de jeu Fruit Ninja",
    createdAt: "2025-02-04T10:00:00.000Z",
    content:
      "<p>Réalisation d'un jeu type Fruit Ninja avec python en utilisant l'interface graphique Pygame. " +
      "Lorsque la touche du clavier correspondante a été appuyée, le fruit est coupé.</p><p>" +
      "Création de plusieurs classes (fruits, boutons) et utilisation de " +
      "l'<strong>héritage</strong> (bouton_image hérite de bouton)</p>",
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
    display: true,
    img: "./assets/project_img/pokemon_project.jpg",
    altImg: "Capture d'écran du projet de jeu pokemon",
    createdAt: "2025-03-02T10:00:00.000Z",
    content:
      "<p>Réalisation d'un jeu Pokémon en groupe. Créations d'une classe pokémon <strong>héritant</strong> " +
      "d'évolution afin de gérer le gain d'expérience, de level up et l'évolution.</p><p>" +
      "Utilisation du modèle MVC (Model View Controller) afin de faire communiquer les " +
      "classes et fichier back avec les classes et fichiers front</p><p>" +
      "Sauvegarde des données dans des json (traduction des objets en " +
      "dictionnaire) puis instanciation des objets depuis les fichiers json</p>",
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
    display: true,
    img: "./assets/project_img/budget_buddy_project.jpg",
    altImg: "image de l'application budget buddy",
    createdAt: "2025-03-25T10:00:00.000Z",
    content:
      "<p>Réalisation d'un application de gestion bancaire. Utilisation de SQL, " +
      "SQL CLI et du connecteur mysql-connector-python.</p><p>" +
      "Travail de conception du projet, réalisation : d'un diagramme de classe, " +
      "d'une maquette Figma du projet. Répartition des tâches dans le groupe, intégration et test manuel des nouvelles features.</p><p>" +
      "Réalisation d'une interface graphique avec Tkinter, projet basé sur le Model View Controller</p><p>" +
      "Création de compte client et bancaire, regex pour les emails et les mots de passe, " +
      "hashage avec sallage des mots de passe avant de les enregistrer en base de donnée.</p>",
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
    display: true,
    img: "./assets/project_img/minesweeper_project.jpg",
    altImg: "Capture d'écran du projet du jeu du démineur",
    createdAt: "2025-03-31T10:00:00.000Z",
    content:
      "<p>Travail de conception du projet, réalisation : d'un diagramme de classe, d'une maquette Figma du projet. " +
      "Répartition des tâches dans le groupe, intégration et test manuel des nouvelles features.</p><p>" +
      "Réalisation d'un jeu de démineur avec pygame. Utilisation d'un design system (création " +
      "des différents composants réutilisables et modifiable de l'interface graphique)</p><p>" +
      "Programmation orientée objet. Utilisation de la récursivité pour découvrir en chaîne les cases libres.</p><p>" +
      "Score enregistré dans un json</p>",
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
    display: true,
    img: "./assets/project_img/rock-paper-scissors.webp",
    altImg: "image représentant le jeu pierre feuille ciseaux",
    createdAt: "2025-05-18T10:00:00.000Z",
    content:
      "<p>Projet d'entraînement <a href='https://dyma.fr/formations/cpp' target='_blank' rel='noopener'>à la certification C++ de Dyma</a> à C++ , utilisant un simple menu, des namespaces</p>",
    code: "https://github.com/AdelinePat/rock-paper-scissors",
    demo: "",
    tags: [tags.cmake, tags.cpp, tags.console, tags.personal],
  },
  {
    title: "My Discord",
    display: true,
    img: "./assets/project_img/whispr-mydiscord.jpg",
    altImg: "Application My Discord",
    createdAt: "2025-05-12T10:00:00.000Z",
    content:
      "<p>Création d'une application de messagerie type discord avec le langage C.</p><p>" +
      "Installation et mise en place de l'environnement de développement sous windows utilisant MSYS2.</p><p>" +
      "Création de socket, deux applications : une pour le serveur et l'autre pour le client.</p><p>" +
      "Communication entre les deux applications via les sockets en envoyant les données sous forme de json.</p><p>" +
      "Conception et gestion d'une base de données PostgreSQL avec création de trigger et " +
      "de fonction permettant de donner l'accès aux utilisateurs aux channels publics.</p><p>" +
      "Utilisation de GTK3 pour l'interface graphique</p>",
    code: "https://github.com/AdelinePat/myDiscord",
    demo: "",
    tags: [
      tags.postgresql,
      tags.socket,
      tags.c,
      tags.makefile,
      tags.school,
      tags.teamwork,
      tags.git,
    ],
  },
  {
    title: "Todo C++",
    display: true,
    img: "./assets/project_img/todolist_cpp.jpg",
    altImg: "projet console todo list",
    createdAt: "2025-05-25T10:00:00.000Z",
    content:
      "<p>Réalisation d'une todo liste en console avec C++ dans le cadre de la certification <a href='https://dyma.fr/formations/cpp' target='_blank' rel='noopener'>C++ de Dyma</a></p><p>" +
      "Nettoyage des inputs utilisateurs pour avoir le bon format final.</p><p>" +
      "Réalisation des actions CRUD dans un fichier csv.</p><p>" +
      "Gestion des erreurs</p>",
    code: "https://github.com/AdelinePat/todolist_cpp",
    demo: "",
    tags: [tags.cpp, tags.cmake, tags.console, tags.personal],
  },
  {
    title: "Tower Defense",
    display: true,
    img: "https://github.com/AdelinePat/tower-defense/blob/main/docs/README/main_menu.png?raw=true",
    altImg: "Capture d'écran du projet Tower Defense",
    createdAt: "2025-06-17T10:00:00.000Z",
    content:
      "<p>Réalisation d'un jeu type Tower Defense</p><p>" +
      "Création des ennemis via une factory, 4 types d'ennemi " +
      "dont un créé par défaut si aucune précision n'est donnée</p><p>" +
      "Utilisation du design pattern strategy pour les mouvements des ennemis</p><p>" +
      "Chaque ennemi gère son propre mouvement, abstraction et polymorphisme utilisé</p><p>" +
      "Factory pour création des trois différents type de tours, même principe que pour les ennemis</p>",
    code: "https://github.com/AdelinePat/tower-defense",
    demo: "",
    tags: [
      tags.cpp,
      tags.unity,
      tags.oop,
      tags.school,
      tags.teamwork,
      tags.git,
    ],
  },
  {
    title: "Global Converter",
    display: true,
    img: "https://github.com/AdelinePat/globalConverter/blob/main/ressources/globalConverter.png?raw=true",
    altImg: "Capture d'écran du projet Global Converter",
    createdAt: "2025-06-30T10:00:00.000Z",
    content:
      "<p>Réalisation d'une application console pour convertir des lettres en différente base</p><p>" +
      "Factory pour les différents convertisseurs. Interface gérant l'ensemble " +
      "des convertisseurs, chacun d'entre eux gère sa propre logique.</p><p>" +
      "Conversion d'une lettre vers les bases : décimal (ASCII), hexadécimal, octal et binaire</p><p>" +
      "Possibilité d'utiliser le chiffrement de césar avec la clé au choix de l'utilisateur.</p>",
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
      tags.git,
    ],
  },
  {
    title: "Plateforme Tracker",
    display: true,
    img: "https://github.com/AdelinePat/LaPlateformeTracker/blob/main/src/main/resources/plateforme-tracker.png?raw=true",
    altImg: "Capture d'écran du projet La Plateforme Tracker",
    createdAt: "2025-07-10T10:00:00.000Z",
    content:
      "<p>Création d'une application de gestion des élèves d'une école</p><p>" +
      "Base de données PostgreSQL action CRUD possible pour les étudiants avec " +
      "filtre en fonction du nom / prénom (LIKE), âge ou note (BETWEEN : range)</p><p>" +
      "Création de compte administrateur pour les formateurs et équipe pédagogique " +
      "avec salage des mots de passe, sel unique pour chaque compte créé. " +
      "Regex pour le mot de passe </p><p>" +
      "Utilisation de javafx pour l'interface graphique et de Maven pour les dépendances du projets</p>",
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
      tags.git,
    ],
  },
  {
    title: "CV d'entraînement",
    display: true,
    img: "https://github.com/AdelinePat/resume/blob/main/img/preview%20CV%20Curriculum%20Vitae.png?raw=true",
    altImg: "Projet d'entraînement de réalisation de CV",
    createdAt: "2025-07-22T10:00:00.000Z",
    content:
      "<p>Réalisation d'un CV dans le cadre du cours <a href='https://dyma.fr/formations/html-css' target='_blank' rel='noopener'>HTML et CSS de Dyma</a></p><p>" +
      "Objectif : utiliser Sass, grid, flex et tout ce qui a été appris lors de la certification</p><p>" +
      "Le design général a été donné lors du cours, mais l'utilisation et création des mixin et " +
      "l'utisation de l'héritage pour les barres de compétences ont été des rajouts que j'ai trouvé plus intéressant que le template proposés.</p>",
    code: "https://github.com/AdelinePat/resume",
    demo: "https://adelinepat.github.io/resume/",
    tags: [tags.sass, tags.personal, tags.html],
  },
  {
    title: "Todo JS",
    display: true,
    img: "./assets/project_img/todolist_js.png",
    altImg: "Capture d'écran du projet todo js",
    createdAt: "2025-08-29T10:00:00.000Z",
    content:
      "<p>Projet de Todo List dynamique réalisé dans le cadre de la <a href='https://dyma.fr/formations/javascript' target='_blank' rel='noopener'>certification JavaScript de Dyma</a>.</p><p>" +
      "L'objectif principal était de pratiquer la manipulation du DOM et la gestion des événements en " +
      "JavaScript, tout en appliquant une séparation claire entre les données (tableau), l'affichage et " +
      "les interactions utilisateur. Les fonctionnalités incluent l'ajout, la modification et la suppression " +
      "de tâches, avec gestion des erreurs (champs vides) et navigation intuitive (édition avec validation ou annulation).</p><p>" +
      "Chaque tâche est générée dynamiquement à partir du tableau, et l'édition se fait via un échange " +
      "entre paragraphe et champ input, avec focus et sélection automatiques.</p><p>" +
      "Ce projet m'a également permis de renforcer mes compétences en débogage, en manipulation du DOM, " +
      "et de m'initier à Docker pour des environnements de développement reproductibles.</p>",
    code: "https://github.com/AdelinePat/todolist_js",
    demo: "https://adelinepat.github.io/todolist_js/",
    tags: [tags.javascript, tags.docker, tags.personal, tags.css, tags.html],
  },
  {
    title: "Overlook Hotel",
    display: true,
    img: "https://raw.githubusercontent.com/AdelinePat/overlook_hotel/refs/heads/main/overlook_hotel.jpg",
    altImg: "Capture d'écran du projet Overlook Hotel",
    createdAt: "2025-09-29T10:00:00.000Z",
    content:
      "<p>Projet de groupe scolaire réalisé à trois contributeurs, visant à développer une solution " +
      "complète de gestion hôtelière.</p><p>" +
      "L'application se compose de trois services principaux : une interface client pour réserver chambres " +
      "et espaces d'événements et laisser des avis, une interface manager pour gérer employés, plannings et " +
      "statistiques, et un système d'authentification sécurisé avec Spring Security. Le projet inclut la gestion " +
      "complète des réservations, la supervision du personnel, l'affichage de statistiques, et la sécurisation " +
      "des comptes et sessions.</p><p>" +
      "Cette expérience m'a permis de renforcer mes compétences en Java, Spring Boot, JPA/Hibernate, Thymeleaf, " +
      "sécurité applicative et containerisation avec Docker pour des environnements de développement reproductibles.</p>",
    code: "https://github.com/AdelinePat/overlook_hotel",
    demo: "",
    tags: [
      tags.springboot,
      tags.java,
      tags.docker,
      tags.integrationTest,
      tags.unitaryTest,
      tags.thymeleaf,
      tags.maven,
      tags.mysql,
      tags.oop,
      tags.school,
      tags.teamwork,
      tags.git,
    ],
  },
  {
    title: "Uniquest",
    display: true,
    img: "https://raw.githubusercontent.com/AdelinePat/uniquest/refs/heads/main/MapGame.png",
    altImg: "Capture d'écran du projet Uniquest",
    createdAt: "2025-10-18T10:00:00.000Z",
    content:
      "<p>Projet de groupe scolaire réalisé à trois contributeurs : un RPG 2D en Unity (C#) " +
      "combinant exploration, combats au tour par tour et gestion d'inventaire.</p><p>" +
      "Ce projet pédagogique avait pour objectif d'apprendre à utiliser Unity et " +
      "structurer un jeu sans créer tous les assets. Les fonctionnalités incluent le " +
      "déplacement par tuiles sur des cartes interactives, un système de combat avec " +
      "IA ennemie, la gestion d'objets et potions, un gestionnaire de musique dynamique, " +
      "et un système de sauvegarde des statistiques et de la progression du joueur. " +
      "L'architecture C# est modulaire, séparant entités, menus et interactions cartes.</p><p>" +
      "Ce projet m'a permis de renforcer mes compétences en Unity, C#, design d'interface " +
      "et structuration de code orienté jeu vidéo.</p>",
    code: "https://github.com/AdelinePat/uniquest/",
    demo: "",
    tags: [
      tags.unity,
      tags.csharp,
      tags.unitaryTest,
      tags.oop,
      tags.unityVersionControl,
      tags.school,
      tags.teamwork,
    ],
  },
  {
    title: "Blog",
    display: true,
    img: "./assets/project_img/blog_js_project.png",
    altImg: "Capture d'écran du projet Blog",
    createdAt: "2025-10-25T10:00:00.000Z",
    content:
      "<p>Projet personnel réalisé dans le cadre de la <a href='https://dyma.fr/formations/javascript' target='_blank' rel='noopener'>certification JavaScript de Dyma</a>, visant à créer un blog dynamique.</p><p>" +
      "L'objectif principal était de pratiquer la manipulation du DOM, la délégation d'événements et " +
      "la gestion des fonctions asynchrones via une API externe.</p><p>" +
      "Les fonctionnalités incluent l'affichage des articles récupérés avec fetch, le filtrage par " +
      "catégories et par date, la conversion des dates ISO en format lisible, ainsi qu'un formulaire " +
      "pour ajouter ou modifier des articles avec validation des champs.</p><p>" +
      "Un système de modals permet de confirmer la suppression d'un article ou l'annulation d'une " +
      "création/édition, avec gestion des promesses personnalisées pour le retour utilisateur.</p><p>" +
      "Ce projet m'a permis de renforcer mes compétences en JavaScript, API, et gestion d'interactions " +
      "complexes côté client.</p>",
    code: "https://github.com/AdelinePat/blog_project/",
    demo: "",
    tags: [tags.javascript, tags.docker, tags.sass, tags.html, tags.personal],
  },
];

const articleTemplate = {
  title: "",
  display: true,
  img: "",
  altImg: "",
  createdAt: "2025-07-22T10:00:00.000Z",
  content: "",
  code: "",
  demo: "",
  tags: [],
};
