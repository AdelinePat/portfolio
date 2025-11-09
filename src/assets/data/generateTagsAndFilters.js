import { tags } from "./tags.js";
import { projects } from "./project-list.js";
import { categories } from "./tags.js";

// for (const tag of Object.values(tags)) {
//   //   console.log(tag);
//   if (!allFilters[tag.category]) {
//     allFilters[tag.category] = tag.category;
//   }
//   //   console.log(allFilters[tag.category]);
// }

export const allCategories = Object.entries(categories);

export const reversedCategories = Object.fromEntries(
  Object.entries(categories).map(([key, value]) => [value, key])
);

// console.log(allCategories);
// console.log(reversedCategories);

export function setProjectFilters(project) {
  const categoriesSet = new Set();
  for (const tag of project.tags) {
    if (tag.category) {
      categoriesSet.add(reversedCategories[tag.category]);
    }
  }
  project.filter = [...categoriesSet];
}
for (const project of projects) {
  setProjectFilters(project);
}
