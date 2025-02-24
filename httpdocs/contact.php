<?php 
$isResume = false;
$isPortfolio = false;
$isContact = true;


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Adjust the path as needed if you're not using Composer

$mail = new PHPMailer(true);

//Server settings
$mail->isSMTP();                                            // Send using SMTP
$mail->Host       = 'smtp.gmail.com';                     // Set the SMTP server to send through
$mail->SMTPAuth   = true;
$ini = parse_ini_file('../ini_folder/file.ini', true);

$mail->Username = $ini['email']['username'];
$mail->Password = $ini['email']['password'];
                                   // Enable SMTP authentication
                       // SMTP password
$mail->SMTPSecure = 'tls'; // Enable TLS encryption
$mail->Port       = 587;                                    // TCP port to connect to


$errors = [];
$errorMessage = '';

$secret = $ini['captcha']['secret'];

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
        $errors[] = 'Le champ "nom" est vide';
    }

    if (empty($firstname)) {
        $errors[] = 'Le champ "prénom" est vide';
    }

    if (empty($email)) {
        $errors[] = 'Le champ "email" est vide';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }

    if (empty($object)) {
        $errors[] = 'Le champ "objet" est vide';
    }

    if (empty($message)) {
        $errors[] = 'Vous n\'avez pas écrit de message';
    }

    if (!empty($errors)) {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p>{$allErrors}</p>";
    } else {
        $toEmail = 'adeline.patenne@laplateforme.io';
        $emailSubject = $object;
        $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];

        $bodyParagraphs = ["Nom: {$name}", "prénom: {$firstname}\n", "Email: {$email}\n", "Objet: {$object}\n\n", "Message:", $message];
        $body = join(PHP_EOL, $bodyParagraphs);

        $mail -> addReplyTo($email, "{$name} {$firstname}");
        $mail->setFrom($email, "{$name} {$firstname}");
        $mail->addAddress($toEmail, 'Adeline');

        // Sending plain text email
        $mail->isHTML(false); // Set email format to plain text
        $mail->Subject = $emailSubject;
        $mail->Body = $body;

        // Send the email
        try {
            if($mail->send()){
                $errorMessage = "<p>Message bien envoyé</p>";
                
            } else {
                throw exception("<p>Il y a eu une erreur, veuillez réessayer plus tard</p>");
            }
        } catch (exception $e) {$errorMessage = $e -> getMessage();}
        // if(!$mail->send()){
        //     $errorMessage = "<p>Oops, something went wrong. Please try again later</p>";
        // } else {
        //     $errorMessage = "<p>Message send</p>";
        // }

        // if (mail($toEmail, $emailSubject, $body, $headers)) {
        //     header('Location: contactform_response.php');
        // } else {
        //     $errorMessage = "<p style='color: red;'>Oops, something went wrong. Please try again later</p>";
        // }
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
    <script defer src="https://www.google.com/recaptcha/api.js"></script>
    <script defer src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
    <script defer src="contact.js"></script>
    
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
                
                <form method="POST" action="contact.php" id="contact-form">
                    <div class="error_messages"><?php echo((!empty($errorMessage)) ? $errorMessage : '') ?></div>
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
                    <p class="form_info">Tous les champs sont obligatoires</p>
                    <fieldset id="validation">
                        <!-- Bouton de soumission : -->
                            <button
                                class="g-recaptcha"
                                data-sitekey= <?php
                                echo $ini['captcha']['public']; 
                                    ?>
                                data-callback="onRecaptchaSuccess"
                                type="submit">
                                Envoyer
                            </button>
                    </fieldset>
                    
                </form>
                
                
            </article>

        </section>
    </main>

    <?php require_once(__DIR__ . '/footer.php'); ?>
    
</body>
</html>