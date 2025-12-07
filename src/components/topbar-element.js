const body = document.querySelector("body");
const menuPhone = document.createElement("div");
menuPhone.innerHTML = `<input type="checkbox" id="menu-hamburger">
                    <label for="menu-hamburger"></label>`;
menuPhone.classList.add("menu-phone");
const iconLink = document.createElement("a");
iconLink.setAttribute("href", "./index.html");
const myIcon = document.createElement("img");
myIcon.setAttribute("src", "./assets/icon/Logo-AP-small.png");
iconLink.append(myIcon);
menuPhone.append(iconLink);

body.prepend(menuPhone);
