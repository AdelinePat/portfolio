import { projects } from "../assets/data/project-list.js";

const pageTitleElement = document.querySelector(".title-filter");
const sectionElement = document.querySelector("section");

function updateTitle() {
  pageTitleElement.innerHTML = "";

  const string =
    projects.length + " " + (projects.length > 1 ? "projets" : "projet");
  const titleText = document.createTextNode(string);

  const span = document.createElement("span");
  span.classList.add("btn-primary-lighter");
  const filterIcon = document.createElement("i");
  const filterText = document.createTextNode("Filtrer");

  span.append(filterText, filterIcon);
  filterIcon.classList.add("fa-solid", "fa-filter");
  pageTitleElement.append(titleText, span);
}

console.log(pageTitleElement);

projects.sort((project1, project2) => {
  const date1 = new Date(project1.createdAt).getTime();
  const date2 = new Date(project2.createdAt).getTime();
  return date2 - date1;
});

updateTitle();
for (const project of projects) {
  const card = createCard(project);
  sectionElement.append(card);
}

// displayTitleAndDate();
// console.log(projects);
function displayTitleAndDate() {
  //Debug
  for (const project of projects) {
    const title = project.title;
    const date = new Date(project.createdAt).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    let otherDate;
    if (project?.firstCreatedAt) {
      otherDate = new Date(project.firstCreatedAt).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    }
    console.log(title, date, project?.firstCreatedAt ? otherDate : "");
    // console.log(project.tags);
  }
}

function createCard(project) {
  const card = document.createElement("article");
  card.classList.add("card");

  // Create article title
  const title = document.createElement("h2");
  title.classList.add("title-primary");
  title.innerText = project.title;
  card.append(title);

  // Create img of article
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.setAttribute("src", project.img);
  img.setAttribute("alt", project.altImg);
  img.setAttribute("loading", "lazy");
  const plusIcon = document.createElement("i");
  plusIcon.classList.add("fa-solid", "fa-plus", "caption");
  figure.append(img, plusIcon);
  card.append(figure);

  // Create content of article
  const content = document.createElement("p");
  content.innerText = project.content;
  card.append(content);

  // Create links
  const linkDiv = document.createElement("div");
  linkDiv.classList.add("links");
  const codeLink = createLink(project.code, "Code Source");
  linkDiv.append(codeLink);
  if (project.demo != "") {
    const demoLink = createLink(project.demo, "Live Demo");
    linkDiv.append(demoLink);
  }
  card.append(linkDiv);

  const tagDiv = document.createElement("div");
  tagDiv.classList.add("skills-secondary-lighter", "o-08");
  // console.log("tags: ", project.tags);
  for (const tag of project.tags) {
    const tagEl = createTagElement(tag);
    tagDiv.append(tagEl);
  }
  card.append(tagDiv);
  return card;
}

function createLink(link, string) {
  const linkElement = document.createElement("a");
  linkElement.innerText = string;
  if (string === "Code Source") {
    linkElement.classList.add("btn-secondary", "my-3", "o-08");
  } else {
    linkElement.classList.add("btn-primary", "my-3", "o-08");
  }
  linkElement.setAttribute("href", link);
  linkElement.setAttribute("target", "_blank");
  linkElement.setAttribute("rel", "noopener");
  return linkElement;
}

function createTagElement(tag) {
  const tagElement = document.createElement("strong");
  tagElement.innerHTML = `${tag.icon} ${tag.name}`;
  return tagElement;
}
