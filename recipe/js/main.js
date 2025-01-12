import '/css/style.css'

//give specific points to each button
//make sure each button doesnt refresh the page
//get the points from each question
//for a certain point range, insert html when click submit

const buttonlist = document.querySelectorAll(".button")
const submit = document.querySelector(".submitbtn")
const area = document.querySelector(".results")
let score = 0

function pointhandler(points){
    score += points
    return score
}

buttonlist.forEach((btn) => {
    btn.addEventListener("submit", function(event){
        event.preventDefault();
        const points = parseInt(button.value);
        return points;
    })
    pointhandler(points)
})

submit.addEventListener("submit", function(event){
    event.preventDefault();
    const html = `<h2 class="resulttitle">Ur style is nice!</h2>
        <h4 class="pointdisplay">points: 5</h4>`
    area.insertAdjacentHTML("beforeend", html);
})


















