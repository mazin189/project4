let registerBtn = document.querySelector(".registerbutton")
let firstName = document.querySelector(".firstname")
let lastName = document.querySelector(".lastname")
let email = document.querySelector(".email")
let password = document.querySelector(".password")
registerBtn.addEventListener("click" , function(e){
e.preventDefault()
if (firstName.value === "" || lastName.value === "" || email.value === "" || password.value === "") {
alert("Please fill the data")
} else {
localStorage.setItem("firstname" , firstName.value)
localStorage.setItem("lastname" , lastName.value)
localStorage.setItem("email" , email.value)
localStorage.setItem("password" , password.value)
alert("Account Created Succesfully!")
setTimeout( () => {
window.location.href = "login.html"
} , 1000)
}
})


