//welcome game page press start game and continue to grid
let EnterPage = document.querySelector(".EnterPage");
let BtnEnter = document.querySelector("#BtnEnter");
let main = document.querySelector(".main");
let gameBoard = document.querySelector(".gameBoard");
onload = function() {
    main.style.display = "none";
}
BtnEnter.addEventListener("click", function () {
    EnterPage.style.display = "none";
    main.style.display = "flex";
    gameBoard.style.display = "grid";
  });





