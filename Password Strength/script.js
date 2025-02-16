var pass = document.getElementById("password")
var message = document.getElementById("message")
var strength = document.getElementById("strength")

pass.addEventListener('input',()=>{
    if(pass.value.length > 0){
        message.style.display = "block";
    }
    else{
        message.style.display = "none"
    }
    if(pass.value.length < 4){
        strength.innerHTML = "Weak"
        pass.style.borderColor = "red"
        message.style.color = "red"
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        strength.innerHTML = "Medium"
        pass.style.borderColor = "orange"
        message.style.color = "orange"
    }
    else if(pass.value.length >= 8){
        strength.innerHTML = "Strong"
        pass.style.borderColor = "green"
        message.style.color = "green"
    }
})