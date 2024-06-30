function scrollToElement(selector, instance = 0) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
        elements[instance].scrollIntoView({ behavior: "smooth" });
    } else {
        console.error("Element not found: " + selector);
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
link1.addEventListener("click", function() {
    scrollToElement(".nav-logo");
});

link2.addEventListener("click", function() {
    open("./about.html");
});
link3.addEventListener("click", function() {
    scrollToElement("#link3goner");
});
link4.addEventListener("click", function() {
    scrollToElement(".some-other-element");
});

link5.addEventListener("click", function() {
    scrollToElement(".footer-container");
});
//--------------for the menubar icon---------
const navBarLinks = document.querySelector(".nav-links");
const menuBar = document.getElementById("menuBar");
console.log("navBarLinks:", navBarLinks);
console.log("menuBar:", menuBar);

if (menuBar && navBarLinks) {
    menuBar.addEventListener("click", function () {
      navBarLinks.classList.toggle('show');
      console.log("Menu toggled. Nav links visibility:", navBarLinks.classList.contains('show') ? "visible" : "hidden");
    });
  } else {
    console.error("Menu or navigation links not found");
  }
