let menuHamburger = document.querySelector(".menu-hamburger")
let menuSection = document.querySelector(".menuSection");

const closeSelection = document.querySelector(".close-cicle")

const overlay = document.querySelector(".overlaySection")

let audioPim = document.querySelector(".audioPim");



menuHamburger.addEventListener("click", function(){
    menuSection.style.display = "block";
    overlay.style.display = "block"
});

closeSelection.addEventListener("click", function(){
    menuSection.style.transition = "all 1s";
    overlay.style.transition = "all 1s";
    menuSection.style.display = "none";
    overlay.style.display = "none";
})

overlay.addEventListener("click", function(){
    menuSection.style.display = "none";
    overlay.style.display = "none";
});

menuHamburger.addEventListener("click", function(){
audioPim.currentTime = 0;
audioPim.play()});