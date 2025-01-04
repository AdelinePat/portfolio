<?php 
$isResume = false;
$isPortfolio = false;
$isContact = true;
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
    <title>Contact</title>
</head>
<body>
    <?php require_once(__DIR__ . '/header.php'); ?>

    <main>
        <section class="portfolio-contact">
            <article>
                <!-- <h2>Contact</h2> -->
                
                <form method="post" action="./contactform.php">
                    <!-- Champs de base obligatoires : -->                
                    <fieldset id="contacter">
                        <div>
                            <label for="prenom">Votre prénom</label>
                            <input type="text" name="prenom" id="prenom" required>
                        </div>
                        <div>
                            <label for="nom">Votre nom</label>
                            <input type="text" name="nom" id="nom" required>
                        </div>
                        <div>
                            <label for="email">Votre adresse e-mail</label>
                            <input type="email" name="email" id="email" required>
                        </div>
                        <div>
                            <label for="telephone">Votre numéro de téléphone</label>
                            <input type="tel" name="telephone" id="telephone" pattern="[0-9]{10}" required>
                        </div>
                    </fieldset>
                    
                    <fieldset id="message">
                        <div>
                            <label for="objet">Objet</label>
                            <input type="text" name="objet" id="objet" required>
                        </div>
                        <div>
                            <label for="message">Votre message</label>
                            <textarea name="message" id="message" required rows="6"></textarea>
                        </div>

                    </fieldset>

                    <fieldset id="validation">
                        <!-- Bouton de soumission : -->
                            <button type="submit" name="submit">Envoyer</button>
                            <p>Tous les champs sont obligatoires</p>
                    </fieldset>
                </form>
                
            </article>

        </section>
    </main>

    <?php require_once(__DIR__ . '/footer.php'); ?>
    
</body>
</html>