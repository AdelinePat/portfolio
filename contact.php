<?php 
$isResume = false;
$isPortfolio = false;
$isContact = true;

$errors = [];
$errorMessage = '';

$secret = 'clé-privée';

if (!empty($_POST)) {
    $name = $_POST['nom'];
    $firstname = $_POST['prenom'];
    $email = $_POST['email'];
    $object = $_POST['objet'];
    $message = $_POST['message_content'];
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $recaptchaUrl = "https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$recaptchaResponse}";
    $verify = json_decode(file_get_contents($recaptchaUrl));

    if (!$verify->success) {
        $errors[] = 'Recaptcha failed';
      }
  
    if (empty($name)) {
        $errors[] = 'Name is empty';
    }

    if (empty($firstname)) {
        $errors[] = 'Firstname is empty';
    }

    if (empty($email)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }

    if (empty($object)) {
        $errors[] = 'Object is empty';
    }

    if (empty($message)) {
        $errors[] = 'Message is empty';
    }

    if (!empty($errors)) {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    } else {
        $toEmail = 'adeline.patenne@laplateforme.io';
        $emailSubject = 'New email from your contact form';
        $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];

        $bodyParagraphs = ["Nom: {$name}", "prénom: {$firstname}", "Email: {$email}", "Objet: {$object}", "Message:", $message];
        $body = join(PHP_EOL, $bodyParagraphs);

        if (mail($toEmail, $emailSubject, $body, $headers)) {
            header('Location: contactform_response.php');
        } else {
            $errorMessage = "<p style='color: red;'>Oops, something went wrong. Please try again later</p>";
        }
    }

}

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Adeline Patenne">
    <link rel="stylesheet" href="style.css">

    <script defer src="script.js"></script>
    
    
    <!-- <script defer src="contact.js"></script> -->
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
                <script src="https://www.google.com/recaptcha/api.js"></script>
                <form method="POST" action="contact.php" id="contact-form">
                    <?php echo((!empty($errorMessage)) ? $errorMessage : '') ?>    
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
                        
                        <!-- <div>
                            <label for="telephone">Votre numéro de téléphone</label>
                            <input type="tel" name="telephone" id="telephone" pattern="[0-9]{10}">
                        </div> -->
                    </fieldset>
                    
                    <fieldset id="message">
                        <div>
                            <label for="email">Votre adresse e-mail</label>
                            <input type="email" name="email" id="email" required>
                        </div>
                        <div>
                            <label for="objet">Objet</label>
                            <input type="text" name="objet" id="objet" required>
                        </div>
                        <div>
                            <label for="message_content">Votre message</label>
                            <textarea name="message_content" id="message_content" rows="6" required ></textarea>
                        </div>

                    </fieldset>

                    <fieldset id="validation">
                        <!-- Bouton de soumission : -->
                            <button
                                class="g-recaptcha"
                                data-sitekey="clé-publique"
                                data-callback="onRecaptchaSuccess"
                                type="submit">
                                Envoyer
                            </button>
                            <p>Tous les champs sont obligatoires</p>
                    </fieldset>
                </form>
                <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
                <script>
                    const constraints = {
                        name: {
                            presence: {allowEmpty: false}
                        },
                        firstname: {
                            presence: {allowEmpty: false}
                        },
                        email: {
                            presence: {allowEmpty: false},
                            email: true
                        },
                        subject: {
                            presence: {allowEmpty: false}
                        },
                        message: {
                            presence: {allowEmpty: false}
                        }
                    };

                    const form = document.getElementById('contact-form');

                    form.addEventListener('submit', function (event) {
                        const formValues = {
                            name: form.elements.nom.value,
                            firstname : form.elements.prenom.value,
                            email: form.elements.email.value,
                            subject : form.elements.objet.value,
                            message: form.elements.message_content.value
                        };

                        const errors = validate(formValues, constraints);

                        if (errors) {
                            event.preventDefault();
                            const errorMessage = Object
                                .values(errors)
                                .map(function (fieldValues) {
                                    return fieldValues.join(', ')
                                })
                                .join("\n");

                            alert(errorMessage);
                        }
                    }, false);

                    function onRecaptchaSuccess () {
                        document.getElementById('contact-form').submit()
                    }
                </script>
            </article>

        </section>
    </main>

    <?php require_once(__DIR__ . '/footer.php'); ?>
    
</body>
</html>