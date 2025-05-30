<header class="header <?php
if($isResume) {echo'resume';}
 elseif($isPortfolio) {echo 'portfolio';}
 elseif($isContact) {echo 'contact';}
 ?>">
        <nav class="navbar">
            <a id="logo_link" href="./index.php"><img id="logo" src="./images/Logo AP.svg" alt="Logo de Adeline"></a>
            <div class="menu-phone">
                <input type="checkbox" id="menu-hamburger">
                <label for="menu-hamburger"></label>
            </div>
            <ul class="menu-items"> <!-- class="menu-items"-->
                <li><a class="<?php if($isResume) {echo 'active';} ?>" href="./">CV</a></li>
                <li><a  class="<?php if($isPortfolio) {echo 'active';} ?>" href="./portfolio.php">Portfolio</a></li>
                <li><a class="<?php if($isContact) {echo 'active';} ?>" href="./contact.php">Contact</a></li>
            </ul>
            
            <button><a href="./20250330_CV_AP.pdf" target="_blank">Télécharger le CV</a></button>
        </nav>
        <?php if($isResume) : ?>
            <h1>
                <span>Bonjour ! Je suis</span>
                <strong>Adeline Patenne</strong>
                <button class="contact-me"><a href="./contact.php">Contactez moi</a></button>
            </h1>
        <?php elseif($isPortfolio) : ?>
            <h1>
                <span><?php echo 'Bienvenue sur mon '; ?></span>
                <strong><?php echo 'Portfolio'; ?></strong>
            <h1>
        <?php endif ?>   
</header>