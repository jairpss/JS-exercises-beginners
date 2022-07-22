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

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // when clicked any button num btn except delete 
        if (!btn.id.match('delete-btn')) {
            // To display value on btn press
            calcScreenValue.push(btn.value)
            currentInput.innerHTML = calcScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('btn-num')) {

                answer.innerHTML = eval(calcScreenValue.join(''));

            }
        }

        // When delete button is clicked
        if (btn.id.match('delete-btn')) {
            calcScreenValue.pop();
            currentInput.innerHTML = calcScreenValue.join('');
            answer.innerHTML = eval(calcScreenValue.join(''));
        }

        // When equals btn is clicked
        if (btn.id.match('equals')) {
            currentInput.className = 'answer-calculator';
            answer.className = 'current-input';
            answer.style.color = "2F3E46";
        }

        // To prevent undefined error in screen
        if (typeof eval(calcScreenValue.join('')) == 'undefined') {
            answer.innerHTML = 0
        }

    })
})