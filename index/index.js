let openMenuBtn = document.getElementById("openMenuBtn");
let closeMenuBtn = document.getElementById("closeMenuBtn");

let menuBar = document.querySelector(".nav-bar");
let campusImageDescription = document.querySelectorAll(
  ".campus-image-description"
);

let aboutSections = document.querySelectorAll(".about-section");
let aboutSectionArrows = document.querySelectorAll(
  ".about-section div.header i"
);
let activeAboutSection = null;

setUpMenu();
setUpUI();
setUpAboutToggleBar();

// Toggle campus active class on tap for mobile
document.querySelectorAll(".campus").forEach((campus) => {
  campus.addEventListener("click", () => {
    campus.classList.toggle("active");
  });
});

function setUpMenu() {
  openMenuBtn.onclick = () => {
    menuBar.style.right = "0px";
  };

  closeMenuBtn.onclick = () => {
    menuBar.style.right = "-225px";
  };
}

function setUpUI() {
  if (window.innerWidth <= 600) {
    campusImageDescription.forEach((element) => {
      element.textContent = "Tap for more";
    });
  }
}

function setUpAboutToggleBar() {
  aboutSections.forEach((element, index) => {
    element.onclick = () => {
      if (index == activeAboutSection) {
        activeAboutSection = null;
      }
      activeAboutSection = index;
      reloadAboutSections();
    };
  });
}

function reloadAboutSections() {
  aboutSections.forEach((element, index) => {
    if (index == activeAboutSection) {
      element.classList.add("active");
      let arrowType = aboutSectionArrows.item(index);
      arrowType.classList.add("fa-arrow-up");
      arrowType.classList.remove("fa-arrow-down");
    } else {
      element.classList.remove("active");
      let arrowType = aboutSectionArrows.item(index);
      arrowType.classList.add("fa-arrow-down");
      arrowType.classList.remove("fa-arrow-up");
    }
  });
}
