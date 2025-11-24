import { updateTitle, createAllCards } from "../components/project-elements.js";

// NECESARRY TO LOAD ARTICLE BATCH !
const batchSize = 4;
let loadedCount = 0;

// SENTINEL ELEMENT TO LOAD ARTICLE PER BATCH
export function createSentinel(sectionElement) {
  const sentinel = document.createElement("div");
  sentinel.id = "sentinel";
  sectionElement.after(sentinel);
}

export function loadNextBatch(sectionElement, filterableArticles) {
  // const nextBatch = articles.slice(loadedCount, loadedCount + batchSize);
  const nextBatch = filterableArticles.slice(
    loadedCount,
    loadedCount + batchSize
  );

  createAllCards(sectionElement, nextBatch, true); // add items instead of overwriting

  loadedCount += batchSize;

  // updateTitle(sectionTitleElement, articles.slice(0, loadedCount));

  // Stop observing when everything is loaded
  if (loadedCount >= articles.length) {
    observer.disconnect();
  }
}

export function resetBatchLoading(sectionElement, observer, sentinel) {
  loadedCount = 0;
  sectionElement.innerHTML = "";

  // updateTitle(sectionTitleElement, filterableArticles);

  // Restart observer
  observer.disconnect();
  observer.observe(sentinel);

  loadNextBatch();
}

export function createInfiniteLoader({
  container, // sectionElement
  batchSize = 4,
  onBatchLoaded, // callback after a batch is loaded
}) {
  let data = []; // current list (filtered or not)
  let loadedCount = 0;
  let observer = null;
  let sentinel = null;

  function createSentinel() {
    sentinel = document.createElement("div");
    sentinel.id = "sentinel";
    container.after(sentinel);
  }

  function loadNextBatch() {
    const next = data.slice(loadedCount, loadedCount + batchSize);
    loadedCount += batchSize;

    // Let the parent script add cards to the DOM
    onBatchLoaded(next, loadedCount >= data.length);

    // Stop when no more data
    if (loadedCount >= data.length) {
      observer.disconnect();
    }
  }

  function reset(newData) {
    data = newData;
    loadedCount = 0;

    container.innerHTML = "";

    observer.disconnect();
    observer.observe(sentinel);

    loadNextBatch();
  }

  function init() {
    createSentinel();

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNextBatch();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(sentinel);
  }

  init();

  return {
    reset,
  };
}
