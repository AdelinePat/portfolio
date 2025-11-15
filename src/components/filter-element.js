const tagBtnClass = "btn-reversed-primary-lighter";

export function createFilterDiv(sectionTitleContainer, allCategories) {
  const filterDiv = document.createElement("div");

  filterDiv.classList.add("filter-list", "mb-5");
  const firstSpan = document.createElement("span");
  firstSpan.innerText = "Tous";
  firstSpan.classList.add("all", tagBtnClass);
  filterDiv.append(firstSpan);

  for (const filter of allCategories) {
    const span = document.createElement("span");
    if (filter[0] != "general") {
      span.innerText = filter[1];
      span.classList.add(filter[0]);
      span.classList.add(tagBtnClass);
      filterDiv.append(span);
    }
  }
  filterDiv.classList.add("hidden");
  sectionTitleContainer.append(filterDiv);
  return filterDiv;
}
