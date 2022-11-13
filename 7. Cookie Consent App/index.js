/*
Challenge:
1. Take control of the close button.
2. Use an event listener to set the display 
   property of the modal to 'none' when the
   close button is clicked.
*/

const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalBtn = document.getElementById("modal-btn");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

modalBtn.addEventListener("click", function () {
  modalBtn.style.display = "none";
});
