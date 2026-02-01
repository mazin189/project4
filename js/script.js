let allProducts = document.querySelector(".products")
let products = [
  {
    id: 1,
    title1: "Burger",
    title2: "Fast Food",
    title3: "Beef",
    price: "120",
    imageUrl: "images/burger.jpeg"
  },
  {
    id: 2,
    title1: "Pizza",
    title2: "Italian",
    title3: "Margherita",
    price: "180",
    imageUrl: "images/pizza.jpeg"
  },
  {
    id: 3,
    title1: "Seafood",
    title2: "Mediterranean",
    title3: "Grilled",
    price: "220",
    imageUrl: "images/seafood.jpg"
  },
  {
    id: 4,
    title1: "Pasta",
    title2: "Italian",
    title3: "Rotini",
    price: "95",
    imageUrl: "images/front-view-rotini-pasta-plate-fork-chopped-greens-bowl-cherry-tomatoes-dark-isolated-surface.jpg"
  },
  {
    id: 5,
    title1: "Fried Chicken",
    title2: "Fast Food",
    title3: "Crispy",
    price: "150",
    imageUrl: "images/fried chicken.webp"
  },
  {
    id: 6,
    title1: "Salad",
    title2: "Healthy",
    title3: "Green",
    price: "75",
    imageUrl: "images/salade.jpg"
  },
  {
    id: 7,
    title1: "Crepe",
    title2: "Dessert",
    title3: "Chocolate",
    price: "65",
    imageUrl: "images/crepe-with-chocolade-strawberry.jpg"
  },
  {
    id: 8,
    title1: "Cocktail",
    title2: "Beverage",
    title3: "Fruit ",
    price: "85",
    imageUrl: "images/three-glasses-tropical-fruit-cocktails.jpg"
  },
  {
    id: 9,
    title1: "French Fries",
    title2: "Fast Food",
    title3: "Crispy Fries",
    price: "45",
    imageUrl: "images/fries.jpg"
  }
]















function drawItems(){
let y = products.map(item => {
return `<div class="threedivs rounded-3">
<img src="${item.imageUrl}" alt="#" class="w-100" style="height: 60%;">
<h5 class="mt-2" style="color: #00695c;">${item.title1}</h5>
<p>Price: $${item.price}</p>
<p>Category: ${item.title2}</p>
<i class="fas fa-heart me-2"></i>
<button class="btn text-white addcart-button" onClick = "addToCart(${item.id})">Add to Cart</button>
</div>`
})
allProducts.innerHTML = y.join("")
}
drawItems()










let number = document.querySelector(".number")
let cartsProductsDiv = document.querySelector(".carts-products div")
let addedItem = JSON.parse(localStorage.getItem("ProductsInCart")) || []
addedItem.forEach(item=> {
cartsProductsDiv.innerHTML += 
`<div class="cart-item-${item.id} mb-2" style="width: 175px; height: 113px; border: 1px solid grey; border-radius: 10px; padding-top: 3px; background-color: rgba(128, 128, 128, 0.1);">
<div class="d-flex justify-content-evenly">
<p class ="p-num" style="margin-top: 6px">${item.title1}<br>${item.title3}</p>
<p class="mt-2">Price:<br>$${item.price}</p>
</div>
<div class="d-flex align-items-center ms-3"> 
<div class="rectangle-div minus-div">-</div> 
<span class="mx-2 minusplus-number">1</span> 
<div class="rectangle-div plus-div">+</div> 
</div>
</div>
`
})
number.innerHTML = addedItem.length











function addToCart(id){
let choosenItem = products.find(item => item.id == id)
let itemToRemove = document.querySelector(`.cart-item-${id}`)
if (itemToRemove){
itemToRemove.remove()
}else{
cartsProductsDiv.innerHTML += `
<div class="cart-item-${id} mb-2 parent" data-id="${id}" style="width: 175px; height: 113px; border: 1px solid grey; border-radius: 10px; padding-top: 3px; background-color: rgba(128, 128, 128, 0.1);">
<div class="d-flex justify-content-evenly">
<p class ="p-num" style="margin-top: 6px">${choosenItem.title1}<br>${choosenItem.title2}</p>
<p class="mt-2 price-divs">Price:<br>$${choosenItem.price}</p>
</div>
<div class="d-flex align-items-center ms-3"> 
<div class="rectangle-div minus-div">-</div> 
<span class="mx-2 minusplus-number">1</span> 
<div class="rectangle-div plus-div">+</div> 
</div>
</div>
`
}
let cartsProductsLength = document.querySelectorAll(".carts-products div .p-num")
number.innerHTML = cartsProductsLength.length
let exists = addedItem.find(item => item.id == id)
if (exists) {
addedItem = addedItem.filter(item => item.id != id)
}else{
addedItem.push(choosenItem)
}
localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem))
}






















