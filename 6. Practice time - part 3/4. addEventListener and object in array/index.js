let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

const scoreBtn = document.getElementById("score-btn");

scoreBtn.addEventListener("click", function () {
  localStorage.setItem(data[0].player, data[0].score);
  console.log(`${data[0].player}: ${data[0].score}`);
});
// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
