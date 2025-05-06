let categoryTabs = document.querySelectorAll(".category .slider ul li");
let categoryContents = document.querySelectorAll(".each-category");

let activeCategory = 0


setUpCategoryTabs()

function setUpCategoryTabs() {
    categoryTabs.forEach((tab, index) => {
        tab.onclick = () => {
            activeCategory = index
            reloadCategoryContent()
        }
    })
}

function reloadCategoryContent() {
    categoryTabs.forEach((tab, index) => {
        let isActive = index === activeCategory;
        
        $(tab).toggleClass("active", isActive)
        $(categoryContents[index]).toggleClass("active", isActive);
    })
}