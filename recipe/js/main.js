import '/css/style.css'

//give specific points to each button
//make sure each button doesnt refresh the page
//get the points from each question
//for a certain point range, insert html when click submit

const button = document.querySelector(".button")
const submit = document.querySelector(".submitbtn")
const area = document.querySelector(".results")
let score = 0

function pointhandler(points){
    score += points
    return score
}

button.forEach((btn) => {
    btn.addEventListener("submit", function(event){
        event.preventDefault();
        const points = parseInt(button.value);
        return points;
    })
    pointhandler(points)
})

submit.addEventListener("submit", function(event){
    const html = ``
    area.insertAdjacentHTML("beforeend", html)
})


















