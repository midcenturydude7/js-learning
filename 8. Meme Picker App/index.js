import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArray.push(emotion);
    }
  }
  return emotionsArray;
}
function renderEmotionsRadios(cats) {
  let radioItems = "";
  const emotions = getEmotionsArray(cats);
  for (let emotion of emotions) {
    radioItems += `
    <div class="radio">
      <input
        type="radio"
        id="${emotion}"
        value="${emotion}"
        name="emotions"
      >
      <label for="${emotion}">
        ${emotion}
      </label>
    </div>
    `;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);
