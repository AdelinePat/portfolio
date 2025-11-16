// const courseSection = document.querySelector(".courses-list");

export function createCourseArticle(course) {
  const articleElement = document.createElement("article");
  articleElement.classList.add("courses");

  const title = document.createElement("h3");
  const titleLink = document.createElement("a");

  titleLink.setAttribute("href", course.courseUrl);
  titleLink.setAttribute("target", "_blank");
  titleLink.setAttribute("rel", "noopener");
  titleLink.innerText = course.title;

  //   title.innerText = course.title;
  title.append(titleLink);

  const barSkill = createProgressBar(course);

  const details = createDetails(course);

  articleElement.append(title, barSkill, details);
  return articleElement;
}

function createProgressBar(course) {
  const barSkillContainer = document.createElement("div");
  barSkillContainer.classList.add("bar-skill");

  const progressBar = document.createElement("div");
  progressBar.classList.add("bar-skill-progress");
  progressBar.style.width = `${course.progress}%`;

  barSkillContainer.append(progressBar);
  return barSkillContainer;
}

function createDetails(course) {
  const containerElement = document.createElement("h4");
  const spanDate = document.createElement("span");
  spanDate.innerText = new Date(course.createdAt).toLocaleDateString("fr-FR", {
    month: "short",
    year: "numeric",
  });
  const text = document.createTextNode(course.learningPlatform);

  containerElement.append(spanDate, text);

  return containerElement;
}
