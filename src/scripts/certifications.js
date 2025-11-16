import "../style/scss/certifications.scss";
import { certifications } from "../assets/data/certification-list.js";
import { courses } from "../assets/data/courses-list.js";
import { allCertificationCategories } from "../assets/data/generateTagsAndFilters.js";

import { updateTitle, createAllCards } from "../components/project-elements.js";
import { createCourseArticle } from "../components/course-element.js";
import { createFilterDiv } from "../components/filter-element.js";
import {
  toggleFilterDiv,
  toggleActiveTag,
  sortFromMostRecent,
} from "./filter.js";
const activeFilter = [];
let articles = sortFromMostRecent(certifications);
console.log(articles);

// CERTIFICATIONS PART
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

// COURSES PART
const courseSection = document.querySelector(".courses-list");
let courseList = sortFromMostRecent(courses);
console.log(courseList);
// courseSection.innerHTML = "";
for (const course of courseList) {
  const article = createCourseArticle(course);
  courseSection.append(article);
}
