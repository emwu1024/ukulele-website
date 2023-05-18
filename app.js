const hamburger = document.querySelector("#mobile-menu")
const links = document.querySelector(".navbar-menu")

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active')
    links.classList.toggle('active')
});