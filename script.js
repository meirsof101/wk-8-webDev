// Okay, let's add the JavaScript (script.js) to handle the mobile navigation menu toggle and the basic "Add to Cart" functionality with a cart count.

javascript
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById("navLinks");
    const showMenuIcon = document.querySelector(".fa-bars");
    const hideMenuIcon = document.querySelector(".fa-times");
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    const cartCountSpan = document.getElementById("cart-count");
    const quantityInputs = document.querySelectorAll(".qty-input");
    const qtyPlusButtons = document.querySelectorAll(".qty-btn.plus");
    const qtyMinusButtons = document.querySelectorAll(".qty-btn.minus");
    const productCards = document.querySelectorAll(".product-card");
    const filterButtons = document.querySelectorAll(".filter-btn");

    let cartItemCount = 0;

    // Function to show the mobile menu
  
    function showMenu() {
        navLinks.classList.add("active");
    }

    // Function to hide the mobile menu
    function hideMenu() {
        navLinks.classList.remove("active");
    }

    // Event listeners for mobile menu toggle
    if (showMenuIcon) {
        showMenuIcon.addEventListener('click', showMenu);
    }

    if (hideMenuIcon) {
        hideMenuIcon.addEventListener('click', hideMenu);
    }

    // Function to update the cart count
    function updateCartCount() {
        cartCountSpan.textContent = cartItemCount;
    }

    // Event listener for "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItemCount++;
            updateCartCount();
            // You can add more sophisticated cart logic here, like storing items
            // in an array or updating a cart display.
            alert("Added to cart!"); // Basic feedback for now
        });
    });

    // Event listeners for quantity increment buttons
    qtyPlusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const inputField = button.previousElementSibling;
            inputField.value = parseInt(inputField.value) + 1;
        });
    });

    // Event listeners for quantity decrement buttons
    qtyMinusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const inputField = button.nextElementSibling;
            const currentValue = parseInt(inputField.value);
            if (currentValue > 1) {
                inputField.value = currentValue - 1;
            }
        });
    });

    // Product Filtering Logic
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.dataset.filter;

            // Update active button style
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            productCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// <!-- JavaScript for Seedlings Filter -->
  document.addEventListener('DOMContentLoaded', function() {
    // Seedlings filtering functionality
    const seedlingsFilterBtns = document.querySelectorAll('.seedlings-filter .filter-btn');
    const seedlingsCards = document.querySelectorAll('.seedlings-container .product-card');
    
    seedlingsFilterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        seedlingsFilterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        seedlingsCards.forEach(card => {
          if (filterValue === 'all-seedlings' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
    
    // Add quantity and add-to-cart functionality for seedlings
    const seedlingMinusBtns = document.querySelectorAll('.seedlings-container .minus');
    const seedlingPlusBtns = document.querySelectorAll('.seedlings-container .plus');
    const seedlingQtyInputs = document.querySelectorAll('.seedlings-container .qty-input');
    
    seedlingMinusBtns.forEach((btn, index) => {
      btn.addEventListener('click', function() {
        let value = parseInt(seedlingQtyInputs[index].value);
        if (value > 1) {
          seedlingQtyInputs[index].value = value - 1;
        }
      });
    });
    
    seedlingPlusBtns.forEach((btn, index) => {
      btn.addEventListener('click', function() {
        let value = parseInt(seedlingQtyInputs[index].value);
        seedlingQtyInputs[index].value = value + 1;
      });
    });
    
    // Connect seedling add-to-cart buttons to main cart functionality
    const seedlingAddToCartBtns = document.querySelectorAll('.seedlings-container .add-to-cart-btn');
    
    seedlingAddToCartBtns.forEach((btn) => {
      btn.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('KSh ', ''));
        const productImage = productCard.querySelector('.product-image img').src;
        const productQuantity = parseInt(productCard.querySelector('.qty-input').value);
        
        // Check if product already exists in cart
        const existingProductIndex = cart.findIndex(item => item.name === productName);
        
        if (existingProductIndex > -1) {
          // Update quantity if product already in cart
          cart[existingProductIndex].quantity += productQuantity;
        } else {
          // Add new product to cart
          cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: productQuantity
          });
        }
        
        // Update cart UI
        updateCartUI();
        
        // Show confirmation message
        showNotification(`${productName} added to cart!`);
      });
    });
  });

// *Explanation of the JavaScript Code:*

// 1.  **DOMContentLoaded Listener:** Ensures that the JavaScript code runs only after the entire HTML document has been loaded.
// 2.  *DOM Element Selection:* Selects the necessary HTML elements using their IDs and classes (navigation links, menu icons, "Add to Cart" buttons, cart count span, quantity buttons, product cards, and filter buttons).
// 3.  *Mobile Menu Toggle:*
//     * showMenu(): Adds the show-menu class to the navLinks element, which (as per your CSS) will slide the mobile menu into view.
//     * hideMenu(): Removes the show-menu class to hide the mobile menu.
//     * Event listeners are added to the hamburger (fa-bars) and close (fa-times) icons to call these functions on click.
// 4.  *Cart Count:*
//     * cartItemCount: A variable to keep track of the number of items added to the cart (basic implementation).
//     * updateCartCount(): Updates the text content of the cart-count span in the navigation.
//     * An event listener is added to each "Add to Cart" button. When clicked, it increments cartItemCount and calls updateCartCount(). *Note:* This is a very basic implementation. A real e-commerce site would need more complex logic to track individual items and quantities.
// 5.  *Quantity Selector:*
//     * Event listeners are added to the "+" and "-" buttons within each quantity selector.
//     * When the "+" button is clicked, it increments the value of the corresponding quantity input field.
//     * When the "-" button is clicked, it decrements the value (but doesn't go below 1).
// 6.  *Product Filtering:*
//     * Event listeners are added to each filter button.
//     * When a filter button is clicked:
//         * It gets the data-filter attribute value (e.g., "dairy", "poultry", "all").
//         * It updates the styling of the active filter button.
//         * It iterates through each product card. If the data-category attribute of the product card matches the filterValue (or if filterValue is "all"), the product card is shown (display: 'block'). Otherwise, it's hidden (display: 'none').

// *How to Use This:*

// 1.  **Save this code as script.js** in the same directory as your index.html file.
// 2.  **Make sure the src attribute in your <script> tag in index.html points to this file:**
//     html
//     <script src="script.js"></script>
//     </body>
//     </html>
    

// Now, when you open your index.html in a browser:

// * The hamburger menu icon in the navigation should toggle the mobile menu on smaller screens.
// * Clicking the "Add to Cart" buttons will increment the number displayed in the cart icon (with a basic alert for now).
// * Clicking the "+" and "-" buttons in the quantity selectors will update the quantity input fields.
// * Clicking the filter buttons ("Dairy", "Poultry", "Crops", "Honey") will show only the products belonging to that category. Clicking "All Products" will show all products.

// This adds the basic interactivity you requested. Remember that for a real e-commerce site, you would need to implement more advanced features like a proper shopping cart, storing cart data, handling checkout, etc. Let me know if you have any further questions!
// Citations: [[1]](https://github.com/VIVEK7755/vivek7755.github.io)
