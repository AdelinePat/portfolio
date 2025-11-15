// import { tags } from "./tags.js";
import { projects } from "./project-list.js";
import { certifications } from "./certification-list.js";
import { categories, certificationCategories } from "./tags.js";

export const allCategories = Object.entries(categories);
export const allCertificationCategories = Object.entries(
  certificationCategories
);
console.log(allCertificationCategories);
// export const reversedCategories = Object.fromEntries(
//   Object.entries(categories).map(([key, value]) => [value, key])
// );

export function setProjectFilters(project, categoryList) {
  const categoriesSet = new Set();
  const reversedCategories = Object.fromEntries(
    Object.entries(categoryList).map(([key, value]) => [value, key])
  );
  // console.log("######### REVERSED CATEGORIES SVP : ", reversedCategories);
  for (const tag of project.tags) {
    if (project.title === "Todo JS") {
    }
    if (tag.category) {
      categoriesSet.add(reversedCategories[tag.category]);
    }
  }
  project.filter = [...categoriesSet];
}

for (const project of projects) {
  setProjectFilters(project, categories);
}

for (const certification of certifications) {
  setProjectFilters(certification, certificationCategories);
}
