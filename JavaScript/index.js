const sideBar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon")



menuIcon.addEventListener("click", function() {
    sideBar.style.display = "flex";
})

closeIcon.addEventListener("click", function() {
    sideBar.style.display = "none";
})