function openMobileMenu() {
    document
        .getElementById("categoryNavbar")
        .classList.add("menu-open");
}

function closeMobileMenu() {
    document
        .getElementById("categoryNavbar")
        .classList.remove("menu-open");

    document
        .getElementById("categoriesDropdown")
        .classList.remove("categories-open");
}

function toggleCategories() {
    document
        .getElementById("categoriesDropdown")
        .classList.toggle("categories-open");
}

document.addEventListener("click", function(event) {

    const categoryBox = document.querySelector(".all-categories");
    const categoryNavbar = document.getElementById("categoryNavbar");

    if (
        categoryBox &&
        !categoryBox.contains(event.target) &&
        !categoryNavbar.contains(event.target)
    ) {
        document
            .getElementById("categoriesDropdown")
            .classList.remove("categories-open");
    }

});