// import { allFilters } from "../assets/data/generateTagsAndFilters.js";
import "../style/scss/style.scss";

import {
  allCategories,
  reversedCategories,
} from "../assets/data/generateTagsAndFilters.js";
import { projects } from "../assets/data/project-list.js";

import { updateTitle, createAllCards } from "./project-elements.js";
import { createFilterDiv } from "./filter-element.js";
import {
  toggleFilterDiv,
  toggleActiveTag,
  sortFromMostRecent,
} from "./filter.js";

const activeFilter = [];

let currentCount = 6;
// let articles = sortFromMostRecent(projects).slice(0, currentCount);
let articles = sortFromMostRecent(projects);

// console.log(articles);

const sectionTitleElement = document.querySelector(".title-filter");
const sectionTitleContainer = document.querySelector(
  ".section-title-container"
);
updateTitle(sectionTitleElement, articles);
const filterDiv = createFilterDiv(sectionTitleContainer, allCategories);
toggleFilterDiv(sectionTitleElement, filterDiv);
// toggleActiveTag(filterDiv, activeFilter, articles);
console.log(articles);
const sectionElement = document.querySelector("section");
createAllCards(sectionElement, articles);
toggleActiveTag(
  sectionTitleElement,
  sectionElement,
  filterDiv,
  activeFilter,
  articles
);

// displayTitleAndDate();
function displayTitleAndDate() {
  //Debug
  for (const project of articles) {
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
