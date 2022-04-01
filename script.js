var pass = document.getElementById("pwd")
var passC = document.getElementById("Cpwd")
var msg = document.getElementById("wrong")

function validatePassword () {
  if(pass.value != passC.value) {
    return false
  } else {
    return true
  }
}

function updatePassword () {

    if(validatePassword()) {
      msg.textContent = ""
      pass.classList.remove('error')
      passC.classList.remove('error')

    } else {
      msg.textContent = "* Passwords do not match"
      pass.classList.add('error')
      passC.classList.add('error')
    }
}

passC.addEventListener("input", function(e){
  if (validatePassword()){
    passC.setCustomValidity("")
  } else {
    passC.setCustomValidity("Passwords must match.")
  }
})

document.body.onkeyup = updatePassword

updatePassword()

