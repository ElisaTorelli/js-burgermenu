let hamburger = document.querySelector(".hamburger-menu");
let navBarMenu = document.querySelector(".nav-menu");

// ADD EVENT LISTENER WHEN CLICK ON BARS
function hamburgerMenu() {
    hamburger.classList.toggle("active");
    navBarMenu.classList.toggle("nav-menu-active");
}

hamburger.addEventListener("click", hamburgerMenu);



// TO CLOSE HAMBURGER MENU WHEN CLICK ON X BAR
let navBarLink = document.querySelectorAll('.nav-link');

function closeMenu() {
    hamburger.classList.remove("active");
    navBarMenu.classList.remove("nav-menu-active");
}

navBarLink.forEach(linkBarElement => linkBarElement.addEventListener("click", closeMenu));
