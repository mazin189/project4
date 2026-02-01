let addedItem = JSON.parse(localStorage.getItem("ProductsInCart")) || [];
let allProducts = document.querySelector(".products")
let ProductsInCart = localStorage.getItem("ProductsInCart")
if (ProductsInCart){
let item = JSON.parse(ProductsInCart)
drawCartProducts(item)
}



let number = document.querySelector(".number")
let ProductInCart = JSON.parse(localStorage.getItem("ProductsInCart")) || []
let quantityCount = ProductInCart.reduce((acc , product) => acc + (product.quantity || 1) , 0)
number.innerText = quantityCount






let products = [
  {
    id: 1,
    title1: "Beef Burger",
    title2: "Fast Food",
    price: "120",
    imageUrl: "images/burger.jpeg"
  },
  {
    id: 2,
    title1: "Margherita Pizza",
    title2: "Italian",
    price: "180",
    imageUrl: "images/pizza.jpeg"
  },
  {
    id: 3,
    title1: "Grilled Seafood",
    title2: "Mediterranean",
    price: "220",
    imageUrl: "images/seafood.jpg"
  },
  {
    id: 4,
    title1: "Rotini Pasta",
    title2: "Italian",
    price: "95",
    imageUrl: "images/front-view-rotini-pasta-plate-fork-chopped-greens-bowl-cherry-tomatoes-dark-isolated-surface.jpg"
  },
  {
    id: 5,
    title1: "Fried Chicken",
    title2: "Fast Food",
    price: "150",
    imageUrl: "images/fried chicken.webp"
  },
  {
    id: 6,
    title1: "Green Salad",
    title2: "Healthy",
    price: "75",
    imageUrl: "images/salade.jpg"
  },
  {
    id: 7,
    title1: "Chocolate Crepe",
    title2: "Dessert",
    price: "65",
    imageUrl: "images/crepe-with-chocolade-strawberry.jpg"
  },
  {
    id: 8,
    title1: "Fruit Cocktail",
    title2: "Beverage",
    price: "85",
    imageUrl: "images/three-glasses-tropical-fruit-cocktails.jpg"
  },
  {
    id: 9,
    title1: "French Fries",
    title2: "Fast Food",
    price: "45",
    imageUrl: "images/fries.jpg"
  }
]











function updateTotalPrice(){
let total = addedItem.reduce((acc , product) => acc + (product.quantity || 1) * product.price , 0)
let totalDiv = document.querySelector(".total-price")
if(!totalDiv){
allProducts.innerHTML += `
<div class="w-100 total-price" style="text-align: center;">
<h2>Total Price: $${total}</h2>
<hr>
</div>`
}else{
totalDiv.innerHTML = `
<h2>Total Price: $${total}</h2>
<hr>
`
}
if(total == 0){
totalDiv.remove()
}
}

























function drawCartProducts(products) {
let y = products.map(item => {
return `<div class="div-cartsproducts parent" data-id="${item.id}"> 
<img src="${item.imageUrl}" alt="#" class="rounded-2 ms-3"> 
<div class="ms-3"> 
<p class="fw-semibold fs-5" style="color: #00695c;">${item.title1}</p> 
<p>Category: ${item.title2}</p> 
<p class="price-divs">Price: $${item.quantity * item.price || item.price}</p>
<div class="d-flex align-items-center"> 
<div class="rectangle-div minus-div">-</div> 
<span class="mx-2 minusplus-number">${item.quantity || 1}</span> 
<div class="rectangle-div plus-div">+</div> 
<button class="btn text-white bg-danger addcart-button" style="margin-left: 42px;" onClick = "RemovefromCart(${item.id})">Remove from Cart</button> 
</div> 
</div> 
</div> 
`
})
allProducts.innerHTML = y.join("")
updateTotalPrice()
}











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
  priceDiv.innerHTML = `Price: $${basicPrice * quantity}`
  if(product)
    product.quantity = quantity
  localStorage.setItem("ProductsInCart", JSON.stringify(addedItem))
  updateTotalPrice()
  let quantityCount = addedItem.reduce((acc , product) => acc + (product.quantity || 1) , 0)
  number.innerText = quantityCount
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
  priceDiv.innerHTML = `Price: $${basicPrice * quantity}`
  if(product)
    product.quantity = quantity
  if (quantity < 1){
  addedItem = addedItem.filter(item => item.id != productId)
  parent.remove()
  }
  localStorage.setItem("ProductsInCart", JSON.stringify(addedItem))
  updateTotalPrice()
   let quantityCount = addedItem.reduce((acc , product) => acc + (product.quantity || 1) , 0)
  number.innerText = quantityCount
  }
})














function RemovefromCart(id){
let cart = JSON.parse(localStorage.getItem("ProductsInCart"))
cart = cart.filter(item => item.id != id)
localStorage.setItem("ProductsInCart" , JSON.stringify(cart))
addedItem = cart
let productDiv = document.querySelector(`.parent[data-id="${id}"]`)
if(productDiv){
productDiv.remove()
}
let quantityCount = cart.reduce((acc , product) => acc + (product.quantity || 1) , 0)
number.innerText = quantityCount
updateTotalPrice()
}


















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













let container = document.querySelector(".fav-container")
let favorites = JSON.parse(localStorage.getItem("favorites")) || []
favorites.forEach(favid => {
let product = products.find(item=> item.id == favid)
if(product){
container.innerHTML += `
<div class="card d-inline-block ms-2" style="width: 19rem;">
<img src="${product.imageUrl}" class="card-img-top" alt="#" style="height: 230px;">
<div class="card-body text-center">
<h5 class="card-title pt-1" style="color: #00695c;">${product.title1}</h5>
<p class="card-text pt-1">Category: ${product.title2}</p>
<i style="color: red;" class="fas fa-heart me-2 pt-1" data-id = "${product.id}"></i>
</div>
</div>
`
}
})












let hearts = document.querySelectorAll(".fav-container .fa-heart")
hearts.forEach(heart=>{
heart.addEventListener("click" , function(){
let productId = parseInt(heart.getAttribute("data-id"))
favorites = favorites.filter(id => id != productId)
localStorage.setItem("favorites" , JSON.stringify(favorites))
heart.closest(".card").remove()
})
})