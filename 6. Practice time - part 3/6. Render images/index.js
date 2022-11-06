// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];
const imgContainer = document.getElementById("container");

function renderImg() {
  let imgsDOM = "";
  for (let i = 0; i < imgs.length; i++) {
    imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`;
  }
  imgContainer.innerHTML = imgsDOM;
}

renderImg();
