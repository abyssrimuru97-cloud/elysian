// ===== MENU =====

const menu = [
{
name:"Grilled Steak",
price:45,
category:"Main Course",
image:"steak.jpg"
},
{
name:"Chicken Pasta",
price:28,
category:"Main Course",
image:"pasta.jpg"
},
{
name:"Caesar Salad",
price:15,
category:"Starter",
image:"salad.jpg"
},
{
name:"Chocolate Cake",
price:12,
category:"Dessert",
image:"cake.jpg"
},
{
name:"Fresh Juice",
price:8,
category:"Drinks",
image:"juice.jpg"
},
{
name:"Burger Deluxe",
price:20,
category:"Main Course",
image:"burger.jpg"
}
];

const menuContainer=document.querySelector(".menu-container");
const searchInput=document.getElementById("searchInput");

let cart=[];

function displayMenu(items){

menuContainer.innerHTML="";

items.forEach((food,index)=>{

menuContainer.innerHTML+=`

<div class="card">

<img src="${food.image}" alt="${food.name}">

<div class="card-content">

<h3>${food.name}</h3>

<p>${food.category}</p>

<div class="price">$${food.price}</div>

<button onclick="addToCart(${index})">

Add To Cart

</button>

</div>

</div>

`;

});

}

displayMenu(menu);

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

const filtered=menu.filter(item=>

item.name.toLowerCase().includes(value)

);

displayMenu(filtered);

});

// ===== CART =====

const cartBtn=document.getElementById("cartBtn");
const closeCart=document.getElementById("closeCart");
const cartBox=document.querySelector(".cart");
const cartItems=document.getElementById("cartItems");
const total=document.getElementById("total");

cartBtn.onclick=()=>{

cartBox.classList.add("active");

}

closeCart.onclick=()=>{

cartBox.classList.remove("active");

}

function addToCart(index){

cart.push(menu[index]);

renderCart();

}

function renderCart(){

cartItems.innerHTML="";

let sum=0;

cart.forEach((item,i)=>{

sum+=item.price;

cartItems.innerHTML+=`

<div class="cart-item">

<div>

<h4>${item.name}</h4>

<p>$${item.price}</p>

</div>

<button onclick="removeItem(${i})">

❌

</button>

</div>

`;

});

total.innerHTML="$"+sum;

}

function removeItem(index){

cart.splice(index,1);

renderCart();

}
// ===== CHECKOUT =====

const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutSection = document.getElementById("checkout");
const checkoutForm = document.getElementById("checkoutForm");
const successPopup = document.getElementById("successPopup");
const continueBtn = document.getElementById("continueBtn");

checkoutBtn.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    cartBox.classList.remove("active");

    checkoutSection.classList.remove("hidden");

    checkoutSection.scrollIntoView({
        behavior: "smooth"
    });

});

// ===== PAYMENT =====

checkoutForm.addEventListener("submit", function(e){

    e.preventDefault();

    checkoutSection.classList.add("hidden");

    successPopup.classList.remove("hidden");

});

// ===== CONTINUE =====

continueBtn.addEventListener("click", function(){

    successPopup.classList.add("hidden");

    cart = [];

    renderCart();

    checkoutForm.reset();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===== RESERVATION =====

const reservationForm = document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("🎉 Table Reserved Successfully!");

    reservationForm.reset();

});

// ===== CATEGORY BUTTONS =====

const buttons = document.querySelectorAll(".category-buttons button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const category=button.textContent;

if(category==="All"){

displayMenu(menu);

return;

}

const filtered=menu.filter(item=>item.category===category);

displayMenu(filtered);

});

});

// ===== PAGE LOAD =====

window.onload=function(){

renderCart();

successPopup.classList.add("hidden");

checkoutSection.classList.add("hidden");

};