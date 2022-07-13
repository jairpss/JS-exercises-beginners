const txtArea = document.getElementById('txt-area-counter')
const count = document.getElementById('counter')
const btnClear = document.getElementById('clear-btn')

txtArea.onkeyup = function updateCounter() {
    let str = txtArea.value.length
    count.innerHTML = str + ' characters'
}

btnClear.onclick = function(){
    txtArea.value = ''
    let str = txtArea.value.length
    count.innerHTML = str + ' characters'
}