/*
 * cart.js
 *
 * This file handles all the core logic for the shopping cart.
 * It provides functions to add/remove items, manage quantities,
 * and calculate the total cost. It also includes functions to
 * save and load the cart data to/from the browser's local storage.
 *
 * NOTE: For this demo, the data is stored locally. In a real-world
 * application, this would be synchronized with a server-side database.
 */

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found with ID:', productId);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast('Product added to cart!');
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);

    saveCart();
    updateCartUI();
    showToast('Product removed from cart.');
}

// Function to clear the entire cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
    showToast('Cart has been cleared.');
}

// Function to update the quantity of a product in the cart
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity); // Ensure quantity is at least 1
    }

    saveCart();
    updateCartUI();
}

// Function to calculate the total price of all items in the cart
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to save the cart data to local storage
function saveCart() {
    try {
        localStorage.setItem('storymaticCart', JSON.stringify(cart));
    } catch (e) {
        console.error('Failed to save cart to local storage:', e);
    }
}

// Function to load cart data from local storage
function loadCart() {
    try {
        const storedCart = localStorage.getItem('storymaticCart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
    } catch (e) {
        console.error('Failed to load cart from local storage:', e);
    }
}
