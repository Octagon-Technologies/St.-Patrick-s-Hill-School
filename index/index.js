let campusImageDescription = document.querySelectorAll(
  ".campus-image-description"
);

let aboutSections = document.querySelectorAll(".about-section");
let aboutSectionArrows = document.querySelectorAll(
  ".about-section div.header i"
);
let activeAboutSection = null;

setUpUI();
setUpAboutToggleBar();

// Toggle campus active class on tap for mobile
document.querySelectorAll(".campus").forEach((campus) => {
  campus.addEventListener("click", () => {
    campus.classList.toggle("active");
  });
});

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
      } else {
        activeAboutSection = index;
      }

      reloadAboutSections();
    };
  });
}

function reloadAboutSections() {
  aboutSections.forEach((element, index) => {
    if (index == activeAboutSection) {
      element.classList.add("active");
      let arrowType = aboutSectionArrows.item(index);
      arrowType.classList.add("fa-chevron-up");
      arrowType.classList.remove("fa-chevron-down");
    } else {
      element.classList.remove("active");
      let arrowType = aboutSectionArrows.item(index);
      arrowType.classList.add("fa-chevron-down");
      arrowType.classList.remove("fa-chevron-up");
    }
  });
}
