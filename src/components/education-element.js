export function createEducationArticle(article, smallScreen = false) {
  const articleElement = document.createElement("article");
  const title = createEducationTitle(article, smallScreen);
  //   const title = document.createElement("h3");
  //   title.innerText = `${article.title}`;
  //   if (!smallScreen) {
  //     title.innerText += ` ${article.subtitle}`;
  //   }
  const location = document.createElement("h4");
  location.innerText = article.location;

  const timeline = document.createElement("p");
  timeline.classList.add("timeline");

  const endDate = new Date(article.endDate).toLocaleDateString("fr-FR", {
    year: "numeric",
  });
  if (article.startDate) {
    const startDate = new Date(article.startDate).toLocaleDateString("fr-FR", {
      year: "numeric",
    });
    timeline.innerText = `${startDate} - ${endDate}`;
  } else {
    timeline.innerHTML = endDate;
  }
  const paragraph = document.createElement("p");
  paragraph.innerHTML = article.content;

  console.log(article.location, location);

  articleElement.append(title, location, timeline, paragraph);
  return articleElement;
}

export function createEducationTitle(article, smallScreen) {
  const title = document.createElement("h3");
  const spanBigScreen = document.createElement("span");
  spanBigScreen.classList.add("big-screen");
  spanBigScreen.innerText = `${article.title} ${article.subtitle}`;

  const spanSmallScreen = document.createElement("span");
  spanSmallScreen.classList.add("small-screen");
  spanSmallScreen.innerText = `${article.title}`;
  //   title.innerText = `${article.title} ${article.subtitle}`;
  //   if (!smallScreen) {
  //     title.innerText += ` ${article.subtitle}`;
  title.append(spanBigScreen, spanSmallScreen);
  //   }
  return title;
}
