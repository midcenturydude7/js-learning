// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");

let count = 0;

console.log(countEl);

function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(count);
}


