let collapsableSections = document.querySelectorAll(".collapsable");
let collapsableSectionArrows = document.querySelectorAll(
  ".collapsable div.header i"
);
let activeCollapsableSection = 0;

setUpAboutToggleBar();

function setUpAboutToggleBar() {
  $(".collapsable").each(function (index) {
    $(this).on("click", function () {
      activeCollapsableSection =
        index === activeCollapsableSection ? null : index;
      reloadAboutSections();
    });
  });
}

function reloadAboutSections() {
  $(".collapsable").each(function (index) {
    let isActive = index === activeCollapsableSection;
    $(this).toggleClass("active", isActive);

    let $arrow = $(this).find("div.header i");
    $arrow.toggleClass("fa-chevron-up", isActive);
    $arrow.toggleClass("fa-chevron-down", !isActive);
  });
}
