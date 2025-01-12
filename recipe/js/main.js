// Select elements
import '/css/style.css'
const buttonlist = document.querySelectorAll(".button");
const submit = document.querySelector(".submitbtn");
const area = document.querySelector(".area");

let score = 0;


const styles = [
  { min: 0, max: 5, description: "very casual NICe" },
  { min: 6, max: 10, description: "trendy sports" },
  { min: 11, max: 15, description: "elegant dude huh." },
  { min: 16, max: Infinity, description: "who are you????" },
];

function pointhandler(points) {
  score += points;
}

function getStyleForScore(score) {
  return styles.find((style) => score >= style.min && score <= style.max).description;
}

buttonlist.forEach((btn) => {
  btn.addEventListener("click", function () {
    const points = parseInt(btn.value); 
    pointhandler(points); 
    btn.disabled = true; 
  });
});

submit.addEventListener("click", function () {
  const styleDescription = getStyleForScore(score);
  const html = `
        <div class="results">
            <h2 class="resulttitle">Your Style Quiz Result:</h2>
            <h4 class="pointdisplay">Points: ${score}</h4>
            <p class="styledescription">${styleDescription}</p>
        </div>
    `;
  area.innerHTML = html; 
});
















