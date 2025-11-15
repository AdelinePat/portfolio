import { createProjectModal } from "../components/modal-elements.js";

const body = document.querySelector("body");
let layer;
let modal;

export function openModal(article) {
  createLayer();
  // createModal(question);
  const modalElement = createProjectModal(article);
  modal = modalElement;
  layer.append(modalElement);
  // modal = document.querySelector(".modal");
  body.append(layer);
  // document.body.classList.add("modal-open");

  return new Promise((resolve, reject) => {
    layer.addEventListener("click", (event) => {
      if (
        !modal.contains(event.target) ||
        event.target === modal.querySelector(".btn-secondary")
      ) {
        resolve(false);
        layer.remove();
        // document.body.classList.remove("modal-open");
      } else if (event.target === modal.querySelector(".btn-primary")) {
        console.log("confirm!!!");
        layer.remove();
        // document.body.classList.remove("modal-open");
        resolve(true);
      }
    });
  });
}

function createLayer() {
  layer = document.createElement("div");
  layer.classList.add("layer");
}
