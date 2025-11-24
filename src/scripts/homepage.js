import "../style/scss/homepage.scss";
import { createFinalHeader, createNav } from "../components/header-element.js";
import { createFooter } from "../components/footer-element.js";
import { headerContents } from "../assets/data/header-page.js";

import { experiences } from "../assets/data/experiences.js";
import { education } from "../assets/data/education-list.js";
import { hardskills, highlights } from "../assets/data/hardskills-list.js";
import { createExperienceArticle } from "../components/experiece-element.js";
import { createEducationArticle } from "../components/education-element.js";

import { sortFromMostRecent } from "./filter.js";

import { createTopbar } from "../components/topbar-element.js";
import { mobileMenu } from "./topbar.js";

const body = document.querySelector("body");
const aside = document.querySelector("aside");

// HEADER BIG SCREEN
const header = createFinalHeader(headerContents.homepage, "big-screen");
const footer = createFooter("big-screen");
aside.append(header, footer);

// FOOTER AND NAV SMALL SCREEN
const navigationFooter = createNav(headerContents.homepage.id);
console.log("navfooter: ", navigationFooter);
const footerPhone = createFooter();
footerPhone.prepend(navigationFooter);
body.append(footerPhone);

// MOBILE MENU=
const mobileNav = createNav(headerContents.homepage.id);
const topbar = document.querySelector(".menu-phone");
topbar.append(mobileNav);
mobileMenu(mobileNav);

// HEADER SMALL SCREEN
const headerPicture = document.querySelector(".header-title.picture");
function updateVH() {
  if (window.innerWidth <= 767) {
    const vh = window.innerHeight - window.innerHeight * 0.01;
    // document.documentElement.style.setProperty("--vh", `${vh}px`);
    headerPicture.style.setProperty("height", `${vh}px`);
  } else {
    headerPicture.style.removeProperty("height");
  }
}
updateVH();
window.addEventListener("resize", updateVH);

// HOMEPAGE
const previewSection = document.querySelector(".preview");
const experienceSection = document.querySelector(".experiences");
const toolSection = document.querySelector("#tools");

function createTitle(text, style) {
  const title = document.createElement("h2");
  title.classList.add(style);
  title.innerText = text;
  return title;
}
// PREVIEW SECTION
previewSection.innerHTML = "";
const previewTitle = createTitle("Mes outils principaux", "title-secondary");
previewSection.append(previewTitle);
const highlightsList = document.createElement("ul");
highlightsList.classList.add("text-primary-lighter", "ls-2");
for (const skill of highlights) {
  const li = document.createElement("li");
  li.innerHTML = `${skill.icon} <span>${skill.name}</span>`;
  const icon = li.querySelector("i");
  icon.setAttribute("aria-hidden", true);
  highlightsList.append(li);
}
previewSection.append(highlightsList);
const showMoreSkill = document.createElement("a");
showMoreSkill.setAttribute("href", "#tools");
showMoreSkill.setAttribute("title", "Voir plus de compétences");
showMoreSkill.classList.add("btn-primary-lighter");
showMoreSkill.innerText = "Plus...";
previewSection.append(showMoreSkill);

// EXPERIENCES SECTION
experienceSection.innerHTML = "";
const experiencesTitle = createTitle("Mes expériences", "title-primary");
experienceSection.append(experiencesTitle);

let experiecesList = sortFromMostRecent(experiences);

for (const experience of experiecesList) {
  if (experience.display) {
    const expArticle = createExperienceArticle(experience);
    experienceSection.append(expArticle);
  }
}

// EDUCATION SECTION
const educationSection = document.querySelector(".education");
educationSection.innerHTML = "";
const educationTitle = createTitle("Cursus Scolaire", "title-secondary");
educationSection.append(educationTitle);
let educationList = sortFromMostRecent(education);
for (const item of educationList) {
  const educationArticle = createEducationArticle(item);
  educationSection.append(educationArticle);
}

// TOOLS SECTION
toolSection.innerHTML = "";
const toolTitle = createTitle("Mes hards skills", "title-primary");
toolSection.append(toolTitle);

for (const skillSection of hardskills) {
  const article = createSkillArticle(skillSection);
  toolSection.append(article);
}

function createSkillArticle(article) {
  const articleElement = document.createElement("article");
  const title = document.createElement("h4");
  title.innerText = article.title;

  const list = document.createElement("ul");
  list.classList.add("text-secondary-lighter");

  for (const skill of article.tags) {
    const li = document.createElement("li");
    li.innerHTML = `${skill.icon} <span>${skill.name}</span>`;
    list.append(li);
    const icon = li.querySelector("i");
    icon.setAttribute("aria-hidden", true);
  }

  articleElement.append(title, list);
  return articleElement;
}
