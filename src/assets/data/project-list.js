import { tags } from "./tags.js";
import { categories } from "./tags.js";

const portfolio = {
  title: "Portfolio",
  display: true,
  img: "./assets/project_img/portfolio.png",
  altImg: "Capture d'écran du projet Portfolio",
  firstCreatedAt: "2024-12-03T10:00:00.000Z",
  createdAt: "2025-11-07T10:00:00.000Z",
  content: `<p><strong>Réalisation d'un CV et d'un portfolio</strong> regroupant mes projets de groupe réalisés 
    dans le cadre de ma formation Bachelor IT, spécialisation développement logiciel, 
    ainsi que <em>mes projets personnels</em> (certifications Dyma, projets OpenClassRooms).</p>
    <p>Il s'agit de la deuxième version du portfolio, développée principalement en 
    <strong>JavaScript (vanilla), HTML et Sass</strong>. La quasi-totalité du HTML est générée via des 
    fichiers JavaScript, ce qui facilite les mises à jour et la maintenance. 
    L'environnement de développement utilise <strong>Docker</strong>, et le projet est construit avec <strong>Node</strong> et <strong>Vite</strong>.</p>
    <p>Le portfolio est <strong>déployé sur GitHub Pages</strong> grâce à une intégration continue via <strong>GitHub Actions</strong>.</p>`,
  code: "https://github.com/AdelinePat/portfolio",
  release: "",
  demo: "",
  filters: [categories.personal.id, categories.infrastructure.id, categories.frontend.id],
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
    content: `<p>Projet dans le cadre de la formation La Plateforme_ . Apprentissage des différents 
      composants hardware : CPU, GPU, refroidissement... utilisation de VMware, 
      installation de windows 11 et Debian en utilisant un dual boot.</p>`,
    code: "",
    release: "",
    demo: "",
    filters: [],
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
    display: false,
    img: "https://raw.githubusercontent.com/AdelinePat/tictactoe/refs/heads/main/tictactoe.jpg",
    altImg: "Image du jeu du morpion",
    createdAt: "2024-11-08T10:00:00.000Z",
    content: `<p>Réalisation d'un jeu de morpion avec python, création d'un jeu joueur contre joueur et joueur contre bot</p>
    <p>Première version du bot : l'algorithme cherche le premier emplacement vide disponible 
    (en partant du haut à gauche en allant vers la droite et en bas) pour y placer son signe.</p>
    <p>Deuxième version du bot : l'algorithme liste tous les emplacements disponibles restants 
    et choisi au hasard un emplacement avec le module random.</p>`,
    code: "https://github.com/AdelinePat/tictactoe",
    release: "",
    demo: "",
    filters: [],
    tags: [tags.python, tags.algorithmic, tags.school, tags.git],
  },
  {
    title: "Bloom Petals",
    display: false,
    img: "https://raw.githubusercontent.com/AdelinePat/webdesign-fleuriste/refs/heads/main/preview-desktop.jpg",
    altImg: "Capture d'écran du projet Bloom Petals",
    createdAt: "2024-11-23T10:00:00.000Z",
    content: `<p>Premier projet HTML et CSS, réalisation d'un site pour une fleuriste nommée Bloom Petals.</p>
    <p>Apprentissage des balises HTML5 et bonnes pratiques</p>`,
    code: "https://github.com/AdelinePat/webdesign-fleuriste",
    release: "",
    demo: "https://adelinepat.github.io/webdesign-fleuriste/",
    filters: [categories.frontend.id],
    tags: [tags.html, tags.css, tags.figma, tags.school, tags.git],
  },
  {
    title: "Blackpink",
    display: true,
    img: "https://raw.githubusercontent.com/AdelinePat/fansite/refs/heads/main/preview_fansite1_blackpink.jpg",
    altImg: "Capture d'écran du projet Blackpink",
    createdAt: "2024-12-02T10:00:00.000Z",
    content: `<p>Création d'un fansite sur blackpink, projet individuel lié au projet Fansite en groupe.</p>
    <p>Utilisation des pseudo classes et des transitions</p>`,
    code: "https://github.com/AdelinePat/fansite",
    release: "",
    demo: "https://adelinepat.github.io/fansite/fansite1.html",
    filters: [categories.frontend.id],
    tags: [tags.html, tags.css, tags.figma, tags.school, tags.git],
  },
  {
    title: "Hackaton - KoSphere",
    display: true,
    img: "./assets/project_img/kosphere_project.jpg",
    altImg: "image représentant le projet d'idéation du hackaton",
    createdAt: "2024-12-13T10:00:00.000Z",
    content: `<p>Participation à un hackaton à la Plateforme_ . Idéation sur un sujet imposé : 
      l'amélioration de l'utiisation des IoT au sein de notre centre de formation</p>
      <p>Echange des idées au sein d'une équipe de 4 à l'aide du crazy 8</p>
      <p>L'idée choisie est une machine à café connectée avec une application notifiant 
      les utilisateurs si une machine est en panne, à nouveau en service et quelle 
      quantité de quelle boisson se trouve dans la machine.</p>
      <p>Le problème nous ayant poussé à choisir cette idée plutôt qu'une autre : 
      les machines à café souvent en panne poussent les élèves à aller consommer en 
      dehors de l'école, causant une perte de temps et de la mauvaise humeur lorsque 
      l'utilisateur découvre que toutes les machines sont en pannes.</p>`,
    code: "",
    release: "",
    demo: "",
    filters: [],
    tags: [tags.ideation, tags.teamwork, tags.school],
  },
  {
    title: "AzerType",
    display: false,
    img: "./assets/project_img/azertype_project.jpg",
    altImg: "image de AzerType",
    createdAt: "2024-12-26T10:00:00.000Z",
    content: `<p>Création d'un jeu pour s'entraîner à taper au clavier dans le cadre d'un cours OpenClassRooms : 
      <a href="https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript" target="_blank" rel="noopener">Apprenez à programmer avec JavaScript</a>.</p>
      <p>Le cours se concentrait sur l'apprentissage du javascript.
      Le CSS et HTML a donc été fourni par OpenClassRooms.</p>
      <p>Utilisation du DOM (Document Object Model), modification du contenu html selon certaines conditions 
      (au niveau du score), utilisation d'une regex pour le formulaire.`,
    code: "https://github.com/AdelinePat/AzerType",
    release: "",
    demo: "https://adelinepat.github.io/AzerType/",
    filters: [categories.personal.id, categories.frontend.id],
    tags: [tags.regex, tags.personal, tags.javascript],
  },
  {
    title: "Calculatrice",
    display: false,
    img: "./assets/project_img/calculator_project1.jpg",
    altImg: "Capture d'écran du projet de la calculatrice",
    createdAt: "2025-01-21T10:00:00.000Z",
    content: `<p>Réalisation d'une calculatrice dans le terminal avec python. 
      Prise en compte d'un input géré par une regex.</p>
      <p>Utilisation du try except, gestion des diverses exceptions possible 
      (ZeroDivisionError, gestion des erreurs possible après traitement par la regex)</p>`,
    code: "https://github.com/AdelinePat/my_calculator",
    release: "",
    demo: "",
    filters: [],
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
    display: false,
    img: "./assets/project_img/hangman_project.jpg",
    altImg: "Capture d'écran du projet de Jeu du pendu",
    createdAt: "2025-01-29T10:00:00.000Z",
    content: `<p>Réalisation d'un jeu du pendu avec python en utilisant l'interface graphique Pygame.</p>
    <p>Utilisation d'un fichier Json pour enregistrer les scores et les  supprimer.</p>`,
    code: "https://github.com/AdelinePat/hangman",
    release: "",
    demo: "",
    filters: [],
    tags: [tags.python, tags.pygame, tags.teamwork, tags.school, tags.git],
  },
  {
    title: "Fruit Ninja",
    display: false,
    img: "./assets/project_img/fruit_ninja_project.jpg",
    altImg: "Capture d'écran du projet de jeu Fruit Ninja",
    createdAt: "2025-02-04T10:00:00.000Z",
    content: `<p>Réalisation d'un jeu type Fruit Ninja avec python en utilisant l'interface graphique Pygame. 
      Lorsque la touche du clavier correspondante a été appuyée, le fruit est coupé.</p>
      <p>Création de plusieurs classes (fruits, boutons) et utilisation de 
      l'<strong>héritage</strong> (bouton_image hérite de bouton)</p>`,
    code: "https://github.com/AdelinePat/typing-game",
    release: "",
    demo: "",
    filters: [],
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
    display: false,
    img: "./assets/project_img/pokemon_project.jpg",
    altImg: "Capture d'écran du projet de jeu pokemon",
    createdAt: "2025-03-02T10:00:00.000Z",
    content: `<p>Réalisation d'un jeu Pokémon en groupe. Créations d'une classe pokémon <strong>héritant</strong> 
      d'évolution afin de gérer le gain d'expérience, de level up et l'évolution.</p>
      <p>Utilisation du modèle MVC (Model View Controller) afin de faire communiquer les 
      classes et fichier back avec les classes et fichiers front</p>
      <p>Sauvegarde des données dans des json (traduction des objets en 
      dictionnaire) puis instanciation des objets depuis les fichiers json</p>`,
    code: "https://github.com/AdelinePat/pokemon",
    release: "",
    demo: "",
    filters: [],
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
    content: `<p>
                Développement en équipe d'une application de gestion financière permettant
                aux utilisateurs de gérer leurs comptes bancaires et leurs transactions
                à travers une interface graphique.
              </p>

              <p>
                Mise en place d'une base de données <em>MySQL</em> pour persister
                les utilisateurs, comptes bancaires et transactions. J'ai notamment travaillé
                sur la création des comptes bancaires ainsi que sur les opérations de
                dépôt, retrait et transfert entre comptes.
              </p>

              <p>
                Développement de fonctionnalités de consultation et de filtrage de
                l'historique des transactions, ainsi que de l'authentification des
                utilisateurs. Les mots de passe sont sécurisés par
                <strong>hachage avec bcrypt</strong> avant leur stockage en base de données.
              </p>

              <p>
                Participation à la conception du projet, à l'intégration des fonctionnalités
                développées en équipe et aux tests manuels. L'application utilise
                <em>Python et Tkinter</em> pour son interface graphique.
              </p>`,
    code: "https://github.com/AdelinePat/budget_buddy",
    release: "",
    demo: "",
    filters: [categories.databases.id],
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
    content: `<p>Travail de conception du projet, réalisation : d'un diagramme de classe, d'une maquette Figma du projet. 
      Répartition des tâches dans le groupe, intégration et test manuel des nouvelles features.</p>
      <p>Réalisation d'un jeu de démineur avec pygame. Utilisation d'un design system 
      (création des différents composants réutilisables et modifiable de l'interface graphique)</p>
      <p>Programmation orientée objet. Utilisation de la récursivité pour découvrir en chaîne les cases libres.</p>
      <p>Score enregistré dans un json</p>`,
    code: "https://github.com/AdelinePat/minesweeper",
    release: "",
    demo: "",
    filters: [],
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
    content: `<p>Projet d'entraînement 
    <a href='https://dyma.fr/formations/cpp' target='_blank' rel='noopener'>à la certification C++ de Dyma</a> 
    à C++ , utilisant un simple menu, des namespaces</p>`,
    code: "https://github.com/AdelinePat/rock-paper-scissors",
    release: "",
    demo: "",
    filters: [categories.personal.id],
    tags: [tags.cmake, tags.cpp, tags.console, tags.personal],
  },
  {
    title: "My Discord",
    display: true,
    img: "./assets/project_img/whispr-mydiscord.jpg",
    altImg: "Application My Discord",
    createdAt: "2025-05-12T10:00:00.000Z",
    content: `<p>
            Développement en équipe d'une application de messagerie instantanée
            client/serveur en <em>C</em>, constituant une première expérience
            avec la programmation réseau et la gestion de la mémoire.
          </p>

          <p>
            Mise en place d'une communication entre des processus distincts, avec un
            serveur et ses clients communiquant via des <strong>sockets</strong>, 
            avec des données sérialisées au format JSON. Le serveur centralise la gestion des utilisateurs
            et des channels tandis que les clients permettent d'interagir avec le
            système de messagerie.
          </p>

          <p>
            Conception et gestion d'une base de données <em>PostgreSQL</em>,
            notamment avec des <em>fonctions et triggers</em> permettant de contrôler l'accès
            des utilisateurs aux channels publics.
          </p>

          <p>
            Ce projet m'a permis de découvrir les problématiques liées au développement
            réseau en C et à la gestion manuelle de la mémoire, dans un environnement
            de développement basé sur MSYS2.
          </p>`,
    code: "https://github.com/AdelinePat/myDiscord",
    release: "",
    demo: "",
    filters: [
      categories.networking.id,
      categories.backend.id,
      categories.databases.id,
    ],
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
    content: `<p>Réalisation d'une todo liste en console avec C++ dans le cadre de la certification 
      <a href='https://dyma.fr/formations/cpp' target='_blank' rel='noopener'>C++ de Dyma</a></p><p>
      Nettoyage des inputs utilisateurs pour avoir le bon format final.</p><p>
      Réalisation des actions CRUD dans un fichier csv.</p><p>
      Gestion des erreurs</p>`,
    code: "https://github.com/AdelinePat/todolist_cpp",
    release: "",
    demo: "",
    filters: [categories.personal.id],
    tags: [tags.cpp, tags.cmake, tags.console, tags.personal],
  },
  {
    title: "Tower Defense",
    display: false,
    img: "https://github.com/AdelinePat/tower-defense/blob/main/docs/README/main_menu.png?raw=true",
    altImg: "Capture d'écran du projet Tower Defense",
    createdAt: "2025-06-17T10:00:00.000Z",
    content: `<p>Réalisation d'un jeu type Tower Defense</p><p>
      Création des ennemis via une factory, 4 types d'ennemi 
      dont un créé par défaut si aucune précision n'est donnée</p><p>
      Utilisation du design pattern strategy pour les mouvements des ennemis</p><p>
      Chaque ennemi gère son propre mouvement, abstraction et polymorphisme utilisé</p><p>
      Factory pour création des trois différents type de tours, même principe que pour les ennemis</p>`,
    code: "https://github.com/AdelinePat/tower-defense",
    release: "",
    demo: "",
    filters: [],
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
    content: `<p>Développement en équipe d'une application Java en ligne de commande permettant
              de convertir du texte entre différentes bases numériques et d'appliquer un
              chiffrement de César.
              </p>

              <p>
              <strong>Conception et implémentation de l'architecture du projet</strong> :
              organisation en modules, interface commune pour les convertisseurs et
              <strong>Factory</strong> permettant de sélectionner le convertisseur approprié.
              Chaque convertisseur encapsule sa propre logique, facilitant l'ajout de nouveaux
              formats de conversion et la maintenance du projet.
              </p>

              <p>
              Implémentation des conversions binaire, décimale (ASCII), octale et hexadécimale,
              avec possibilité d'effectuer les conversions dans les deux sens.
              Ajout du chiffrement et déchiffrement de César avec une clé choisie par l'utilisateur.
              </p>

              <p>
              Mise en place d'une gestion des erreurs avec des exceptions dédiées,
              ainsi que du nettoyage et de la validation des entrées utilisateur.
              Le projet a également fait l'objet de <em>refactorings visant à consolider
              et maintenir une structure cohérente</em> entre les différentes contributions.
              </p>`,
    code: "https://github.com/AdelinePat/globalConverter",
    release: "",
    demo: "",
    filters: [categories.architecture.id],
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
    content: `<p>Développement en équipe d'une application Java de gestion et de visualisation
              des données d'élèves, avec PostgreSQL et JavaFX.
              </p>

              <p>
              <strong>Conception et implémentation d'un système de filtrage extensible</strong>
              permettant de rechercher les étudiants par nom, prénom, âge ou moyenne.
              Le système repose sur une interface commune, plusieurs implémentations de filtres
              et une Factory afin de sélectionner le comportement approprié sans coupler
              le reste de l'application aux implémentations concrètes.
              </p>

              <p>
              Séparation de l'accès aux données et de la logique applicative grâce à une couche
              <strong>DAO</strong> dédiée aux requêtes PostgreSQL et à la construction des objets
              métier. Mise en place de la gestion des erreurs avec des exceptions dédiées.
              </p>

              <p>
              Gestion des étudiants avec les opérations CRUD, filtrage dynamique et
              visualisation des résultats sous forme de graphiques. Création de comptes
              administrateurs avec hachage des mots de passe et sel unique par utilisateur.
              </p>

              <p>
              Utilisation de JavaFX pour l'interface graphique, Maven pour la gestion du projet
              et JUnit pour les tests unitaires.
              </p>`,
    code: "https://github.com/AdelinePat/LaPlateformeTracker",
    release: "",
    demo: "",
    filters: [categories.databases.id, categories.architecture.id],
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
    content: `<p>Réalisation d'un CV dans le cadre du cours 
      <a href='https://dyma.fr/formations/html-css' target='_blank' rel='noopener'>HTML et CSS de Dyma</a></p><p>
      Objectif : utiliser Sass, grid, flex et tout ce qui a été appris lors de la certification</p><p>
      Le design général a été donné lors du cours, mais l'utilisation et création des mixin et 
      l'utisation de l'héritage pour les barres de compétences ont été des rajouts que j'ai trouvé plus intéressant que le template proposés.</p>`,
    code: "https://github.com/AdelinePat/resume",
    release: "",
    demo: "https://adelinepat.github.io/resume/",
    filters: [categories.personal.id, categories.frontend.id],
    tags: [tags.sass, tags.personal, tags.html],
  },
  {
    title: "Todo JS",
    display: true,
    img: "./assets/project_img/todolist_js.png",
    altImg: "Capture d'écran du projet todo js",
    createdAt: "2025-08-29T10:00:00.000Z",
    content: `<p>Projet de Todo List dynamique réalisé dans le cadre de la 
      <a href='https://dyma.fr/formations/javascript' target='_blank' rel='noopener'>certification JavaScript de Dyma</a>.</p><p>
      L'objectif principal était de pratiquer la manipulation du DOM et la gestion des événements en 
      JavaScript, tout en appliquant une séparation claire entre les données (tableau), l'affichage et 
      les interactions utilisateur. Les fonctionnalités incluent l'ajout, la modification et la suppression 
      de tâches, avec gestion des erreurs (champs vides) et navigation intuitive (édition avec validation ou annulation).</p><p>
      Chaque tâche est générée dynamiquement à partir du tableau, et l'édition se fait via un échange 
      entre paragraphe et champ input, avec focus et sélection automatiques.</p><p>
      Ce projet m'a également permis de renforcer mes compétences en débogage, en manipulation du DOM, 
      et de m'initier à Docker pour des environnements de développement reproductibles.</p>`,
    code: "https://github.com/AdelinePat/todolist_js",
    release: "",
    demo: "https://adelinepat.github.io/todolist_js/",
    filters: [categories.personal.id, categories.frontend.id],
    tags: [tags.javascript, tags.docker, tags.personal, tags.css, tags.html],
  },
  {
    title: "Overlook Hotel",
    display: true,
    img: "https://raw.githubusercontent.com/AdelinePat/overlook_hotel/refs/heads/main/overlook_hotel.jpg",
    altImg: "Capture d'écran du projet Overlook Hotel",
    createdAt: "2025-09-29T10:00:00.000Z",
    content: `<p>
          Développement en équipe d'une application web complète de gestion hôtelière
          avec <em>Java</em> et <em>Spring Boot</em>, permettant aux clients de réserver
          des chambres et espaces événementiels, et aux managers de gérer les employés,
          les plannings et les réservations.
        </p>

        <p>
          Participation principalement au développement backend : conception du modèle
          métier avec <em>JPA/Hibernate</em>, gestion des entités et de leurs relations,
          création des repositories et services, ainsi que développement des fonctionnalités
          liées aux réservations, aux clients, aux employés et aux chambres.
        </p>

        <p>
          Mise en place de recherches et filtres dynamiques sur les données grâce aux
          <em>JPA Specifications</em>, permettant de construire des requêtes complexes
          selon différents critères.
        </p>

        <p>
          Contribution à la sécurisation de l'application avec <em>Spring Security</em>
          ainsi qu'à la gestion de l'authentification et des rôles.
        </p>

        <p>
          Mise en place d'un environnement de développement reproductible avec
          <em>Docker</em> et <em>Docker Compose</em>, incluant l'application Spring Boot,
          la base de données MySQL et son initialisation.
        </p>`,
    // content: `<p>Projet de groupe scolaire réalisé à trois contributeurs, visant à développer une solution
    //   complète de gestion hôtelière.</p><p>
    //   L'application se compose de trois services principaux : une interface client pour réserver chambres
    //   et espaces d'événements et laisser des avis, une interface manager pour gérer employés, plannings et
    //   statistiques, et un système d'authentification sécurisé avec Spring Security. Le projet inclut la gestion
    //   complète des réservations, la supervision du personnel, l'affichage de statistiques, et la sécurisation
    //   des comptes et sessions.</p><p>
    //   Cette expérience m'a permis de renforcer mes compétences en Java, Spring Boot, JPA/Hibernate, Thymeleaf,
    //   sécurité applicative et containerisation avec Docker pour des environnements de développement reproductibles.</p>`,
    code: "https://github.com/AdelinePat/overlook_hotel",
    release: "",
    demo: "",
    filters: [
      categories.databases.id,
      categories.backend.id,
      categories.infrastructure.id,
      categories.networking.id,
      categories.architecture.id,
    ],
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
    display: false,
    img: "https://raw.githubusercontent.com/AdelinePat/uniquest/refs/heads/main/MapGame.png",
    altImg: "Capture d'écran du projet Uniquest",
    createdAt: "2025-10-18T10:00:00.000Z",
    content: `<p>Projet de groupe scolaire réalisé à trois contributeurs : un RPG 2D en Unity (C#) 
      combinant exploration, combats au tour par tour et gestion d'inventaire.</p><p>
      Ce projet pédagogique avait pour objectif d'apprendre à utiliser Unity et 
      structurer un jeu sans créer tous les assets. Les fonctionnalités incluent le 
      déplacement par tuiles sur des cartes interactives, un système de combat avec 
      IA ennemie, la gestion d'objets et potions, un gestionnaire de musique dynamique, 
      et un système de sauvegarde des statistiques et de la progression du joueur. 
      L'architecture C# est modulaire, séparant entités, menus et interactions cartes.</p><p>
      Ce projet m'a permis de renforcer mes compétences en Unity, C#, design d'interface 
      et structuration de code orienté jeu vidéo.</p>`,
    code: "https://github.com/AdelinePat/uniquest/",
    release: "",
    demo: "",
    filters: [],
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
    content: `<p>Projet personnel réalisé dans le cadre de la 
      <a href='https://dyma.fr/formations/javascript' target='_blank' rel='noopener'>certification JavaScript de Dyma</a>, 
      visant à créer un blog dynamique.</p><p>
      L'objectif principal était de pratiquer la manipulation du DOM, la délégation d'événements et 
      la gestion des fonctions asynchrones via une API externe.</p><p>
      Les fonctionnalités incluent l'affichage des articles récupérés avec fetch, le filtrage par 
      catégories et par date, la conversion des dates ISO en format lisible, ainsi qu'un formulaire 
      pour ajouter ou modifier des articles avec validation des champs.</p><p>
      Un système de modals permet de confirmer la suppression d'un article ou l'annulation d'une 
      création/édition, avec gestion des promesses personnalisées pour le retour utilisateur.</p><p>
      Ce projet m'a permis de renforcer mes compétences en JavaScript, API, et gestion d'interactions 
      complexes côté client.</p>`,
    code: "https://github.com/AdelinePat/blog_project/",
    release: "",
    demo: "",
    filters: [categories.personal.id],
    tags: [tags.javascript, tags.docker, tags.sass, tags.html, tags.personal],
  },
  {
    title: "Brick Breaker",
    display: true,
    img: "https://raw.githubusercontent.com/AdelinePat/brick-breaker/refs/heads/main/img/breakbreaker.jpg",
    altImg: "Capture d'écran du projet Brick Breaker",
    createdAt: "2025-11-29T10:00:00.000Z",
    content: `<p>Projet de groupe de deuxième année de Bachelor consistant à 
      développer un jeu 2D de type Brick Breaker en C++ avec la bibliothèque SFML, 
      le tout conteneurisé avec Docker pour garantir une exécution multiplateforme.</p>
      <p>L'objectif de ce projet était de renforcer nos compétences en programmation 
      orientée objet et en architecture logicielle appliquée au jeu vidéo, sans utiliser 
      de moteur de jeu. Le jeu intègre les mécaniques classiques du genre : contrôle de la raquette, 
      gestion des collisions et de la physique de la balle, ainsi que génération dynamique de 
      briques avec un système de durabilité.</p>
      <p>L'architecture repose sur une organisation modulaire (<em>GameManager, Ball, 
      Paddle, BrickFactory</em>, etc.), assurant une séparation claire des responsabilités et une meilleure 
      maintenabilité du code. Le projet inclut également une chaîne de compilation complète avec 
      CMake et une exécution via Docker, garantissant un <strong>environnement de développement reproductible</strong> 
      sur différentes machines.</p>
      <p>Ce projet m'a permis de consolider mes compétences en C++, en conception 
      logicielle et en gestion d'environnements de développement pour applications graphiques.</p>`,
    code: "https://github.com/AdelinePat/brick-breaker",
    release: "",
    demo: "",
    filters: [categories.infrastructure.id, categories.architecture.id],
    tags: [
      tags.cpp,
      tags.docker,
      tags.cmake,
      tags.sfml,
      tags.oop,
      tags.school,
      tags.teamwork,
      tags.git,
    ],
  },
  {
    title: "Tile Twister",
    display: true,
    img: "https://raw.githubusercontent.com/AdelinePat/2048-tile-twister/refs/heads/main/assets/img/2048_win.png",
    altImg: "Capture d'écran du projet Tile Twister",
    createdAt: "2025-12-19T10:00:00.000Z",
    content: `<p>Projet de groupe de développement d'un clone du jeu 2048 en C++17 
      avec SDL3, axé sur la conception d'une architecture claire et la gestion d'un affichage 
      graphique fluide.</p>
      <p>L'objectif de ce projet était de recréer fidèlement les mécaniques du jeu original 
      tout en structurant le code selon une séparation logique entre la logique métier et 
      l'interface graphique. Le jeu repose sur une grille 4x4, la fusion des tuiles identiques 
      et la gestion des états de victoire et de défaite en temps réel.</p>
      <p>L'architecture suit un découpage de type <strong>MVC</strong> avec une séparation entre le cœur 
      du jeu (<em>Game, Grid, Tile</em>) et la couche d'affichage (<em>Window, GridView, TileView</em>), facilitant 
      la maintenabilité et l'évolution du projet. L'ensemble est compilé avec CMake et conteneurisé 
      via <strong>Docker</strong> pour assurer une <strong>exécution simple</strong> et <strong>reproductible</strong> sur différents environnements.</p>
      <p>Ce projet m'a permis de renforcer mes compétences en C++, en conception d'architecture logicielle 
      et en utilisation de SDL pour le développement d'interfaces graphiques.</p>`,
    code: "https://github.com/AdelinePat/2048-tile-twister",
    release: "",
    demo: "",
    filters: [categories.infrastructure.id, categories.architecture.id],
    tags: [
      tags.cpp,
      tags.docker,
      tags.integrationTest,
      tags.cmake,
      tags.sdl,
      tags.oop,
      tags.school,
      tags.teamwork,
      tags.git,
    ],
  },
  {
    title: "WizzMania",
    display: true,
    img: "https://raw.githubusercontent.com/AdelinePat/wizzMania/refs/heads/main/assets/login.png",
    altImg: "Capture d'écran du projet WizzMania",
    createdAt: "2026-03-30T10:00:00.000Z",
    content: `<p>Projet de groupe de deuxième année de Bachelor, réalisation d'une application de messagerie 
      instantanée en temps réel inspirée de MSN Messenger, développée en C++ (serveur) 
      et Qt (client).</p>
      <p>Ce projet s'est distingué par une implication technique complète sur la partie 
      serveur. L'architecture repose sur une 
      approche <strong>Domain-Driven Design (DDD)</strong> structurée en plusieurs domaines métier 
      (authentification, messages, channels, invitations, websocket), avec une attention 
      particulière portée à la séparation des responsabilités et à la conception d'une 
      <a target="_blank" rel="noopener" href="https://github.com/AdelinePat/wizzMania/blob/main/docs/backend_API.md">API claire et cohérente</a>.</p>
      <p>Le serveur gère une communication hybride <strong>HTTP/WebSocket</strong> avec <strong>authentification 
      JWT</strong>, gestion des utilisateurs, channels, messages en temps réel et notifications
       multi-devices. L'ensemble est conteneurisé avec Docker, incluant la base de données 
       MySQL et un pipeline de build garantissant un environnement reproductible et une 
       exécution stable sur différentes machines.</p>
      <p>En parallèle du développement, le projet a impliqué la conception de l'architecture 
      globale, la mise en place de l'environnement de développement, la coordination 
      de l'équipe, ainsi que des revues de code approfondies pour accompagner l'implémentation 
      du client et garantir la cohérence du système complet. Une chaîne de build et de 
      <a  target="_blank" rel="noopener" href="https://github.com/AdelinePat/wizzMania/releases">release 
      multiplateforme (Windows/Linux)</a> a également été mise en place avec des Github Actions.</p>
      <p>Ce projet m'a permis de consolider des compétences avancées en 
      <a target="_blank" rel="noopener" href="https://raw.githubusercontent.com/AdelinePat/wizzMania/refs/heads/main/docs/server_architecture.png">conception d'architecture</a> 
      logicielle, développement backend C++, gestion de projet technique et mise en production 
      d'une application distribuée en conditions proches d'un environnement réel.</p>`,
    code: "https://github.com/AdelinePat/wizzMania",
    release: "https://github.com/AdelinePat/wizzMania/releases",
    demo: "",
    filters: [
      categories.databases.id,
      categories.networking.id,
      categories.infrastructure.id,
      categories.architecture.id,
      categories.backend.id,
    ],
    tags: [
      tags.qt,
      tags.githubActions,
      tags.unitaryTest,
      tags.docker,
      tags.cmake,
      tags.cpp,
      tags.oop,
      tags.school,
      tags.teamwork,
      tags.mysql,
      tags.git,
    ],
  },
  {
    title: "Inferno",
    display: true,
    img: "https://github.com/AdelinePat/inferno/blob/main/_docs/dashboard/dashboard_screenshot.png?raw=true",
    altImg: "Capture d'écran du projet Inferno",
    createdAt: "2026-08-04T10:00:00.000Z",
    content: `<p>Inferno est une <strong>plateforme de monitoring distribuée</strong> coordonnant des agents système,
    un serveur central et un dashboard pour l'interface graphique via un protocole binaire personnalisé.</p>

    <p>L'architecture repose sur la <strong>programmation événementielle sans threads</strong>.
    Le serveur multiplex les connexions via epoll, l'agent gère son event loop avec poll/WSAPoll.</p>

    <p>Le <strong>protocole binaire</strong> décrit les structures et leur format sur le réseau
    ainsi que les règles de communication. Il est divisé en deux parties : les structures entre dashboard
    et serveur, et les structures entre serveur et agents
    (<a href="https://github.com/AdelinePat/inferno/blob/main/_docs/project/lptf_binary_protocol.md">voir spécification du protocole</a>).
    Le protocole gère le chunking des réponses volumineuses et limite leur taille.
    Les <a href="https://github.com/AdelinePat/inferno/tree/main/_docs/protocol">diagrammes de séquence</a> 
    pour chaque type d'interaction (enregistrement, commandes, métriques, déconnexion) sont documentés.</p>

    <p>Le serveur s'organise en <strong>domaines métier</strong> (agents, commandes, réponses, métriques) avec un <em>dispatcher central</em>
    capable de router les requêtes du dashboard vers un agent cible, collecter les réponses, les persister et les renvoyer au dashboard. 
    Chaque domaine encapsule sa logique et ses repositories 
    (<a href="https://github.com/AdelinePat/inferno/tree/main/_docs/server">architecture du serveur</a>).</p>

    <p>L'agent possède également un <em>dispatcher</em> pour router et exécuter les commandes. Son <em>MetricsController</em> est appelé directement 
    par la boucle événementielle pour orchestrer la collecte — le stream de métriques est démarré ou arrêté via le dispatcher,
    mais l'appel de la collecte n'y passe pas (<a href="https://github.com/AdelinePat/inferno/tree/main/_docs/agent">architecture de l'agent</a>).</p>

    <p>Le dashboard est réalisé avec Qt en utilisant les abstractions de sockets cross-platform fournies par la librairie transport partagée.</p>

    <p>Le développement a suivi une <strong>approche TDD</strong> avec couverture test par composant. L'infrastructure repose sur Docker avec une pipeline multi-étapes compilant et testant chaque composant avant production (<a href="https://github.com/AdelinePat/inferno/tree/main#how-are-agent-and-server-built">pipeline de build</a>). Une GitHub Action a été mise en place pour générer les releases avec des appImages pour Linux.</p>`,
    code: "https://github.com/AdelinePat/inferno",
    release: "https://github.com/AdelinePat/inferno/releases",
    demo: "",
    filters: [
      categories.networking.id,
      categories.backend.id,
      categories.databases.id,
      categories.infrastructure.id,
      categories.architecture.id,
    ],
    tags: [
      tags.postgresql,
      tags.socket,
      tags.githubActions,
      tags.docker,
      tags.qt,
      tags.timescaledb,
      tags.unitaryTest,
      tags.integrationTest,
      tags.cmake,
      tags.cpp,
      tags.oop,
      tags.school,
      tags.teamwork,
      tags.git,
    ],
  },
];

const articleTemplate = {
  title: "",
  display: true,
  img: "",
  altImg: "",
  createdAt: "2026-12-31T10:00:00.000Z",
  content: "",
  code: "",
  release: "",
  release: "",
  demo: "",
  filters: [],
  tags: [],
};
