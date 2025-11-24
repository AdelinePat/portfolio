import "../style/scss/projects.scss";

import { createFinalHeader, createNav } from "../components/header-element.js";
import { createFooter } from "../components/footer-element.js";
import { headerContents } from "../assets/data/header-page.js";
import { createTopbar } from "../components/topbar-element.js";

import { allCategories } from "../assets/data/generateTagsAndFilters.js";
import { projects } from "../assets/data/project-list.js";

import { updateTitle, createAllCards } from "../components/project-elements.js";
import { createFilterDiv } from "../components/filter-element.js";
import {
  toggleFilterDiv,
  toggleActiveTag,
  sortFromMostRecent,
} from "./filter.js";
import "../components/topbar-element.js";
import { mobileMenu } from "./topbar.js";

const body = document.querySelector("body");
const aside = document.querySelector("aside");

// HEADER BIG SCREEN
const header = createFinalHeader(headerContents.projects, "big-screen");
const footer = createFooter("big-screen");
aside.append(header, footer);

// FOOTER AND NAV SMALL SCREEN
const navigationFooter = createNav(headerContents.projects.id);
const footerPhone = createFooter();
footerPhone.prepend(navigationFooter);
body.append(footerPhone);

// MOBILE MENU
const mobileNav = createNav(headerContents.projects.id);
const topbar = document.querySelector(".menu-phone");
topbar.append(mobileNav);
mobileMenu(mobileNav);

// PROJECTS
const activeFilter = [];
let articles = sortFromMostRecent(projects);
let filterableArticles = articles; 

// NECESARRY TO LOAD ARTICLE BATCH !
let batchSize = 4;
let loadedCount = 0;

// FILTER TITLE ELEMENT
const sectionTitleElement = document.querySelector(".title-filter");
const sectionTitleContainer = document.querySelector(
  ".section-title-container"
);

// PROJECT TITLE ELEMENT
updateTitle(sectionTitleElement, articles);
const filterDiv = createFilterDiv(sectionTitleContainer, allCategories);
toggleFilterDiv(sectionTitleElement, filterDiv);

// PROJECT SECTION
const sectionElement = document.querySelector("section");
// createAllCards(sectionElement, articles);


// SENTINEL ELEMENT TO LOAD ARTICLE PER BATCH
const sentinel = document.createElement("div");
sentinel.id = "sentinel";
sectionElement.after(sentinel);

// CREATE INTERSECTION
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      loadNextBatch();
    }
  },
  { threshold: 0.5 }
);

// LOAD FIRST BATCH (NO FILTER)
loadNextBatch();

// FUNCTIONS
function loadNextBatch() {
  // const nextBatch = articles.slice(loadedCount, loadedCount + batchSize);
  const nextBatch = filterableArticles.slice(loadedCount, loadedCount + batchSize);

  createAllCards(sectionElement, nextBatch, true); // add items instead of overwriting

  loadedCount += batchSize;

  // updateTitle(sectionTitleElement, articles.slice(0, loadedCount));

  // Stop observing when everything is loaded
  if (loadedCount >= articles.length) {
    observer.disconnect();
  }
}

function resetBatchLoading() {
  loadedCount = 0;
  sectionElement.innerHTML = "";

  updateTitle(sectionTitleElement, filterableArticles);

  // Restart observer
  observer.disconnect();
  observer.observe(sentinel);

  loadNextBatch();
}


observer.observe(sentinel);



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
