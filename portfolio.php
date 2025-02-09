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
                    <li id="python" class="filter_items">Python</li>
                    <li id="pygame" class="filter_items">Pygame</li>
                    <li id="algorithmique" class="filter_items">Algorithmique</li>
                    <li id="css" class="filter_items">CSS</li>
                    <li id="html" class="filter_items">HTML</li>
                    <li id="js" class="filter_items">JavaScript</li>
                    <li id="php" class="filter_items">PHP</li>
                    <li id="figma" class="filter_items">Figma</li>
                    <li id="linux" class="filter_items">Linux</li>
                    <li id="virtualisation" class="filter_items">Virtualisation</li>
                </ul>
            </article>

        </section>
        <section class="portfolio-gallery">
            <article class="all git python poo pygame algorithmique teamwork">
                <figure>
                    <img src="./images/fruit_ninja_project.jpg" alt="image du jeu fruit ninja">
                </figure>
                <div class="content">
                    <h2>Fruit Ninja</h2>
                    <p>
                        Réalisation d'un jeu type Fruit Ninja avec python en utilisant l'interface graphique Pygame. Lorsque la touche du clavier correspondante a été appuyée, le fruit est coupé.
                    </p>
                    <p>
                        Création de plusieurs classes (fruits, boutons) et utilisation de l'héritage (bouton_image hérite de bouton)
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
                    </div>
                </div>
            </article>

            <article class="all git python pygame algorithmique teamwork">
                <figure>
                    <img src="./images/hangman_project.jpg" alt="image du jeu du pendu">
                </figure>
                <div class="content">
                    <h2>Jeu du pendu</h2>
                    <p>
                        Réalisation d'un jeu du pendu avec python en utilisant l'interface graphique Pygame.
                    </p>
                    <p>
                        Utilisation d'un fichier Json pour enregistrer les scores et les supprimer.
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
                    </div>
                </div>
            </article>

            <article class="all git python algorithmique regex teamwork">
                <figure>
                    <img src="./images/calculator_project1.jpg" alt="image de calculatrice">
                </figure>
                <div class="content">
                    <h2>Ma calculatrice</h2>
                    <p>
                        Réalisation d'une calculatrice dans le terminal avec python. Prise en compte d'un input géré par une regex.
                    </p>
                    <p>
                        Utilisation du try except, gestion des diverses exceptions possible (ZeroDivisionError, gestion des erreurs possible après traitement par la regex)
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
                    </div>
                </div>
            </article>

            <article class="all js regex">
                <figure>
                    <img src="./images/azertype_project.jpg" alt="image de AzerType">
                </figure>
                <div class="content">
                    <h2>AzerType</h2>
                    <p>
                        Création d'un jeu pour s'entraîner à taper au clavier dans le cadre d'un cours OpenClassRooms : <a href="https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript">Apprenez à programmer avec JavaScript</a>
                    </p>
                    <p>Le cours se concentrait sur l'apprentissage du javascript. Le CSS et HTML a donc été fourni par OpenClassRooms</p>
                    <div class="portfolio-link">
                        <button><a href="https://github.com/AdelinePat/AzerType" target="_blank">Code source</a></button>
                    </div>
                    <div class="skills">
                        <strong><i class="fa-brands fa-js"></i> Javascript</strong>
                        <strong>Regex</strong>
                    </div>
                    </div>
                </div>
            </article>

            <article class="all git python algorithmique">
                <figure>
                    <img src="https://raw.githubusercontent.com/AdelinePat/tictactoe/refs/heads/main/tictactoe.jpg" alt="image du jeu du morpion">
                </figure>
                <div class="content">
                    <h2>Tic Tac Toe</h2>
                    <p>
                        Réalisation d'un jeu de morpion avec python, création d'un jeu joueur contre joueur et joueur contre bot. Première version du bot : random.
                    </p>
                    <p class="coming-soon">
                        A venir : bot intelligent, interface graphique, tests automatisé.
                    </p>
                    <div class="portfolio-link">
                        <button><a href="https://github.com/AdelinePat/tictactoe" target="_blank">Code source</a></button>
                    </div>
                    <div class="all skills">
                        <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                        <strong><i class="fa-brands fa-python"></i> Python</strong>
                        <strong>Algorithmique</strong>
                    </div>
                </div>
            </article>

            <article class="all git html css figma js php sass">
                <figure>
                    <img src="./images/preview_resume.jpg" alt="Capture d'écran du projet Portfolio">
                </figure>
                <div class="content">
                    <h2>CV et Portfolio</h2>
                    <p>
                        Réalisation d'un CV et portfolio à mettre en ligne.
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
                    </div>
                </div>
            </article>

            <article class="all git html css figma js">
                <figure>
                    <img src="https://raw.githubusercontent.com/AdelinePat/fansite/refs/heads/main/preview_fansite1_blackpink.jpg" alt="Capture d'écran du projet Blackpink">
                </figure>
                <div class="content">
                    <h2>BlackPink</h2>
                    <p>
                        Création d'un fansite sur blackpink, projet individuel lié au projet Fansite en groupe.
                    </p>
                    <p>
                        Utilisation des pseudo classes et des transitions
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
                    </div>
                </div>
            </article>

            <article class="all git hmtl css figma js teamwork">
                <figure>
                        <img src="https://raw.githubusercontent.com/AdelinePat/fansite/refs/heads/main/preview_index.jpg" alt="Capture d'écran du projet Fansite">
                </figure>
                <div class="content">
                    <h2>Fansite</h2>
                    <p>
                        Réalisation d'un site en groupe rassemblant 3 autres sites (un par membre du groupe). 
                    </p>
                    <p>
                        Utilisation de flexbox ainsi que des pseudo class ::before et ::after
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
                    </div>
                </div>
            </article>

            <article class="all git html css figma js">
                <figure>
                    <img src="https://raw.githubusercontent.com/AdelinePat/webdesign-fleuriste/refs/heads/main/preview-desktop.jpg" alt="Capture d'écran du projet Bloom Petals">
                </figure>
                <div class="content">
                    <h2>Bloom Petals</h2>
                    <p>
                        Premier projet HTML et CSS, réalisation d'un site pour une fleuriste nommée Bloom Petals.
                    </p>
                    <div class="portfolio-link">
                        <button><a href="https://github.com/AdelinePat/webdesign-fleuriste" target="_blank">Code source</a></button>
                        <button><a href="#" target="_blank">Live demo</a></button>
                    </div>
                    <div class="skills">
                        <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                        <strong><i class="fa-brands fa-html5"></i> HTML</strong>
                        <strong><i class="fa-brands fa-css3-alt"></i> CSS</strong>
                        <strong><i class="fa-brands fa-figma"></i> Figma</strong>
                        <strong><i class="fa-brands fa-js"></i> Javascript</strong>
                    </div>
                </div>
            </article>

            <article class="all linux virtualisation">
                <figure>
                    <img src="./images/component.jpg" alt="Image représentant le projet hardware et virtualisation">
                </figure>
                    <div class="content">
                    <h2>Hardware et virtualisation</h2>
                    <p>
                        Projet dans le cadre de la formation La Plateforme_ . Apprentissage des différents composants hardware, utilisation de VMware, installation de windows 11 et linux.
                    </p>
                    <div class="skills">
                        <strong><i class="fa-brands fa-linux"></i> Linux</strong>
                        <strong>installation d'OS</strong>
                        <strong>Machine virtuelle</strong>
                        <strong>VMWare</strong>
                    </div>
                </div>
            </article>

        </section>
    </main>

    <?php require_once(__DIR__ . '/footer.php'); ?>
    
</body>
</html>