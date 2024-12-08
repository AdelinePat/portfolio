<?php

if (isset($_POST['submit'])) {
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $mailfrom = $_POST['email'];
    $telephone = $_POST['telephone'];
    $objet = $_POST['objet'];
    $message = $_POST['message'];

    $mailTo = "adeline.patenne@laplateforme.io";
    $headers = "From: ".$mailFrom
    $txt = "Vous avez reçu un message de votre portfolio venant de ".$nom.".\n\n".$message; 

    mail($mailTo, $objet, $headers, $txt);
    header("location: index.php?mailsend")
}

?>