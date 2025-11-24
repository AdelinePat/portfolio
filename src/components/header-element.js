import { navigation } from "../assets/data/header-page";

const headerContainer = document.createElement("aside");
headerContainer.classList.add("container");

export function createHeader(headerArticle) {
  const headerElement = document.createElement("header");

  const title = document.createElement("h1");
  title.classList.add("title-secondary", "ls-5");
  title.innerText = headerArticle.title;

  const subtitle = document.createElement("h3");
  subtitle.classList.add("gradient-subtitle");
  if (headerArticle?.subtitle) {
    subtitle.innerText = headerArticle.subtitle;
  }

  const description = document.createElement("div");
  description.classList.add("description", "text-primary-lighter");
  description.innerHTML = headerArticle.description;
  if (headerArticle.id != "homepage") {
    headerElement.append(title, subtitle, description);
  } else {
    const divPicture = document.createElement("div");
    divPicture.classList.add("header-title", "picture");

    const divGroup = document.createElement("div");
    divGroup.classList.add("header-title-group");

    divGroup.append(title, subtitle);

    const contactButton = document.createElement("a");
    contactButton.setAttribute("href", "./contact");
    contactButton.classList.add("btn-secondary-lighter", "small-screen");
    contactButton.innerText = "Contactez-moi";

    divPicture.append(divGroup, contactButton);

    headerElement.append(divPicture, description);
  }
  return headerElement;
}

// export function createNav(headerArticle, screenSize = "small-screen") {
//   const nav = document.createElement("nav");
//   nav.classList.add("nav", "ls-2", "mb-5", screenSize);
//   // nav.setAttribute("id", "nav");
//   const list = document.createElement("ul");

//   for (const element of navigation) {
//     const li = document.createElement("li");
//     const link = document.createElement("a");
//     link.text = element.text;
//     link.setAttribute("href", element.url);
//     link.classList.add(element.class);

//     if (element.class === headerArticle.id) {
//       link.classList.add("active");
//     }

//     li.append(link);
//     list.append(li);
//   }

//   nav.append(list);
//   return nav;
// }

export function createNav(headerArticleId, screenSize = "small-screen") {
  const nav = document.createElement("nav");
  nav.classList.add("nav", "ls-2", "mb-5", screenSize);
  // nav.setAttribute("id", "nav");
  const list = document.createElement("ul");

  for (const element of navigation) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.text = element.text;
    link.setAttribute("href", element.url);
    link.classList.add(element.class);

    if (element.class === headerArticleId) {
      // console.log("id svp : ", headerArticleId);
      link.classList.add("active");
    }

    li.append(link);
    list.append(li);
  }

  nav.append(list);
  return nav;
}

// export function createBigScreenHeader() {

// }

export function createFinalHeader(headerArticle, screenSize = "small-screen") {
  if (screenSize === "big-screen") {
    const navigation = createNav(headerArticle.id, "big-screen");
    const header = createHeader(headerArticle);
    header.append(navigation);
    return header;
  }
  // if (screenSize === "small-screen") {
  //   console.log("hola?");
  // }
}
