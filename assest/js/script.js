// Get a reference to the menu icon element
const menuIcon = document.getElementById("menuIcon");

// Get a reference to the navigation links element
const navLinks = document.querySelector(".navs__link");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function() {
    // Toggle the 'active' class on the menu icon
    this.classList.toggle("active");

    // Toggle the 'active' class on the navigation links
    navLinks.classList.toggle("active");
});
document.getElementById("indeterminate").indeterminate = true;


