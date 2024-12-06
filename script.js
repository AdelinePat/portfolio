// Creating a scrolling event, making the navbar get a background when the page is scrolled

const navbarEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbarEl.classList.add('navbar-scrolled');
    } else if (window.scrollY <= 50) {
        navbarEl.classList.remove('navbar-scrolled');
    }
});


// Creating menu hamburger, adding class to the list in navbar when checkbox is checked

const menuHamburger = document.querySelector("#menu-hamburger")
    const navLinks = document.querySelector("ul.menu-items")

    menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
    })