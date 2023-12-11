let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};


let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
};


let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".btn.add-to-cart");
    const cartItemsContainer = document.querySelector(".cart-items-container");
    const cartItems = cartItemsContainer.querySelector(".cart-items");
    const checkoutBtn = cartItemsContainer.querySelector(".btn.checkout-now");
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from reaching the body
  
        // Get the product details
        const box = this.closest(".box");
        const image = box.querySelector("img").src;
        const title = box.querySelector("h3").textContent;
  
        // Create a new cart item
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
  
        // Updated part: Set the fixed price for the cart item
        cartItem.innerHTML = `
          <span class="fas fa-times remove-item"></span>
          <img src="${image}" alt="${title}" />
          <div class="content">
            <h3>${title}</h3>
            <div class="price">$15.99/-</div>
          </div>
        `;
  
        // Add the new item to the cart
        cartItems.appendChild(cartItem);
  
        // Show the cart
        cartItemsContainer.classList.add("active");
  
        // Enable the remove item functionality
        const removeButtons = cartItems.querySelectorAll(".remove-item");
        removeButtons.forEach((removeButton) => {
          removeButton.addEventListener("click", function () {
            const itemToRemove = this.closest(".cart-item");
            cartItems.removeChild(itemToRemove);
  
            // If cart is empty, hide the cart
            if (cartItems.children.length === 0) {
              cartItemsContainer.classList.remove("active");
            }
          });
        });
      });
    });
  
    // Checkout button functionality
    checkoutBtn.addEventListener("click", function () {
      // Add your checkout logic here
      alert("Checkout functionality will be implemented here.");
    });
  
    // Event listener to hide cart on body click or scroll
    document.addEventListener("click", function (event) {
      if (!event.target.closest('.cart-items-container')) {
        cartItemsContainer.classList.remove("active");
      }
    });
  
    // Event listener to toggle cart active class when scrolling inside it
    cartItems.addEventListener("scroll", function (event) {
      if (cartItems.scrollTop === 0 && cartItems.scrollHeight === cartItems.clientHeight) {
        // If scrolled to the top and not overflowing, hide the cart
        cartItemsContainer.classList.remove("active");
      } else {
        // If scrolling, toggle the cart active class
        cartItemsContainer.classList.toggle("active", cartItems.scrollTop > 0);
      }
    });
  });
  
  
