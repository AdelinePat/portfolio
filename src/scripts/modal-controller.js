import { createProjectModal } from "../components/modal-elements.js";

const body = document.querySelector("body");
let layer;
let modal;

export function openModal(article) {
  createLayer();
  const modalElement = createProjectModal(article);
  modal = modalElement;
  layer.append(modalElement);
  body.append(layer);
  document.body.classList.add("modal-open");

  layer.addEventListener("click", (event) => {
    const closeBtn = modal.querySelector(".btn-close");
    if (!modal.contains(event.target) || event.target === closeBtn) {
      layer.remove();
      document.body.classList.remove("modal-open");
    }
  });
}

function createLayer() {
  layer = document.createElement("div");
  layer.classList.add("layer");
}
