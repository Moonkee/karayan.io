


const slot1 = document.getElementById('slot1')
const slot2 = document.getElementById('slot2')
const puffs = document.getElementById('puffs')
const spinBtn = document.getElementById('spin-btn')
const reUlitBtn = document.getElementById('re-ulit-btn')
const ulitanBtn = document.getElementById('ulitan-btn')
let number1 = getRandomNumber()
let number2 = getRandomNumber()



spinBtn.addEventListener('click', function spin() {
    let spinning = setInterval(spin, 50)
    let timer = 0


    function spin() {
        displayRandomNumber()
        console.log(timer)
        timer++
        if(timer === 15) {
            clearInterval(spinning)
            reUlitBtn.setAttribute('style', 'display: block;')
            spinBtn.setAttribute('style', 'display: none;')
            ulitanBtn.setAttribute('style', 'display: block;')
        } 
    }
    
})

reUlitBtn.addEventListener('click', function() {
    let spinning = setInterval(spin, 50)
    let timer = 0


    function spin() {
        displayRandomNumber()
        console.log(timer)
        timer++
        if(timer === 15) {
            clearInterval(spinning)
            ulitanBtn.setAttribute('style', 'display: block;')
            spinBtn.setAttribute('style', 'display: none;')
            reUlitBtn.setAttribute('style', 'display: none;')
        } 
    }
})

ulitanBtn.addEventListener('click', function() {
    spinBtn.setAttribute('style', 'display: block;')
    reUlitBtn.setAttribute('style', 'display: none;')
    slot1.textContent = "-"
    slot2.textContent = "-"
    puffs.textContent = "-"
    ulitanBtn.setAttribute('style', 'display: none;')
})


function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function displayRandomNumber() {
    let number1 = getRandomNumber()
    let number2 = getRandomNumber()

    puffs.textContent = number1 + number2
    slot1.textContent = number1
    slot2.textContent = number2
}



