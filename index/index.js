let openMenuBtn = document.getElementById("openMenuBtn");
let closeMenuBtn = document.getElementById("closeMenuBtn");

let menuBar = document.querySelector(".nav-bar");
let campusImageDescription = document.querySelectorAll(
  ".campus-image-description"
);

setUpMenu()
setUpUI()

// Toggle campus active class on tap for mobile
document.querySelectorAll(".campus").forEach((campus) => {
  campus.addEventListener("click", () => {
    campus.classList.toggle("active");
  });
});


function setUpMenu() {
    openMenuBtn.onclick = () => {
        menuBar.style.right = "0px";
    }

    closeMenuBtn.onclick = () => {
      menuBar.style.right = "-225px";
    };
}

function setUpUI() {
    if (window.innerWidth <= 600) {
        campusImageDescription.forEach((element) => {
            element.textContent = "Tap for more";
        })
    }
}