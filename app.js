//BG COLOR CHANGER
const body = document.querySelector('body')
const btn = document.getElementById('btn-change-color')
const colors = ['#8963F5', '#4BEBD8', '#F56398', '#637AF5', '#FAFAFA']

btn.addEventListener('click',function() {
    const colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
})