let iconAndSpanDiv = document.querySelector(".icon-span-div")
let carts_products = document.querySelector(".carts-products")
iconAndSpanDiv.addEventListener("click" , function(){
if (cartsProductsDiv.innerHTML != ""){
if (carts_products.style.display === "block"){
carts_products.style.display = "none"
} else {
carts_products.style.display = "block"
}
}
})













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













let containers = document.querySelector(".containers")
let divs = document.querySelectorAll(".threedivs")
let inputsearch = document.querySelector(".inputsearch")
let searchtype = document.querySelector(".searchType")
inputsearch.addEventListener("keyup" , function(e){
  let value = e.target.value.toLowerCase().trim()
  let type = searchtype.value
  divs.forEach(item => {
    if (type === "name"){
   let productname = item.querySelector("h5").innerText.toLowerCase()
   item.style.display = productname.includes(value) ? "block" : "none"
    }else if(type === "category"){
    let categoryname = item.querySelector("p:nth-of-type(2)").innerText.toLowerCase()
    item.style.display = categoryname.includes(value) ? "block" : "none"
    }
  })
})











let favorites = JSON.parse(localStorage.getItem("favorites")) || []


let cartButton = document.querySelectorAll(".addcart-button")
let hearts = document.querySelectorAll(".fa-heart")
let savedCart = localStorage.getItem("savedCart") ? JSON.parse(localStorage.getItem("savedCart")) : []
cartButton.forEach(button => {
button.addEventListener("click" , function(){
if (button.innerText === "Add to Cart" && localStorage.getItem("firstname")){
button.innerText = "Remove from Cart"
button.classList.remove("addcart-button")
button.classList.add("bg-danger")
}else if( button.innerText === "Remove from Cart" && localStorage.getItem("firstname")){
button.innerText = "Add to Cart"
button.classList.remove("bg-danger")
button.classList.add("addcart-button")
} else{
window.location.href = "login.html"
}
localStorage.setItem("savedCart" , JSON.stringify(savedCart) )
})
})
hearts.forEach(heart => {
let parent = heart.closest(".threedivs")
let productId = products.find(item => item.title1 == parent.querySelector("h5").innerText).id
if(favorites.includes(productId)){
heart.style.color = "red"
}
heart.addEventListener("click" , function(){
if(!localStorage.getItem("firstname")){
heart.style.color = "black"
window.location.href = "login.html"
return
}
if(heart.style.color == "red"){
heart.style.color = "black"
}else{
heart.style.color = "red"
}
if(favorites.includes(productId)){
favorites = favorites.filter(id => id != productId)
}else{
favorites.push(productId)
}
localStorage.setItem("favorites" , JSON.stringify(favorites))
})
})











document.addEventListener("click" , function(e){
  if(e.target.classList.contains("plus-div")) {
    let parent = e.target.closest(".parent")
    let productId = parent.getAttribute("data-id")
    let quantityNumber = parent.querySelector(".minusplus-number")
    let priceDiv = parent.querySelector(".price-divs")
    let quantity = parseInt(quantityNumber.innerText)
  let product = addedItem.find(item => item.id == productId)
    let basicPrice = product.price
  quantity++
  quantityNumber.innerText = quantity
  priceDiv.innerHTML = `Price:<br>$${basicPrice * quantity}`
  number.innerText = parseInt(number.innerText) + 1
  if(product)
    product.quantity = quantity
  localStorage.setItem("ProductsInCart", JSON.stringify(addedItem))
}
  if(e.target.classList.contains("minus-div")){
    let parent = e.target.closest(".parent")
    let productId = parent.getAttribute("data-id")
    let quantityNumber = parent.querySelector(".minusplus-number")
    let priceDiv = parent.querySelector(".price-divs")
    let quantity = parseInt(quantityNumber.innerText)
   let product = addedItem.find(item => item.id == productId)
    let basicPrice = product.price
  quantity--
  quantityNumber.innerText = quantity
  priceDiv.innerHTML = `Price:<br>$${basicPrice * quantity}`
  number.innerText = parseInt(number.innerText) - 1
  if(product)
    product.quantity = quantity
  localStorage.setItem("ProductsInCart", JSON.stringify(addedItem))
  if (quantity < 1){
  parent.remove()
  cartButton.forEach(button=>{
   if (button.getAttribute("onClick").includes(`addToCart(${productId})`)) {
      button.innerText = "Add to Cart";
      button.classList.remove("bg-danger");
      button.classList.add("addcart-button");
    }
  })
    if(cartsProductsDiv.innerHTML.trim() === ""){
     document.querySelector(".carts-products").style.display = "none"
    }
  addedItem = addedItem.filter(item => item.id != productId)
  localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
  }
  }

})