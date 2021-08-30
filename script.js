const adviceSpan = document.querySelector(".advice");

// new advice
const newAdvice = document.querySelector(".new-advice > button");
newAdvice.addEventListener("click", () => {
    location.reload();
});

// random background
const colors = [["#a0ff61", "#83ff31"], ["#6abcff", "#249cff"], ["#ff6666", "#fc2626"], ["#f0fa64", "#f0ff20"]];
const randomColors = colors[Math.floor(Math.random() * colors.length)];
const body= document.querySelector("body");
body.style.background = `linear-gradient(to left, ${randomColors[0]}, ${randomColors[1]})`;


// connecting to api
fetch("https://api.adviceslip.com/advice")
    .then( (response) => {
        return response.json()
    })
    .then( (data) => {
        const advice = data.slip.advice;
        adviceSpan.innerHTML = advice;
    })
    .catch( (err) => {
        console.log("Something went wrong...");
    });