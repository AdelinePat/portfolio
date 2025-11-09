export function updateTitle(sectionTitleElement, articles) {
  sectionTitleElement.innerHTML = "";

  const string =
    articles.length + " " + (articles.length > 1 ? "projets" : "projet");
  const titleText = document.createTextNode(string);

  const span = document.createElement("span");
  span.classList.add("btn-primary-lighter");
  const filterIcon = document.createElement("i");
  const filterText = document.createTextNode("Filtrer");
  filterIcon.classList.add("ml-1");

  span.append(filterText, filterIcon);
  filterIcon.classList.add("fa-solid", "fa-filter");
  sectionTitleElement.append(titleText, span);
}

export function createAllCards(sectionElement, articles) {
  sectionElement.innerHTML = "";
  //   console.log(articles);
  for (const project of articles) {
    const card = createCard(project);
    sectionElement.append(card);
  }
}

function createCard(project) {
  const card = document.createElement("article");
  card.classList.add("card");
  setFilters(card, project.filter);
  createCardTitle(card, project);
  createFigure(card, project);
  createCardContent(card, project);
  createCardLinks(card, project);
  createCardTags(card, project);
  return card;
}

function setFilters(element, filters) {
  //   console.log("setfilter ", filters);
  for (let i = 0; i < filters.length; ++i) {
    // console.log(filters[i]);
    if (filters[i] != "Général") {
      element.classList.add(filters[i]);
      // console.log(filters[i]);
    }
  }
}

function createCardTitle(card, project) {
  // Create article title
  const title = document.createElement("h2");
  title.classList.add("title-primary");
  title.innerText = project.title;
  card.append(title);
}

function createFigure(card, project) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.setAttribute("src", project.img);
  img.setAttribute("alt", project.altImg);
  img.setAttribute("loading", "lazy");
  const plusIcon = document.createElement("i");
  plusIcon.classList.add("fa-solid", "fa-plus", "caption");
  figure.append(img, plusIcon);
  card.append(figure);
}

function createCardContent(card, project) {
  const content = document.createElement("p");
  content.innerText = project.content;
  card.append(content);
}

function createCardLinks(card, project) {
  const linkDiv = document.createElement("div");
  linkDiv.classList.add("links");
  const codeLink = createLink(project.code, "Code Source");
  linkDiv.append(codeLink);
  if (project.demo != "") {
    const demoLink = createLink(project.demo, "Live Demo");
    linkDiv.append(demoLink);
  }
  card.append(linkDiv);
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

function createCardTags(card, project) {
  const tagDiv = document.createElement("div");
  tagDiv.classList.add("skills-secondary-lighter", "o-08");
  for (const tag of project.tags) {
    const tagEl = createTagElement(tag);
    tagDiv.append(tagEl);
  }
  card.append(tagDiv);
}

function createTagElement(tag) {
  const tagElement = document.createElement("strong");
  tagElement.innerHTML = `${tag.icon} ${tag.name}`;
  return tagElement;
}
