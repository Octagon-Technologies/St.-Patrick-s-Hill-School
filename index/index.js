let left = document.getElementById("left");
let right = document.getElementById("right");

let slider = document.querySelector(".slider .list");
let images = document.querySelectorAll(".list .slide img");
let dots = document.querySelectorAll(".dots li");
let activeTab = 0;

let campusImageDescription = document.querySelectorAll(
  ".campus-image-description"
);

let aboutSections = document.querySelectorAll(".about-section");
let aboutSectionArrows = document.querySelectorAll(
  ".about-section div.header i"
);
let activeAboutSection = null;

setUpUI();
setUpNavigationArrowAndDots();
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

function setUpNavigationArrowAndDots() {
  left.onclick = () => {
    activeTab = activeTab === 0 ? dots.length - 1 : activeTab - 1;
    reloadImageAndDots();
  };

  right.onclick = () => {
    activeTab = activeTab < dots.length - 1 ? activeTab + 1 : 0;
    reloadImageAndDots();
  };

  dots.forEach((dot, index) => {
    dot.onclick = () => {
      activeTab = index;
      reloadImageAndDots();
    };
  });
}

function reloadImageAndDots() {
  let offsetLeft = images[activeTab].offsetLeft;
  slider.style.left = -offsetLeft + "px";

  dots.forEach((dot, index) => {
    $(dot).toggleClass("active", activeTab === index);
  });
}

function setUpAboutToggleBar() {
  document.onclick = () => {
    activeAboutSection = null;
    reloadAboutSections();
  };

  aboutSections.forEach((element, index) => {
    element.addEventListener(
      "click",
      (event) => {
        // event.stopPropagation();

        if (index === activeAboutSection) {
          activeAboutSection = null;
        } else {
          activeAboutSection = index;
        }

        reloadAboutSections();
      },
      { capture: true }
    );
  });
}

function reloadAboutSections() {
  aboutSections.forEach((element, index) => {
    if (index === activeAboutSection) {
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
