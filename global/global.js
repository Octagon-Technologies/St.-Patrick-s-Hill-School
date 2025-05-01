let openMenuBtn = document.getElementById("openMenuBtn");
let closeMenuBtn = document.getElementById("closeMenuBtn");

let menuBar = document.querySelector(".nav-bar");


setUpMenu();


function setUpMenu() {
  openMenuBtn.onclick = () => {
    menuBar.style.right = "0px";
  };

  closeMenuBtn.onclick = () => {
    menuBar.style.right = "-50vw";
  };
}
