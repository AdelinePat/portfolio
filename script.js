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

const menuHamburger = document.querySelector("#menu-hamburger");
const navLinks = document.querySelector("ul.menu-items");

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
});

// Creating filter nav

const filter_nav_title = document.querySelector(".filter_nav-title-h2")

const filter_nav = document.querySelector(".filter_nav-articles")
let all_filter_items = document.querySelectorAll("article label")

filter_nav_title.addEventListener('click', ()=>{
    filter_nav.classList.toggle('filter-active')
})

// for (label of all_filter_items) {
//     label.addEventListener('click', ()=>{
//         label.classList.toggle('active')
//         console.log(label)
//     })
// }

for (let i = 0; i < all_filter_items.length; i++) {
    console.log(all_filter_items[i])
    all_filter_items[i].addEventListener('click', ()=>{
        all_filter_items[i].classList.toggle('active')
        // console.log(label)
    })

}

// Get number of article in portfolio

let all_article_portfolio = document.querySelectorAll(".portfolio-gallery article")
let number_articles = all_article_portfolio.length

const article_number_title = document.querySelector(".filter_nav-number")
article_number_title.innerHTML = number_articles + " Projets"