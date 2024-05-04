"use strict";

/**
 * Add event listener to element(s)
 */
const addEventListenerToElement = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * Navbar toggle functionality
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventListenerToElement(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventListenerToElement(navLinks, "click", closeNavbar);

/**
 * Header active state on scroll
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Scroll reveal effect
 */
const sections = document.querySelectorAll("[data-section]");

const revealSections = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
};

revealSections();
addEventListenerToElement(window, "scroll", revealSections);

/**
 * Creating objects for each section
 */
const sectionObjects = [
  { name: "navbar", element: navbar },
  { name: "header", element: header },
  { name: "backTopBtn", element: backTopBtn },
];

/**
 * Array manipulation using map, filter, and reduce
 */
const sectionNames = sectionObjects.map((section) => section.name);
console.log("Section Names:", sectionNames);

const activeSections = sectionObjects.filter((section) =>
  section.element.classList.contains("active")
);
console.log("Active Sections:", activeSections);

const totalActiveSections = sectionObjects.reduce((total, section) => {
  return section.element.classList.contains("active") ? total + 1 : total;
}, 0);
console.log("Total Active Sections:", totalActiveSections);

/**
 * Loops through each section object
 */
sectionObjects.forEach((section) => {
  console.log(`Section Name: ${section.name}, Element:`, section.element);
});

/**
 * Form events
 */
const form = document.querySelector("form");

const handleSubmit = function (event) {
  event.preventDefault();
  console.log("Form submitted!");
};

addEventListenerToElement(form, "submit", handleSubmit);

/**
 * Promises and Async Await
 */
const fetchData = async function () {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
