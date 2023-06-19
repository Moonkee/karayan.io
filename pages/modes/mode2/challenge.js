let challenges = ["5 puff or pass", "5 puff nakatayo", "5 puff nakahiga", "10 puff nakatayo", "1 puff pwede kumuha ng isang pirasong ft", "5 puff pwede uminom lahat", "5 puff pwede kumuha ng isang pirasong ft lahat", "5 puff nakatayo habang nakataas isang paa", "Sa loob ng tshirt ibubuga tapos i hohot box sarili ", "5 puff pwede ipasa sa taong mapipili mo", "5 puff kayo ng taong napili mo", "reverse ikot", "nakakuha ka ng isang rare card (pwede kang magskip ng puff o pumuff ng kahit ilang gusto mo)"]
let challenge = document.getElementById('challenge') 
let spinBtn = document.getElementById('spin-btn')
const ulitanBtn = document.getElementById('ulitan-btn')

spinBtn.addEventListener('click', function() {
    
    let stop = setInterval(displayRandom, 50)
    let cnt = 0



    function displayRandom() {
        let randomChallenge = randomElementFromArray(challenges)
        cnt++
        console.log(cnt)
        displayRandomChallenge()
        function displayRandomChallenge(){
        challenge.textContent = randomChallenge
        }

        if (cnt === 12) {
            clearInterval(stop)
            spinBtn.setAttribute('style', 'display: none;')
            ulitanBtn.setAttribute('style', 'display: block;')
        }


    }
})

ulitanBtn.addEventListener('click', function() {
    challenge.textContent = "---------"
    ulitanBtn.setAttribute('style', 'display: none;')
    spinBtn.setAttribute('style', 'display: block;')
})


function randomElementFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }