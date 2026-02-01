let email = document.querySelector(".email")
let password = document.querySelector(".password")
let loginBtn = document.querySelector(".loginbutton")
let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")
loginBtn.addEventListener("click" , function(e) {
e.preventDefault()
if(email.value === "" || password.value === ""){
alert("Please fill data")
}else{
if (getEmail && getEmail.trim() === email.value && getPassword && getPassword.trim() === password.value ) {
setTimeout( () =>{
window.location.href = "index.html"
} , 1000)
} else{
alert ("email or pass is incorrect")
}
}
})




