import { updateTitle, createAllCards } from "../components/project-elements.js";

export function toggleFilterDiv(sectionTitleElement, filterDiv) {
  sectionTitleElement.addEventListener("click", (event) => {
    const span = sectionTitleElement.querySelector("span");
    // console.log(span);
    if (span.contains(event.target)) {
      //   console.log("filtrer? HALLO ?");
      filterDiv.classList.toggle("hidden");
    }
  });
}

export function toggleActiveTag(
  sectionTitleElement,
  sectionElement,
  filterDiv,
  activeFilter,
  articles
) {
  filterDiv.addEventListener("click", (event) => {
    const span = event.target.closest("span");

    if (span && filterDiv.contains(span)) {
      event.stopPropagation();
      toggleTag(activeFilter, span.classList[0]);
      if (span.classList.contains("active")) {
        span.classList.remove("active");
      } else if (activeFilter.length > 0) {
        span.classList.add("active");
      }

      const result = filterProjects(articles, activeFilter);
      console.log(articles.at(0).code);
      updateTitle(
        sectionTitleElement,
        result,
        articles.at(0).code ? true : false
      );
      createAllCards(sectionElement, result);
    }
  });
}

function toggleTag(array, value) {
  console.log("value du tag ? ", value);
  if (value === "all") {
    const filterListElement = document.querySelector(".filter-list");
    const spans = filterListElement.querySelectorAll("span");
    for (const span of spans) {
      span.classList.remove("active");
    }
    console.log("el", filterListElement);
    array.splice(0, array.length);
    console.log("apres spice ", array);
    return;
  }
  const index = array.indexOf(value);
  console.log("index ", index);
  if (index > -1) {
    array.splice(index, 1);
  } else {
    array.push(value);
  }
}

export function filterProjects(articles, activeFilter) {
  if (!activeFilter || activeFilter.length === 0) return articles;
  const result = articles.filter((project) => {
    return project.filter.some((tag) => activeFilter.includes(tag));
  });

  return result;
}

export function sortFromMostRecent(projects) {
  if (!projects || projects.length === 0) return [];

  const visible = projects.filter((project) => project.display === true);

  if (visible.length === 0) return [];
  const dateKey = projects.at(0).createdAt ? "createdAt" : "startDate";

  const sortedprojects = [...visible].sort((project1, project2) => {
    const date1 = new Date(project1[dateKey]).getTime();
    const date2 = new Date(project2[dateKey]).getTime();
    return date2 - date1;
  });
  return sortedprojects;
}
