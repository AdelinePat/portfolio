import { updateTitle, createAllCards } from "../components/project-elements.js";

export function createInfiniteLoader({
  container, // sectionElement
  batchSize = 4,
  onBatchLoaded, // callback after a batch is loaded
}) {
  let data = []; // current list (filtered or not)
  console.log(data);
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
    console.log(data, next);
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
