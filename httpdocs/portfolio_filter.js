// Creating filter nav
let all_article_portfolio = document.querySelectorAll(".portfolio-gallery article")
let number_articles = all_article_portfolio.length

const article_number_title = document.querySelector(".filter_nav-number")

const filter_nav_title = document.querySelector(".filter_nav-title-h2")

const filter_nav = document.querySelector(".filter_nav-articles")
let all_filter_items = document.querySelectorAll("article .filter_items")

let first_item = document.querySelector("article .reset")

filter_nav_title.addEventListener('click', ()=>{
    filter_nav.classList.toggle('filter-active')
})


items_active = ['all']
total = activate_articles(all_article_portfolio, items_active)
article_number_title.innerHTML = total + " Projets"

first_item.addEventListener('click', ()=>{
    first_item.classList.toggle('active')
    if (first_item.classList.contains('active')) {
        items_active.splice(0, items_active.length)
        items_active.push('all')

        for (l = 1; l < all_filter_items.length; l++) {
            all_filter_items[l].classList.remove('active') 

        }
    } else {
        let index_of_all = items_active.indexOf('all')
        items_active.splice(index_of_all, 1)
    }
    total = activate_articles(all_article_portfolio, items_active)
    article_number_title.innerHTML = total + " Projets"
})

for (let i = 1; i < all_filter_items.length; i++) {

    all_filter_items[i].addEventListener('click', ()=>{
        all_filter_items[i].classList.toggle('active')

        if (all_filter_items[i].classList.contains('active')) {

            first_item.classList.remove('active')
            items_active.push(all_filter_items[i].id)
            let index_of_all = items_active.indexOf('all')

            if (index_of_all > -1){
            items_active.splice(index_of_all, 1)
            }

        } else {
            let index = items_active.indexOf(all_filter_items[i].id)
            if (index > -1) {
                items_active.splice(index, 1)
            }
        }
        
        total = activate_articles(all_article_portfolio, items_active)
        article_number_title.innerHTML = total + " Projets"

    })
}


// Get number of article in portfolio
 function activate_articles(all_article_portfolio, items_active) {
    console.log(items_active)
    for (let j = 0; j <all_article_portfolio.length; j++) {

        article_tag = all_article_portfolio[j].classList
        isActivated = false

        for (let k = 0; k < items_active.length; k++) {
            if (article_tag.contains(items_active[k])) {
                isActivated = true
            }
        }

        if (isActivated) {
            all_article_portfolio[j].classList.add('active')
        } else {
            all_article_portfolio[j].classList.remove('active')
        }
    }

        let all_articles = document.querySelectorAll('.portfolio-gallery .active')

        let total_articles = all_articles.length
        return total_articles
        }