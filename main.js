let hamburger = document.querySelector(".hamburger-menu");
let navBarMenu = document.querySelector(".nav-menu");

// ADD EVENT LISTENER WHEN CLICK ON BARS
hamburger.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// TO CLOSE HAMBURGER MENU WHEN CLICK ON X BAR
let navBarLink = documen.querySelectorAll('.nav-link');

navLink.forEach(linkBarElement => linkBarElement.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}