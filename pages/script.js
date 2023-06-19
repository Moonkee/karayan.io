let username = "Admin1"
let password = "213546789"
let usernameInput = document.getElementById('username')
let passwordInput = document.getElementById('password')
let loginBtn = document.getElementById('login-btn')


loginBtn.addEventListener("click", function(event) {
    usernameValue = usernameInput.value 
    passwordValue = passwordInput.value

    if (usernameValue === username && passwordValue === password) {
        console.log('log in successful')
    } else {
        event.preventDefault()
        alert('wala kang account baliw admin lang pwede mag login')
    }
})
