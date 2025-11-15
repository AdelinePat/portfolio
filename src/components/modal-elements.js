import {
  createCardTitle,
  createCardLinks,
  createCardTags,
} from "./project-elements.js";

export function createProjectModal(project) {
  console.log(project);
  const card = document.createElement("div");
  card.classList.add("modal");
  // createFigure(card, project);
  const figure = document.createElement("figure");
  figure.classList.add("modal-figure");
  // const divImg = document.createElement("div");
  const divTitle = document.createElement("div");
  divTitle.classList.add("modal-title");

  createImg(figure, project);
  // divImg.append(img);

  console.log(figure);
  card.append(figure);

  createCardTitle(divTitle, project);
  card.append(divTitle);
  const dateElement = document.createElement("h3");
  console.log(project.createdAt);
  const creationDate = new Date(project.createdAt).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
  console.log(creationDate);
  dateElement.innerText = creationDate;
  divTitle.append(dateElement);
  // figure.append(divImg);

  createCardContent(card, project);

  if (project.code != "" || project.demo != "") {
    createCardLinks(card, project);
  }

  createCardTags(card, project, true);
  console.log(card);
  return card;
}

function createImg(divImg, project) {
  divImg.style.backgroundImage = `url(${project.img})`;
  divImg.style.backgroundSize = "cover";
  divImg.style.backgroundPosition = "center";
}

function createCardContent(card, project) {
  const content = document.createElement("p");
  content.innerHTML = project.content;
  card.append(content);
}
