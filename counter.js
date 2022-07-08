//COUNTER

let count = 0;

const counter = document.getElementById('counter-num')
// const increase = document.getElementById('plus-btn')
// const decrease = document.getElementById('minus-btn')
const restart = document.getElementById('restart-btn')

function increment() {
    count += 1
    counter.textContent = count;
}

function decrement() {
    count -= 1
    counter.textContent = count;
}

function restartNum(){
    count = 0
    counter.textContent = count;
}