import "../style/scss/certifications.scss";
import { certifications } from "../assets/data/certification-list.js";
import { allCertificationCategories } from "../assets/data/generateTagsAndFilters.js";

import { updateTitle, createAllCards } from "../components/project-elements.js";
import { createFilterDiv } from "../components/filter-element.js";
import {
  toggleFilterDiv,
  toggleActiveTag,
  sortFromMostRecent,
} from "./filter.js";
const activeFilter = [];
let articles = sortFromMostRecent(certifications);
console.log(articles);
// CREATE FILTER AND FILTER EVENTS
const sectionTitleElement = document.querySelector(".title-filter");
const sectionTitleContainer = document.querySelector(
  ".section-title-container"
);
updateTitle(sectionTitleElement, articles, false);
const filterDiv = createFilterDiv(
  sectionTitleContainer,
  allCertificationCategories
);
toggleFilterDiv(sectionTitleElement, filterDiv);

// console.log(sectionTitleElement, sectionTitleContainer);

const sectionElement = document.querySelector(".certifications");
console.log(sectionElement);
createAllCards(sectionElement, articles);

toggleActiveTag(
  sectionTitleElement,
  sectionElement,
  filterDiv,
  activeFilter,
  articles
);
