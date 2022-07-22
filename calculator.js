const currentInput = document.getElementById('current-input')
const answer = document.getElementById('answer-calculator')

const buttons = document.querySelectorAll('button')
const clearBtn = document.getElementById('clear-btn')
const deleteBtn = document.getElementById('delete-btn')
const equalBtn = document.getElementById('equals')

//Calculator display
let calcScreenValue = []

//clear btn
clearBtn.addEventListener("click", () => {
    console.log("clear")
    calcScreenValue = [''];
    answer.innerHTML = 0;
    currentInput.className = 'current-input'
    answer.className = 'answer-calculator';
    answer.style.color = "#2F3E46";
})