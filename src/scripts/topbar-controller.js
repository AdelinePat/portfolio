let isMenuOpen = false;
const body = document.querySelector("body");

function openMenu(mobileMenuDOM) {
  mobileMenuDOM.classList.add("open");
  body.classList.add("modal-open");
}

function closeMenu(mobileMenuDOM) {
  mobileMenuDOM.classList.remove("open");
  body.classList.remove("modal-open");
}

function toggleMobileMenu(mobileMenuDOM) {
  console.log("test : ", mobileMenuDOM);
  if (isMenuOpen) {
    closeMenu(mobileMenuDOM);
  } else {
    openMenu(mobileMenuDOM);
  }
  isMenuOpen = !isMenuOpen;
}

export function mobileMenu(mobileMenuDOM) {
  const phoneMenu = document.querySelector(".menu-phone");
  const checkbox = phoneMenu.querySelector("input");
  const ul = mobileMenuDOM.querySelector("ul");
  isMenuOpen = checkbox.checked;
  checkbox.addEventListener("change", () => {
    toggleMobileMenu(mobileMenuDOM);
  });

  mobileMenuDOM.addEventListener("click", (event) => {
    if (!ul.contains(event.target)) {
      toggleMobileMenu(mobileMenuDOM);
      checkbox.checked = false;
    }
  });
}
