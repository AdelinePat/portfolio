import { createProjectModal } from "../components/project-elements";

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
  document.body.classList.add("modal-open");

  return new Promise((resolve, reject) => {
    layer.addEventListener("click", (event) => {
      if (
        !modal.contains(event.target) ||
        event.target === modal.querySelector(".btn-secondary")
      ) {
        resolve(false);
        layer.remove();
        document.body.classList.remove("modal-open");
      } else if (event.target === modal.querySelector(".btn-primary")) {
        console.log("confirm!!!");
        layer.remove();
        document.body.classList.remove("modal-open");
        resolve(true);
      }
    });
  });
}

function createLayer() {
  layer = document.createElement("div");
  layer.classList.add("layer");
}

function createModal(question) {
  modal = document.createElement("div");
  modal.classList.add("modal");

  const questionParagraph = document.createElement("p");
  const textQuestion = document.createTextNode(question);
  questionParagraph.append(textQuestion);

  const confirmBtn = createButton("Confirmer");
  confirmBtn.classList.add("btn-primary");
  const cancelBtn = createButton("Annuler");
  cancelBtn.classList.add("btn-secondary");
  modal.append(questionParagraph);
  modal.append(cancelBtn);
  modal.append(confirmBtn);
}

function createButton(text) {
  const delText = document.createTextNode(text);
  const btn = document.createElement("button");
  btn.append(delText);
  return btn;
}
