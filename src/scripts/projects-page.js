import "../style/scss/projects.scss";

import { createFinalHeader, createNav } from "../components/header-element.js";
import { createFooter } from "../components/footer-element.js";
import { headerContents } from "../assets/data/header-page.js";
// import { createTopbar } from "../components/topbar-element.js";

import { allCategories } from "../assets/data/generateTagsAndFilters.js";
import { projects } from "../assets/data/project-list.js";

import { updateTitle, createAllCards } from "../components/project-elements.js";
import { createFilterDiv } from "../components/filter-element.js";
import {
  toggleFilterDiv,
  initTagFilterHandler,
  sortFromMostRecent,
} from "./filter-service.js";
import "../components/topbar-element.js";
import { mobileMenu } from "./topbar-controller.js";

import { createInfiniteLoader } from "./infinite-scroll-loader.js";

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

let currentCount = 6;
// let articles = sortFromMostRecent(projects).slice(0, currentCount);
let articles = sortFromMostRecent(projects);
let filterableArticles = articles;

const sectionTitleElement = document.querySelector(".title-filter");
const sectionTitleContainer = document.querySelector(
  ".section-title-container"
);

const sectionElement = document.querySelector("section");
// createAllCards(sectionElement, articles);

// Initialize infinite loader
const loader = createInfiniteLoader({
  container: sectionElement,
  batchSize: 4,
  onBatchLoaded: (batch, isLastBatch) => {
    // Add cards to DOM
    createAllCards(sectionElement, batch, true);
  },
});

updateTitle(sectionTitleElement, filterableArticles);
// SET ARTICLE LIST INSIDE LOADER !!
loader.reset(filterableArticles);

const filterDiv = createFilterDiv(sectionTitleContainer, allCategories);
toggleFilterDiv(sectionTitleElement, filterDiv);

// console.log(articles);

initTagFilterHandler(
  sectionTitleElement,
  sectionElement,
  filterDiv,
  activeFilter,
  articles,
  (filtered) => {
    filterableArticles = filtered;

    updateTitle(sectionTitleElement, filterableArticles);

    loader.reset(filterableArticles);
  }
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
