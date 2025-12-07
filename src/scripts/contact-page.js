import "../style/scss/contact.scss";
import { createFinalHeader, createNav } from "../components/header-element.js";
import { createFooter } from "../components/footer-element.js";
import { headerContents } from "../assets/data/header-page.js";
import "../components/topbar-element.js";
import { mobileMenu } from "./topbar-controller.js";

const body = document.querySelector("body");
const aside = document.querySelector("aside");

// HEADER BIG SCREEN
const header = createFinalHeader(headerContents.contact, "big-screen");
const footer = createFooter("big-screen");
aside.append(header, footer);

// FOOTER AND NAV SMALL SCREEN
const navigationFooter = createNav(headerContents.contact.id);
const footerPhone = createFooter();
footerPhone.prepend(navigationFooter);
body.append(footerPhone);

// MOBILE MENU
const mobileNav = createNav(headerContents.contact.id);
const topbar = document.querySelector(".menu-phone");
topbar.append(mobileNav);
mobileMenu(mobileNav);
