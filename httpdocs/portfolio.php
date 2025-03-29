<?php 
$isResume = false;
$isPortfolio = true;
$isContact = false;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Adeline Patenne">
    <meta name="description" content="Portfolio des projets réalisés par Adeline Patenne. Travail personnel, scolaire, individuel et en équipe.">
    <link rel="stylesheet" href="style.css">

    <script defer src="script.js"></script>
    <script defer src="./portfolio_filter.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://unpkg.com/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="./images/Logo AP.ico">
    <title>Portfolio</title>
</head>
<body>
    <?php require_once(__DIR__ . '/header.php'); ?>
    <!-- <i class='bx bx-filter-alt'></i> -->
    <!-- <i class='bx bx-filter' ></i> -->
    <!-- <i class="fa-solid fa-filter"></i>  -->
     
    <!-- <strong><a href="https://boxicons.com/">Boxicons</a></strong> -->
    <main>
        <section id="filter_nav">
            <h2 class="filter_nav-title-h2"><span class="filter_nav-title">Filtrer <i class='bx bx-filter-alt'></i></span><span class="filter_nav-number"></span></h2>
            <article class="filter_nav-articles">
                <ul>
                    <li id="all" class="filter_items reset active">Tous</li>
                    <li id="git" class="filter_items">Git</li>
                    <li id="teamwork" class="filter_items">Travail d'équipe</li>
                    <li id="poo" class="filter_items">POO</li>
                    <li id="sql/nosql" class="filter_items">SQL/NoSQL</li>
                    <!-- <li id="java" class="filter_items">Java</li> -->
                    <!-- <li id="c/c++" class="filter_items">C/C++</li>  -->
                    <!-- <li id="c#" class="filter_items">C#</li> -->
                    <!-- <li id="cryptographie" class="filter_items">Cryptographie<li> -->
                    <!-- <li id="docker" class="filter_items">Docker</li> -->
                    <!-- <li id="rust" class="filter_items">Rust</li> -->
                    <!-- <li id="go" class="filter_items">Go</li> -->
                    <li id="python" class="filter_items">Python</li>
                    <li id="pygame" class="filter_items">Pygame</li>
                    <li id="algorithmique" class="filter_items">Algorithmique</li>
                    <li id="html/css" class="filter_items">HTML/CSS</li>
                    <li id="js" class="filter_items">JavaScript</li>
                    <li id="php" class="filter_items">PHP</li>
                    <li id="figma" class="filter_items">Figma</li>
                    <li id="linux" class="filter_items">Linux</li>
                    <li id="virtualisation" class="filter_items">Virtualisation</li>
                    <li id="school" class="filter_items">Scolaire</li>
                    <li id="personal" class="filter_items">Personnel</li>
                </ul>
            </article>

        </section>
        <section class="portfolio-gallery">

            <!-- <article class="all git python poo pygame algorithmique teamwork school">
                    <figure>
                        <img src="#" alt="image du jeu du démineur" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>Démineur</h2>
                        <p>
                            Réalisation d'un jeu de démineur avec pygame. Utilisation d'un design system (création des différents composants réutilisables et modifiable de l'interface graphique)
                        </p>
                        <p>
                            Programmation orientée objet. Score enregistré dans un json
                        </p>
                        <p class="coming-soon">
                            Mars 2025
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/pokemon" target="_blank">Code source</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-brands fa-python"></i> Python</strong>
                            <strong><i class="fa-sharp fa-solid fa-code"></i> POO</strong>
                            <strong> Pygame</strong>
                            <strong> MVC</strong>
                            <strong> Design System</strong>
                            <strong> Algorithmique</strong>
                            <strong><i class="fa-solid fa-users"></i> Travail d'équipe</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article> -->

            <article class="all git python poo tkinter sql/nosql algorithmique teamwork school">
                    <figure>
                        <img src="https://raw.githubusercontent.com/AdelinePat/budget_buddy/refs/heads/main/budget_buddy.png" alt="image de l'application budget buddy" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>Budget Buddy</h2>
                        <p>
                            Réalisation d'un application de gestion bancaire. Utilisation de SQL, SQL CLI et du connecteur mysql-connector-python.
                        </p>
                        <p>
                            Réalisation d'une interface graphique avec Tkinter, projet basé sur le Model View Controller
                        </p>
                        <p>
                            Création de compte client et bancaire, regex pour les emails et les mots de passe, hashage avec sallage des mots de passe avant de les enregistrer en base de donnée.
                        </p>
                        <p class="coming-soon">
                            Mars 2025
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/budget_buddy" target="_blank">Code source</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-solid fa-database"> SQL</strong>
                            <strong><i class="fa-brands fa-python"></i> Python</strong>
                            <strong><i class="fa-sharp fa-solid fa-code"></i> POO</strong>
                            <strong> MVC</strong>
                            <strong> Tkinter</strong>
                            <strong> Algorithmique</strong>
                            <strong><i class="fa-solid fa-users"></i> Travail d'équipe</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article>

            <article class="all git python poo pygame algorithmique teamwork school">
                    <figure>
                        <img src="./images/pokemon_project.jpg" alt="image du jeu pokemon" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>Pokémon</h2>
                        <p>
                            Réalisation d'un jeu Pokémon en deux semaines. Créations d'une classe pokémon <strong>héritant</strong> d'évolution afin de gérer le gain d'expérience, de level up et l'évolution.
                        </p>
                        <p>
                            Utilisation du modèle MVC (Model View Controller) afin de faire communiquer les classes et fichier back avec les classes et fichiers front
                        </p>
                        <p>
                            Sauvegarde des données dans des json (traduction des objets en dictionnaire) puis instanciation des objets depuis les fichiers json
                        </p>
                        <p class="coming-soon">
                            Février 2025
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/pokemon" target="_blank">Code source</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-brands fa-python"></i> Python</strong>
                            <strong><i class="fa-sharp fa-solid fa-code"></i> POO</strong>
                            <strong> Pygame</strong>
                            <strong>Algorithmique</strong>
                            <strong><i class="fa-solid fa-users"></i> Travail d'équipe</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article>

                <article class="all git python poo pygame algorithmique teamwork school">
                    <figure>
                        <img src="./images/fruit_ninja_project.jpg" alt="image du jeu fruit ninja" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>Fruit Ninja</h2>
                        <p>
                            Réalisation d'un jeu type Fruit Ninja avec python en utilisant l'interface graphique Pygame. Lorsque la touche du clavier correspondante a été appuyée, le fruit est coupé.
                        </p>
                        <p>
                            Création de plusieurs classes (fruits, boutons) et utilisation de l'<strong>héritage</strong> (bouton_image hérite de bouton)
                        </p>
                        <p class="coming-soon">
                            Janvier 2025
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/typing-game" target="_blank">Code source</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-brands fa-python"></i> Python</strong>
                            <strong><i class="fa-sharp fa-solid fa-code"></i> POO</strong>
                            <strong> Pygame</strong>
                            <strong>Algorithmique</strong>
                            <strong><i class="fa-solid fa-users"></i> Travail d'équipe</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article>

                <article class="all git python pygame algorithmique teamwork school">
                    <figure>
                        <img src="./images/hangman_project.jpg" alt="image du jeu du pendu" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>Jeu du pendu</h2>
                        <p>
                            Réalisation d'un jeu du pendu avec python en utilisant l'interface graphique Pygame.
                        </p>
                        <p>
                            Utilisation d'un fichier Json pour enregistrer les scores et les supprimer.
                        </p>
                        <p class="coming-soon">
                            Janvier 2025
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/hangman" target="_blank">Code source</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-brands fa-python"></i> Python</strong>
                            <strong>Pygame</strong>
                            <strong>Algorithmique</strong>
                            <strong><i class="fa-solid fa-users"></i> Travail d'équipe</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article>

                <article class="all git python algorithmique regex teamwork school">
                    <figure>
                        <img src="./images/calculator_project1.jpg" alt="image de calculatrice" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>Ma calculatrice</h2>
                        <p>
                            Réalisation d'une calculatrice dans le terminal avec python. Prise en compte d'un input géré par une regex.
                        </p>
                        <p>
                            Utilisation du try except, gestion des diverses exceptions possible (ZeroDivisionError, gestion des erreurs possible après traitement par la regex)
                        </p>
                        <p class="coming-soon">
                            Janvier 2025
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/my_calculator" target="_blank">Code source</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-brands fa-python"></i> Python</strong>
                            <strong>Algorithmique</strong>
                            <strong>Regex</strong>
                            <strong><i class="fa-solid fa-users"></i> Travail d'équipe</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article>

                <article class="all js regex personal">
                    <figure>
                        <img src="./images/azertype_project.jpg" alt="image de AzerType" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>AzerType</h2>
                        <p>
                            Création d'un jeu pour s'entraîner à taper au clavier dans le cadre d'un cours OpenClassRooms : <a href="https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript">Apprenez à programmer avec JavaScript</a>
                        </p>
                        <p>
                            Le cours se concentrait sur l'apprentissage du javascript. Le CSS et HTML a donc été fourni par OpenClassRooms
                        </p>
                        <p>
                            Utilisation du DOM (Document Object Model), modification du contenu html selon certaines conditions (au niveau du score), utilisation d'une regex pour le formulaire.
                        </p>
                        <p class="coming-soon">
                            Décembre 2024
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/AzerType" target="_blank">Code source</a></button>
                            <button><a href="https://adelinepat.github.io/AzerType/" target="_blank">Live demo</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-js"></i> Javascript</strong>
                            <strong>Regex</strong>
                            <strong><i class="fa-solid fa-briefcase"></i> Personnel</strong>
                        </div>
                        </div>
                    </div>
                </article>

                <article class="all teamwork school">
                    <figure>
                        <img src="./images/kosphere_project.jpg" alt="image représentant le hackaton" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>Hackaton - KoSphere</h2>
                        <p>
                            Participation à un hackaton à la Plateforme_ . Idéation sur un sujet imposé : l'amélioration de l'utiisation des IoT au sein de notre centre de formation
                        </p>
                        <p>
                            Echange des idées au sein d'une équipe de 4 à l'aide du crazy 8
                        </p>
                        <p>
                            L'idée choisie est une machine à café connectée avec une application notifiant les utilisateurs si une machine est en panne, à nouveau en service et quelle quantité de quelle boisson se trouve dans la machine.<br>
                            Le problème nous ayant poussé à choisir cette idée plutôt qu'une autre : les machines à café souvent en panne poussent les élèves à aller consommer en dehors de l'école, causant une perte de temps et de la mauvaise humeur lorsque l'utilisateur découvre que toutes les machines sont en pannes.
                        </p>
                        <p class="coming-soon">
                            Décembre 2024
                        </p>
                        <!-- <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/AzerType" target="_blank">Code source</a></button>
                        </div> -->
                        <div class="skills">
                            <!-- <strong><i class="fa-brands fa-js"></i> Javascript</strong>
                            <strong>Regex</strong> -->
                            <strong><i class="fa-solid fa-users"></i> Travail d'équipe</strong>
                            <strong><i class="fa-solid fa-lightbulb"></i> Idéation</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                        </div>
                    </div>
                </article>

                <article class="all git html/css figma js php sass personal">
                    <figure>
                        <img src="./images/resume-preview-recent.png" alt="Capture d'écran du projet Portfolio" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>CV et Portfolio</h2>
                        <p>
                            Réalisation d'un CV et portfolio regrouppant mes projets scolaires et personnels.
                        </p>
                        <p>
                            Utilisation du javascript pour la page portfolio afin de créer les filtres (utilisation de classList).
                            Utilisation du php afin de n'avoir qu'un fichier pour le header et le modifier dans les 3 pages.
                        </p>
                        <p>
                            Apprentissage de Sass en cours afin de rendre le CSS plus facile à maintenir
                        </p>
                        <p class="coming-soon">
                            Décembre 2024 - Février 2025
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/portfolio" target="_blank">Code source</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-brands fa-html5"></i> HTML</strong>
                            <strong><i class="fa-brands fa-css3-alt"></i> CSS</strong>
                            <strong><i class="fa-brands fa-figma"></i> Figma</strong>
                            <strong><i class="fa-brands fa-js"></i> Javascript</strong>
                            <strong><i class="fa-brands fa-php"></i> PHP</strong>
                            <strong><i class="fa-brands fa-sass"></i> Sass</strong>
                            <strong><i class="fa-solid fa-briefcase"></i> Personnel</strong>
                        </div>
                    </div>
                </article>

                <article class="all git html/css figma js school">
                    <figure>
                        <img src="https://raw.githubusercontent.com/AdelinePat/fansite/refs/heads/main/preview_fansite1_blackpink.jpg" alt="Capture d'écran du projet Blackpink" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>BlackPink</h2>
                        <p>
                            Création d'un fansite sur blackpink, projet individuel lié au projet Fansite en groupe.
                        </p>
                        <p>
                            Utilisation des pseudo classes et des transitions
                        </p>
                        <p class="coming-soon">
                            Novembre 2024
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/fansite" target="_blank">Code source</a></button>
                            <button><a href="https://adelinepat.github.io/fansite/fansite1.html" target="_blank">Live demo</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-brands fa-html5"></i> HTML</strong>
                            <strong><i class="fa-brands fa-css3-alt"></i> CSS</strong>
                            <strong><i class="fa-brands fa-figma"></i> Figma</strong>
                            <strong><i class="fa-brands fa-js"></i> Javascript</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article>

                <article class="all git html/css figma js teamwork school">
                    <figure>
                            <img src="https://raw.githubusercontent.com/AdelinePat/fansite/refs/heads/main/preview_index.jpg" alt="Capture d'écran du projet Fansite" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>Fansite</h2>
                        <p>
                            Réalisation d'un site en groupe rassemblant 3 autres sites (un par membre du groupe). 
                        </p>
                        <p>
                            Utilisation de flexbox ainsi que des pseudo class ::before et ::after
                        </p>
                        <p class="coming-soon">
                            Novembre 2024
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/fansite" target="_blank">Code source</a></button>
                            <button><a href="https://adelinepat.github.io/fansite/index.html" target="_blank">Live demo</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-brands fa-html5"></i> HTML</strong>
                            <strong><i class="fa-brands fa-css3-alt"></i> CSS</strong>
                            <strong><i class="fa-brands fa-figma"></i> Figma</strong>
                            <strong><i class="fa-brands fa-js"></i> Javascript</strong>
                            <strong><i class="fa-solid fa-users"></i> Travail d'équipe</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article>

                <article class="all git html/css figma js school">
                    <figure>
                        <img src="https://raw.githubusercontent.com/AdelinePat/webdesign-fleuriste/refs/heads/main/preview-desktop.jpg" alt="Capture d'écran du projet Bloom Petals" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>Bloom Petals</h2>
                        <p>
                            Premier projet HTML et CSS, réalisation d'un site pour une fleuriste nommée Bloom Petals.
                        </p>
                        <p>
                            Apprentissage des balises HTML5 et bonnes pratiques
                        </p>
                        <p class="coming-soon">
                            Novembre 2024
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/webdesign-fleuriste" target="_blank">Code source</a></button>
                            <button><a href="https://adelinepat.github.io/webdesign-fleuriste/" target="_blank">Live demo</a></button>
                        </div>
                        <div class="skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-brands fa-html5"></i> HTML</strong>
                            <strong><i class="fa-brands fa-css3-alt"></i> CSS</strong>
                            <strong><i class="fa-brands fa-figma"></i> Figma</strong>
                            <strong><i class="fa-brands fa-js"></i> Javascript</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article>

                <article class="all git python algorithmique school">
                    <figure>
                        <img src="https://raw.githubusercontent.com/AdelinePat/tictactoe/refs/heads/main/tictactoe.jpg" alt="image du jeu du morpion" loading="lazy">
                    </figure>
                    <div class="content">
                        <h2>Tic Tac Toe</h2>
                        <p>
                            Réalisation d'un jeu de morpion avec python, création d'un jeu joueur contre joueur et joueur contre bot
                        </p>
                        <p>
                            Première version du bot : l'algorithme cherche le premier emplacement vide disponible (en partant du haut à gauche en allant vers la droite et en bas) pour y placer son signe.
                        </p>
                        <p>
                            Deuxième version du bot : l'algorithme liste tous les emplacements disponibles restants et choisi au hasard un emplacement avec le module random.
                        </p>
                        <p class="coming-soon">
                            Novembre 2024
                        </p>
                        <div class="portfolio-link">
                            <button><a href="https://github.com/AdelinePat/tictactoe" target="_blank">Code source</a></button>
                        </div>
                        <div class="all skills">
                            <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                            <strong><i class="fa-brands fa-python"></i> Python</strong>
                            <strong>Algorithmique</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article>

                <article class="all linux virtualisation school">
                    <figure>
                        <img src="./images/component.jpg" alt="Image représentant le projet hardware et virtualisation" loading="lazy">
                    </figure>
                        <div class="content">
                        <h2>Hardware et virtualisation</h2>
                        <p>
                            Projet dans le cadre de la formation La Plateforme_ . Apprentissage des différents composants hardware, utilisation de VMware, installation de windows 11 et linux.
                        </p>
                        <p class="coming-soon">
                            Octobre 2024
                        </p>
                        <div class="skills">
                            <strong><i class="fa-brands fa-linux"></i> Linux</strong>
                            <strong>installation d'OS</strong>
                            <strong>Machine virtuelle</strong>
                            <strong>VMWare</strong>
                            <strong><i class="fa-solid fa-graduation-cap"></i> Scolaire</strong>
                        </div>
                    </div>
                </article>

        </section>
    </main>

    <?php require_once(__DIR__ . '/footer.php'); ?>
    
</body>
</html>