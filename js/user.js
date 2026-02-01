let links = document.querySelector(".links")
let userInfo = document.querySelector(".userinfo")
let userData = document.querySelector(".userdata")
if (localStorage.getItem("firstname")){
links.classList.remove("d-flex")
links.classList.add("d-none")
userInfo.classList.remove("d-none")
userInfo.classList.add("d-flex")
userData.innerHTML = localStorage.getItem("firstname")
}











let logoutButton = document.querySelector(".logout-button")
logoutButton.addEventListener("click", function(e) {
  e.preventDefault()
  localStorage.removeItem("firstname")
  userInfo.classList.remove("d-flex")
  userInfo.classList.add("d-none")
  links.classList.remove("d-none")
  links.classList.add("d-flex")
})