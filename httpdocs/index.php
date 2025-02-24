<?php 
$isResume = true;
$isPortfolio = false;
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
    <title>Accueil</title>
</head>
<body>
    
    <?php require_once(__DIR__ . '/header.php'); ?>

    <main>
        <section id="presentation">
            <article>
                <h2>Développeuse logiciel en formation</h2>
                <p>
                    Après avoir travaillé 3 ans dans le domaine de la santé en tant qu'infirmière,
                    j'ai décidé d'entreprendre une reconversion vers l'informatique. Actuellement
                    en préparation d'un Bachelor IT à La Plateforme_ , je suis <strong>à la recherche d'une
                    alternance d'une durée de 2 ans à partir de septembre 2025</strong>.
                    Cette alternance me permettra de m'engager sur ce nouveau parcours professionnel.
                </p>
            </article>
            <!-- <article class="hardskills"> -->
                <ul class="hardskills">
                    <li>
                        <i class="fa-brands fa-git-alt"></i> <span>Git</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-github"></i> <span>GitHub</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-python"></i> <span>Python</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-html5"></i> <span>HMTL</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-css3-alt"></i> <span>CSS</span>
                    </li>
                     <li>
                        <i class="fa-brands fa-js"></i> <span>JavaScript</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-sass"></i> <span>Sass</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-php"></i> <span>PHP</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-figma"></i> <span>Figma</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-wordpress"></i> <span>WordPress</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-elementor"></i> <span>Elementor</span>
                    </li>
                    
                </ul>
            <!-- </article> -->

            <!-- <article class="hardskills">
                <img src="./images/git.svg" alt="logo Git" title="Git">
                <img src="./images/github.svg" alt ="logo GitHub" title="GitHub">
                <img src="./images/python.svg" alt="logo Python" title="Python">
                <img src="./images/html.svg" alt="logo HTML" title="HTML">
                <img src="./images/css.svg" alt="logo CSS" title="CSS">
                <img src="./images/linux.svg" alt="logo Linux" title="Linux Debian">
                <img src="./images/figma.svg" alt="logo figma" title="Figma">
                <img src="./images/wordpress.svg" alt="logo WordPress" title="WordPress">
                <img src="./images/elementor.svg" alt="logo Elemetor" title="Elementor">
            </article> -->
        </section>

        <div class="experiences">
            <section>
                <header>
                    <h2>Expériences professionnelles</h2>
                </header>
                <article class="professionnel">
                    <h3>
                        <strong>Infirmière en oncologie de jour</strong> 2020 - 2023
                    </h3>
                    <h4>
                        Hôpital Saint Joseph
                    </h4>
                    <p>
                        Dans le cadre des soins infirmiers de ce service :
                    </p>
                    <ul>
                        <li>
                            Organisation, rapidité d'exécution des tâches, prises de décision en situation d'urgence
                        </li>
                        <li>
                            Analyses des besoins, analyse et repérage des risques
                        </li>
                        <li>
                            Collaboration au sein d'une équipe pluridisciplinaire
                        </li>
                        <li>
                            Connaissances techniques, transmissions d'informations
                        </li>
                        <li>
                            Formation des élèves et des nouveaux infirmiers
                        </li>
                        <!-- 
                        <li>
                            Administration des chimiothérapies en connaissances des protocoles spécifiques à chaque molécule et surveillance des effets secondaires;
                        </li>
                        <li>
                            Planification des séances suivantes selon le protocole de la molécule utilisée;
                        </li>
                        <li>
                            Evaluation des besoins et organisation des soins de supports avec le reste de l'équipe pluridisciplinaire;
                        </li>
                        <li>
                            Réalisation de consultations d'annonce des patients débutant leur chimiothérapies;
                        </li>
                        <li>
                            Formation des élèves et des nouveaux infirmiers
                        </li> -->
                    </ul>
                </article>
                <article class="professionnel">
                    <h3>
                        <strong>Infirmière au pool</strong> 2020 (7 mois)
                    </h3>
                    <h4>
                        Hôpital Saint Joseph et HE
                    </h4>
                    <p>
                        En tant qu'infirmière au pool, j'ai travaillé dans plusieurs services en fonction des besoins de l'hôpital.
                        Chacun demandant des soins techniques, des connaissances de protocoles et procédures différents.
                    </p>
                    <ul>
                        <li>
                            Changement fréquent de service
                        </li>
                        <li>
                            Bonne capacité d'adaptation, réactivité
                        </li>
                    </ul>
                </article>
            </section>

            <section class="formations">
                <article>
                    <h3>
                        Formation
                    </h3>
                    <ul>
                        <li>
                            <strong>Bachelor IT</strong> - La Plateforme_ - <em>2024 - 2027 (en cours)</em>
                            <p>Pédagogie par projet basée sur la résolution de problématiques concrètes en autonomie</br>
                                Formation de 3 ans délivrant un <em>titre RNCP 6 Concepteur développeur d'applications (équivalent BAC +3)</em>
                            </p>
                        </li>
                        <li>
                            <strong>Diplôme d'Etat Infirmier</strong> - <em>2019</em>
                        </li>
                        <li>
                            Institut de Formation en Soin Infirmier <strong>IFSI la Blancarde</strong> - <em>2016 - 2019</em>
                        </li>
                        <li>
                            <strong>Bac S SVT</strong> mension assez-bien - <em>2014</em>
                        </li>
                    </ul>
                </article>
                <article>
                    <h3>
                        Soft Skills
                    </h3>
                    <ul>
                        <li>
                            Communication écrite et orale
                        </li>
                        <li>
                            Adaptation
                        </li>
                        <li>
                            Organisation
                        </li>
                        <li>
                            Créative
                        </li>
                        <li>
                            Anglais parlé couramment
                        </li>
                    </ul>
                </article>
            </section>
        </div>

    </main>

    <?php require_once(__DIR__ . '/footer.php'); ?>
    
</body>
</html>