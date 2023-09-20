// Sticky Navbar

const headerSection = document.querySelector("header");

window.addEventListener("scroll", () => {
    headerSection.classList.toggle("active", window.pageYOffset > 50);
})

// Hamburger Menu

const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeHamburger = document.querySelector(".fa-xmark");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");

hamburgerMenu.addEventListener("click", () => {
    navList.classList.add("active");
    document.body.style.overflowY = "hidden";
})

closeHamburger.addEventListener("click", () => {
    navList.classList.remove("active");
    document.body.style.overflowY = "scroll";
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active");
        document.body.style.overflowY = "scroll";
    })
})

// To Top Button

const toTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    toTopBtn.classList.toggle("active", window.pageYOffset > 400);
})

toTopBtn.addEventListener("click", () => {
    document.querySelector(".hero-section").scrollIntoView({behavior: "smooth"});
})

// Smooth Scroll

const heroSection = document.querySelector(".hero-section");
const tourSection = document.querySelector(".tour-section");
const aboutSection = document.querySelector(".about-section");
const popularSection = document.querySelector(".popular-section");
const cultureSection = document.querySelector(".culture-section");
const newsSection = document.querySelector(".newsletter-section");

document.querySelector(".info-link").addEventListener("click", () => {
    tourSection.scrollIntoView({behavior: "smooth"});
})

document.querySelector(".about-link").addEventListener("click", () => {
    aboutSection.scrollIntoView({behavior: "smooth"});
})

document.querySelector(".culture-link").addEventListener("click", () => {
    cultureSection.scrollIntoView({behavior: "smooth"});
})

document.querySelector(".contact-link").addEventListener("click", () => {
    newsSection.scrollIntoView({behavior: "smooth"});
})