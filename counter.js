//COUNTER

let count = 0;

const counter = document.getElementById('counter-num')
const btnIncrease = document.getElementById('plus-btn')
const btnDecrease = document.getElementById('minus-btn')
const restart = document.getElementById('restart-btn')

btnIncrease.onclick = function increment() {
    count += 1
    counter.textContent = count;
}

btnDecrease.onclick = function decrement() {
    count -= 1
    counter.textContent = count;
}   

restart.onclick = function restartNum(){
    count = 0
    counter.textContent = count;
}