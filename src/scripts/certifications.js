import "../style/scss/certifications.scss";
import { createFinalHeader, createNav } from "../components/header-element.js";
import { createFooter } from "../components/footer-element.js";
import { headerContents } from "../assets/data/header-page.js";

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
import { createTopbar } from "../components/topbar-element.js";
import { mobileMenu } from "./topbar.js";

const activeFilter = [];
let articles = sortFromMostRecent(certifications);

const body = document.querySelector("body");
const aside = document.querySelector("aside");

// HEADER BIG SCREEN
const header = createFinalHeader(headerContents.certifications, "big-screen");
const footer = createFooter("big-screen");
aside.append(header, footer);

// FOOTER AND NAV SMALL SCREEN
const navigationFooter = createNav(headerContents.certifications.id);
const footerPhone = createFooter();
footerPhone.prepend(navigationFooter);
body.append(footerPhone);

// MOBILE MENU
const mobileNav = createNav(headerContents.certifications.id);
console.log("mobilenav", mobileNav);
const topbar = document.querySelector(".menu-phone");
console.log(topbar);
topbar.append(mobileNav);
mobileMenu(mobileNav);

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

const sectionElement = document.querySelector("#certifications");
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

for (const course of courseList) {
  if (course.display) {
    const article = createCourseArticle(course);
    courseSection.append(article);
  }
}
