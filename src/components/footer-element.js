// <div class="social">
//   <a href=""><i class="icon-ap" aria-hidden="true"></i></a>
//   <a
//     rel="noopener"
//     href="https://github.com/AdelinePat"
//     target="_blank"
//     title="Github"
//     aria-label="Github"
//   >
//     <i class="fa-brands fa-github" aria-hidden="true"></i>
//   </a>
//   <a
//     rel="noopener"
//     href="https://www.linkedin.com/in/adeline-patenne/"
//     target="_blank"
//     title="Linkedin"
//     aria-label="Linkedin"
//   >
//     <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
//   </a>
// </div>
// <div class="text-hint">
//   <p>© Copyright 2024-2025 - <i class="icon-ap" aria-hidden="true"></i> Adeline Patenne - Tous droits réservés</p>
//   <p>Le logo a été réalisé par mes soins.</p>
// </div>
//  <div class="bg-logo big-screen"><i class="icon-ap" aria-hidden="true"></i></div>
import { socials } from "../assets/data/header-page";
import { tags } from "../assets/data/tags";

export function createFooter(screenSize = "small-screen") {
  const footer = document.createElement("footer");
  footer.classList.add("footer", screenSize);

  const socialDiv = document.createElement("div");
  socialDiv.classList.add("social", screenSize);

  for (const link of socials) {
    const el = document.createElement("a");
    el.setAttribute("href", link.url);
    el.setAttribute("rel", "noopener");
    el.setAttribute("target", "_blank");
    el.setAttribute("aria-label", link.title);
    switch (link.title) {
      case "Github":
        el.innerHTML = tags.github.icon;
        break;
      case "Linkedin":
        el.innerHTML = tags.linkedin.icon;
        break;
    }
    // if (link.title === "Github") {
    // } else if (link.title === "Linkedin") {
    // }
    const icon = el.querySelector("i");
    icon.setAttribute("aria-hidden", true);
    socialDiv.append(el);
  }
  const copyright = document.createElement("div");
  copyright.classList.add("text-hint");
  copyright.innerHTML = `<p>© Copyright 2024-2025 - <i class="icon-ap" aria-hidden="true"></i> Adeline Patenne - Tous droits réservés</p>
   <p>Le logo a été réalisé par mes soins.</p>`;

  const logo = document.createElement("div");
  logo.classList.add("bg-logo", "big-screen");
  logo.innerHTML = `<i class="icon-ap" aria-hidden="true"></i>`;

  footer.append(socialDiv, copyright, logo);
  return footer;
}
