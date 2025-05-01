let collapsableSections = document.querySelectorAll(".collapsable");
let collapsableSectionArrows = document.querySelectorAll(
  ".collapsable div.header i"
);
let activeCollapsableSection = 0;


setUpAboutToggleBar()

function setUpAboutToggleBar() {
    $(".collapsable").each(function (index) {
        $(this).on("click", function () {
            activeCollapsableSection = (index === activeCollapsableSection) ? null : index
            reloadAboutSections()
        })
    })
}

function reloadAboutSections() {
    $(".collapsable").each(function (index) {
        let isActive = (index === activeCollapsableSection)
        $(this).toggleClass("active", isActive)

        let $arrow = $(this).find("div.header i");
        $arrow.toggleClass("fa-chevron-up", isActive);
        $arrow.toggleClass("fa-chevron-down", !isActive);
    })
//   aboutSections.forEach((element, index) => {
//     if (index == activeAboutSection) {
//       element.classList.add("active");
//       let arrowType = aboutSectionArrows.item(index);
//       arrowType.classList.add("fa-chevron-up");
//       arrowType.classList.remove("fa-chevron-down");
//     } else {
//       element.classList.remove("active");
//       let arrowType = aboutSectionArrows.item(index);
//       arrowType.classList.add("fa-chevron-down");
//       arrowType.classList.remove("fa-chevron-up");
//     }
//   });
}

