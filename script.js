document.getElementById("VE").addEventListener("click", function() {
    window.open("video1.html", "_blank");
});
document.getElementById("VE2").addEventListener("click", function() {
    window.open("video2.html", "_blank");
});
document.getElementById("HE").addEventListener("click", function() {
    window.open("index.html", "_blank");
});
document.getElementById("YT").addEventListener("click", function() {
    window.open("https://www.youtube.com/channel/UC9aXXl56PYVK-GSPISyCLQg?view_as=subscriber", "_blank");
});
function scrollDown() {
    window.scrollBy({ top: 900, behavior: 'smooth' });
}
document.getElementById("mn").addEventListener("click", function() {
    window.open("video2.html", "_blank");
});
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        // Burger animation (optional)
        burger.classList.toggle('toggle');
    });
});
