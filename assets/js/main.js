/*
 * main.js
 *
 * This is the main JavaScript file that orchestrates the entire website.
 * It handles DOM manipulation, event listeners, user authentication (for demo),
 * and the overall UI/UX. It relies on data from `data.js` and cart logic
 * from `cart.js`.
 */

// ======================================
// Global DOM Elements
// ======================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const showLoginBtn = document.getElementById('showLogin');
const loginModal = document.getElementById('loginModal');
const closeLoginModalBtn = document.getElementById('closeLoginModal');
const showRegisterBtn = document.getElementById('showRegister');
const registerModal = document.getElementById('registerModal');
const closeRegisterModalBtn = document.getElementById('closeRegisterModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginEmailInput = document.getElementById('loginEmail');
const loginPasswordInput = document.getElementById('loginPassword');
const registerEmailInput = document.getElementById('registerEmail');
const registerPasswordInput = document.getElementById('registerPassword');
const productsGrid = document.getElementById('productsGrid');
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeCartModal = document.getElementById('closeCartModal');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartCountEl = document.getElementById('cartCount');
const toastEl = document.getElementById('toast');
const toastMessageEl = document.querySelector('.toast-message');
const loadingOverlay = document.getElementById('loadingOverlay');

// ======================================
// Utility Functions
// ======================================

// Function to show a toast notification
function showToast(message) {
    toastMessageEl.textContent = message;
    toastEl.classList.add('show');
    setTimeout(() => {
        hideToast();
    }, 3000);
}

// Function to hide a toast notification
function hideToast() {
    toastEl.classList.remove('show');
}

// Function to show the loading overlay
function showLoading() {
    loadingOverlay.style.display = 'flex';
}

// Function to hide the loading overlay
function hideLoading() {
    loadingOverlay.style.display = 'none';
}

// ======================================
// UI Rendering Functions
// ======================================

// Render the product cards on the page
function renderProducts() {
    productsGrid.innerHTML = ''; // Clear existing content
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">€${product.price.toFixed(2)}</span>
            <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Update the cart UI with current items and total
function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-subtle-text">Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p class="price">€${item.price.toFixed(2)}</p>
                    <div class="item-actions">
                        <button class="btn btn-sm btn-outline" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-outline" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="btn btn-remove" onclick="removeFromCart('${item.id}')">&times;</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });
    }

    cartTotalElement.textContent = `€${total.toFixed(2)}`;
    cartCountEl.textContent = cart.reduce((count, item) => count + item.quantity, 0);
}

// ======================================
// Event Handlers
// ======================================

// Handle mobile navigation toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Handle modal visibility
function showModal(modal) {
    document.body.classList.add('modal-open');
    modal.style.display = 'flex';
}

function hideModal(modal) {
    document.body.classList.remove('modal-open');
    modal.style.display = 'none';
}

showLoginBtn.addEventListener('click', () => {
    hideModal(registerModal);
    showModal(loginModal);
});

closeLoginModalBtn.addEventListener('click', () => {
    hideModal(loginModal);
});

showRegisterBtn.addEventListener('click', () => {
    hideModal(loginModal);
    showModal(registerModal);
});

closeRegisterModalBtn.addEventListener('click', () => {
    hideModal(registerModal);
});

cartButton.addEventListener('click', () => {
    showModal(cartModal);
});

closeCartModal.addEventListener('click', () => {
    hideModal(cartModal);
});

// Handle form submissions (demo)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;
    showLoading();

    // Simulate API call
    setTimeout(() => {
        hideLoading();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            hideModal(loginModal);
            showToast(`Welcome back, ${user.name}!`);
        } else {
            showToast('Invalid email or password.', 'error');
        }
    }, 1500);
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoading();
    // Simulate API call
    setTimeout(() => {
        hideLoading();
        // In a real app, this would create a new user account
        hideModal(registerModal);
        showToast('Registration successful! Please log in.');
    }, 1500);
});


// Add event listeners for "add to cart" buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = e.target.dataset.productId;
        addToCart(productId);
    }
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your purchase! This is a demo. Your checkout process would be handled here.');
        clearCart();
        hideModal(cartModal);
    } else {
        alert('Your cart is empty. Please add items to your cart before checking out.');
    }
});

// Initial function calls when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    updateCartUI();
});

