export function toggleFilterDiv(sectionTitleElement, filterDiv) {
  const titleIcon = sectionTitleElement.querySelector("i");
  titleIcon.classList.add("ml-1");
  sectionTitleElement.addEventListener("click", (event) => {
    const span = sectionTitleElement.querySelector("span");
    // console.log(span);
    if (span.contains(event.target)) {
      //   console.log("filtrer? HALLO ?");
      filterDiv.classList.toggle("hidden");
    }
  });
}

export function toggleActiveTag(filterDiv, activeFilter) {
  filterDiv.addEventListener("click", (event) => {
    const span = event.target.closest("span");
    if (span && filterDiv.contains(span)) {
      event.stopPropagation();
      //   console.log(span.classList);
      toggleTag(activeFilter, span.classList[0]);
      if (span.classList.contains("active")) {
        span.classList.remove("active");
      } else {
        span.classList.add("active");
      }
      console.log(activeFilter);
      //   console.log("tag cliqué");
    }
  });
}

function toggleTag(array, value) {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  } else {
    array.push(value);
  }
}
