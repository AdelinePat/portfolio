// import { allFilters } from "../assets/data/generateTagsAndFilters.js";
import "../style/scss/projects.scss";

import {
  createHeader,
  createFinalHeader,
  createNav,
} from "../components/header-element.js";
import { createFooter } from "../components/footer-element.js";
import { headerContents } from "../assets/data/header-page";

import { allCategories } from "../assets/data/generateTagsAndFilters.js";
import { projects } from "../assets/data/project-list.js";

import { updateTitle, createAllCards } from "../components/project-elements.js";
import { createFilterDiv } from "../components/filter-element.js";
import {
  toggleFilterDiv,
  toggleActiveTag,
  sortFromMostRecent,
} from "./filter.js";


const body = document.querySelector("body");
const aside = document.querySelector("aside");

// HEADER BIG SCREEN
const header = createFinalHeader(headerContents.projects, "big-screen");
const footer = createFooter("big-screen");
aside.append(header, footer);

// FOOTER AND NAV SMALL SCREEN
const navigationFooter = createNav(headerContents.projects);
const footerPhone = createFooter();
footerPhone.prepend(navigationFooter);
body.append(footerPhone);

// PROJECTS
const activeFilter = [];

let currentCount = 6;
// let articles = sortFromMostRecent(projects).slice(0, currentCount);
let articles = sortFromMostRecent(projects);

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
