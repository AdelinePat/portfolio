export function createLoadMoreLoader({
  container,          // sectionElement
  batchSize = 4,
  onBatchLoaded       // callback after a batch is loaded
}) {
  let data = [];
  let loadedCount = 0;
  let loadMoreButton = null;

  // Function to load the next batch
  function loadNextBatch() {
    const next = data.slice(loadedCount, loadedCount + batchSize);
    loadedCount += batchSize;

    onBatchLoaded(next);

    // Remove button if everything is loaded
    if (loadedCount >= data.length && loadMoreButton) {
      loadMoreButton.remove();
      loadMoreButton = null;
    }
  }

  // Reset with a new list
  function reset(newData) {
    data = newData;
    loadedCount = 0;

    container.innerHTML = "";

    // Create the button if not exists
    if (!loadMoreButton) {
      loadMoreButton = document.createElement("button");
      loadMoreButton.innerText = "Plus...";
      loadMoreButton.classList.add("btn-secondary", "mb-5");
      loadMoreButton.addEventListener("click", loadNextBatch);
      container.after(loadMoreButton);
    }

    loadNextBatch(); // Load the first batch immediately
  }

  return { reset };
}
