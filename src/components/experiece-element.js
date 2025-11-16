export function createExperienceArticle(experience) {
  const articleElement = document.createElement("article");
  const datesElement = createTimeLine(experience);
  datesElement.classList.add("timeline");
  articleElement.append(datesElement);

  const container = document.createElement("div");
  container.classList.add("content");

  const title = document.createElement("h3");
  title.innerText = experience.title;
  const location = document.createElement("p");
  location.innerText = experience.location;

  const list = document.createElement("ul");
  for (const item of experience.taskList) {
    const li = document.createElement("li");
    li.innerText = item;
    list.append(li);
  }

  if (experience.content) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = experience.content;
    container.append(title, location, paragraph, list);
  } else {
    container.append(title, location, list);
  }

  articleElement.append(datesElement, container);
  return articleElement;
}

function createTimeLine(experience) {
  const datesElement = document.createElement("div");
  const start = createDateElement(experience.startDate);
  const end = createDateElement(experience.endDate);
  datesElement.append(start, end);
  return datesElement;
}

function createDateElement(experienceDate) {
  const expDate = new Date(experienceDate).toLocaleDateString("fr-FR", {
    month: "short",
    year: "numeric",
  });
  const paragraph = document.createElement("p");
  const text = document.createTextNode(expDate);
  paragraph.append(text);
  return paragraph;
}
