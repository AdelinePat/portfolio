// import { allFilters } from "../assets/data/generateTagsAndFilters.js";
import "../style/scss/style.scss";

import {
  allCategories,
  reversedCategories,
} from "../assets/data/generateTagsAndFilters.js";
import { projects } from "../assets/data/project-list.js";

import { updateTitle, createAllCards } from "../components/project-elements.js";
import { createFilterDiv } from "../components/filter-element.js";
import {
  toggleFilterDiv,
  toggleActiveTag,
  sortFromMostRecent,
} from "./filter.js";

import { openModal } from "./modal.js";
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

// const plusBtnList = document.querySelectorAll("article figure i");
// console.log("article element :", plusBtnList);
// for (const plusBtn of plusBtnList) {
//   plusBtn.addEventListener("click", async (event) => {
//     const article = event.target.closest("article");
//     // const articleId = article.dataset.id;
//     const project = getArticle(article.dataset.id);
//     console.log(project);
//     const result = await openModal(project);
//     console.log(result);
//   });
// }

// function getArticle(id) {
//   for (const project of projects) {
//     if (project.createdAt === id) {
//       return project;
//     }
//   }
// }
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
