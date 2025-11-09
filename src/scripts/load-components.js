function loadHead() {
  fetch("components/head.html")
    .then((response) => response.text())
    .then((data) => {
      const headFragment = document.createRange().createContextualFragment(data);
      document.head.appendChild(headFragment);
    })
    .catch((error) => {
      console.error("Error loading head component:", error);
    });
}

function loadComponents(element) {
  document.addEventListener("DOMContentLoaded", () => {
    fetch(`components/${element}.html`)
      .then((response) => response.text())
      .then((data) => {
        // document.getElementById(element).innerHTML = data;
        document.querySelectorAll(`.${element}`).forEach((el) => {
          el.innerHTML = data;
        });
      })
      .catch((error) => {
        console.error(`Error loading component: ${element}`, error);
      });
  });
}

function loadNav(currentPage) {
  document.addEventListener("DOMContentLoaded", () => {
    fetch("components/nav.html")
      .then((response) => response.text())
      .then((data) => {
        // Inject nav into all .nav elements
        const navContainers = document.querySelectorAll(".nav");
        if (navContainers.length === 0) {
          console.warn("No .nav elements found on this page.");
        }
        navContainers.forEach((el) => {
          el.innerHTML = data;

          // Wait for nav HTML to be inserted before searching inside it
          const activeLink = el.querySelector(`.${currentPage}`);
          if (activeLink) {
            activeLink.classList.add("active");
          } else {
            console.warn(`No element with id="${currentPage}" found inside .nav`);
          }
        });
      })
      .catch((error) => {
        console.error("Error loading nav component:", error);
      });
  });
}
