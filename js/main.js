const heading = document.getElementById(`heading`);
const input = document.getElementById(`inputNum`);
const button = document.getElementById('button');
const response = document.querySelector('p');

let min = Math.ceil(Math.random()*10);
let max = Math.ceil(Math.random()*90);
let numberToGuess = Math.ceil(Math.random()*(max+min));
max += min;

// heading.style.color = inputColor;

response.textContent = `Guess the number I'm thinking of, idiot. It's somewhere between ${min} and ${min+max}.`;

button.addEventListener("click", () => {
    if (input.value == numberToGuess) {
        response.textContent = `That's right!`;
        heading.textContent = `SUCCESS`;
        heading.style.color = `orange`;
    } else if (input.value > numberToGuess) {
        response.textContent = `No you fool that's much too high.`;
    } else if (input.value < numberToGuess) {
        response.textContent = `Haha no that's too low.`;
    }
});