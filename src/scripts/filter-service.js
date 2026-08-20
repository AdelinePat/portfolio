import { categories } from "../assets/data/tags.js";
import { updateTitle, createAllCards } from "../components/project-elements.js";

export function toggleFilterDiv(sectionTitleElement, filterDiv) {
  sectionTitleElement.addEventListener("click", (event) => {
    const span = sectionTitleElement.querySelector("span");
    if (!span.contains(event.target)) return;
    const isHidden = filterDiv.classList.contains("hidden");

    if (isHidden) {
      // 1. Put it back in the layout (but still transparent + shifted up)
      filterDiv.classList.remove("hidden");

      // 2. Double rAF: ensures the browser paints it *before* we transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          filterDiv.classList.add("visible");
        });
      });
    } else {
      // 1. Trigger the reverse transition
      filterDiv.classList.remove("visible");

      // 2. Once the transition ends, pull it fully out of layout
      filterDiv.addEventListener(
        "transitionend",
        () => {
          filterDiv.classList.add("hidden");
        },
        { once: true },
      );
    }
  });
}

export function initTagFilterHandler(
  sectionTitleElement,
  sectionElement,
  filterDiv,
  activeFilter,
  articles,
  onFilterChange,
) {
  filterDiv.addEventListener("click", (event) => {
    const span = event.target.closest("span");

    if (span && filterDiv.contains(span)) {
      event.stopPropagation();
      console.log(span.classList[0]);
      toggleTag(activeFilter, span.classList[0]);
      if (span.classList.contains("all")) {
        // Remove active class from all spans
        filterDiv
          .querySelectorAll("span")
          .forEach((s) => s.classList.remove("active"));
      } else {
        if (span.classList.contains("active")) {
          span.classList.remove("active");
        } else if (activeFilter.length > 0) {
          span.classList.add("active");
        }
      }
      const result = filterProjects(articles, activeFilter);
      updateTitle(
        sectionTitleElement,
        result,
        articles.at(0).code ? true : false,
      );
      onFilterChange(result);
    }
  });
}

function toggleTag(array, value) {
  if (value === "all") {
    const filterListElement = document.querySelector(".filter-list");
    const spans = filterListElement.querySelectorAll("span");
    for (const span of spans) {
      span.classList.remove("active");
    }
    array.splice(0, array.length);
    return;
  }
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  } else {
    array.push(value);
  }
}

export function filterProjects(articles, activeFilter) {
  if (!activeFilter || activeFilter.length === 0) return articles;
  console.log(activeFilter);
  // const result = articles.filter((project) => {
  //   return project.filter.some((filter) => activeFilter.includes(filter));
  // });
  const result = articles.filter((project) => {
    return activeFilter.every((filter) => {
      console.log(project.filters);
      console.log("actual filter: ", filter);
      console.log(project.filters.includes(filter));
      return project.filters.includes(filter);
    });
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
