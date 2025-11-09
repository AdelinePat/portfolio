import { tags } from "./tags.js";
import { projects } from "./project-list.js";
import { categories } from "./tags.js";

export const allCategories = Object.entries(categories);

export const reversedCategories = Object.fromEntries(
  Object.entries(categories).map(([key, value]) => [value, key])
);

export function setProjectFilters(project) {
  const categoriesSet = new Set();
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
  setProjectFilters(project);
}
