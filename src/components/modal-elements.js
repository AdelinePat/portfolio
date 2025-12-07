import {
  createCardTitle,
  createCardLinks,
  createCardTags,
} from "./project-elements.js";
import { tags } from "../assets/data/tags.js";

export function createProjectModal(project) {
  console.log(project);

  const card = document.createElement("div");
  card.classList.add("modal");
  // createFigure(card, project);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("modal-header");

  const figure = document.createElement("figure");
  figure.classList.add("modal-figure");
  createImg(figure, project);

  const divTitle = document.createElement("div");
  divTitle.classList.add("modal-title");
  const closeBtn = document.createElement("i");
  // console.log("tags closed", tags.closed.icon);
  // card.append(figure);
  cardHeader.append(figure);

  createCardTitle(divTitle, project);
  // card.append(divTitle);
  cardHeader.append(divTitle);
  closeBtn.classList.add("btn-close", ...tags.closed.icon);

  cardHeader.append(closeBtn);

  card.append(cardHeader);

  const dateElement = document.createElement("h3");
  console.log(project.createdAt);
  const creationDate = new Date(project.createdAt).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

  dateElement.innerText = creationDate;
  divTitle.append(dateElement);

  createCardContent(card, project);

  if (project.code || project.demo) {
    createCardLinks(card, project);
  }
  if (project.link || project.successCertificate) {
    console.log("coucou allo?");
    createCardLinks(card, project, false);
  }
  createCardTags(card, project, true);

  return card;
}

function createImg(divImg, project) {
  divImg.style.backgroundImage = `url(${project.img})`;
  divImg.style.backgroundSize = "cover";
  divImg.style.backgroundPosition = "center";
}

function createCardContent(card, project) {
  const content = document.createElement("div");
  content.classList.add("modal-content");
  content.innerHTML = project.content;
  card.append(content);
}
