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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="icon" type="image/x-icon" href="./images/Logo AP.ico">
    <title>Portfolio</title>
</head>
<body>
    <?php require_once(__DIR__ . '/header.php'); ?>

    <main>
        <section class="portfolio-gallery">
            <article>
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
                    <div class="skills">
                        <strong><i class="fa-brands fa-git-alt"></i> Git</strong>
                        <strong><i class="fa-brands fa-python"></i> Python</strong>
                        <strong>Algorithmique</strong>
                    </div>
                </div>
            </article>

            <article>
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
                    </div>
                </div>
            </article>

            <article>
                <figure>
                    <img src="https://raw.githubusercontent.com/AdelinePat/fansite/refs/heads/main/preview_fansite1_blackpink.jpg" alt="Capture d'écran du projet Blackpink">
                </figure>
                <div class="content">
                    <h2>BlackPink</h2>
                    <p>
                        Création d'un fansite sur blackpink, projet individuel lié au projet Fansite en groupe.
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

            <article>
                <figure>
                        <img src="https://raw.githubusercontent.com/AdelinePat/fansite/refs/heads/main/preview_index.jpg" alt="Capture d'écran du projet Fansite">
                </figure>
                <div class="content">
                    <h2>Fansite</h2>
                    <p>
                        Réalisation d'un site en groupe rassemblant 3 autres sites (un par membre du groupe). 
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

            <article>
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

            <article>
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