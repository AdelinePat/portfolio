import "../style/scss/homepage.scss";
import { experiences } from "../assets/data/experiences.js";
import { createExperienceArticle } from "../components/experiece-element.js";
import { sortFromMostRecent } from "./filter.js";

const experienceSection = document.querySelector(".experiences");

experienceSection.innerHTML = "";
const experiencesTitle = document.createElement("h2");
experiencesTitle.classList.add("title-primary");
experiencesTitle.innerText = "Mes expériences";
experienceSection.append(experiencesTitle);

let experiecesList = sortFromMostRecent(experiences);

for (const experience of experiecesList) {
  if (experience.display) {
    const expArticle = createExperienceArticle(experience);
    experienceSection.append(expArticle);
  }
}
