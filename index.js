
    // Menu data with enhanced properties
    const menuItems = [
        // Main Course
        { id: 0, name: "Mutton", price: 380, image: "mutten1.jpg", category: "main", type: "non-veg", rating: 4.9, prepTime: 20, desc: "Creamy and spiced mutton" },
        { id: 1, name: "Butter Chicken", price: 320, image: "kari chicken.jpg", category: "main", type: "non-veg", rating: 4.7, prepTime: 20, desc: "Creamy spiced chicken curry" },
        { id: 2, name: "Chicken Biryani", price: 280, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", category: "main", type: "non-veg", rating: 4.8, prepTime: 25, desc: "Fragrant rice with tender chicken" },
        { id: 3, name: "Paneer Tikka Masala", price: 260, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", category: "main", type: "veg", rating: 4.5, prepTime: 18, desc: "Grilled cottage cheese in rich gravy" },
        { id: 4, name: "Dal Makhani", price: 220, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", category: "main", type: "veg", rating: 4.6, prepTime: 15, desc: "Creamy black lentils slow-cooked" },
        { id: 5, name: "Garlic Naan", price: 60, image: "garlic naan.jpg", category: "main", type: "veg", rating: 4.4, prepTime: 10, desc: "Buttery garlic flatbread" },
        { id: 50, name: "Paneer", price: 199, image: "paneer.jpg", category: "main", type: "veg", rating: 4.6, prepTime: 20, desc: "spicy paneer with curry" },
        { id: 51, name: "Paneer Roll", price: 80, image: "paneer roll.jpg", category: "main", type: "veg", rating: 4.5, prepTime: 10, desc: "a roll with paneer and vegitables" },

        // Appetizers
        { id: 6, name: "Vegetable Samosa", price: 120, image: "samose.jpg", category: "appetizer", type: "veg", rating: 4.3, prepTime: 12, desc: "Crispy pastry with spiced potatoes" },
        { id: 7, name: "Chicken Tikka", price: 250, image: "chicken takka.jpg", category: "appetizer", type: "non-veg", rating: 4.7, prepTime: 15, desc: "Tandoori grilled chicken chunks" },
        { id: 8, name: "Paneer Pakora", price: 180, image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", category: "appetizer", type: "veg", rating: 4.4, prepTime: 10, desc: "Cottage cheese fritters" },
        { id: 9, name: "Chilli Chicken", price: 280, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", category: "appetizer", type: "non-veg", rating: 4.6, prepTime: 18, desc: "Spicy Indo-Chinese chicken" },
        { id: 90, name: "Egg curry", price: 280, image: "egg curry.jpg", category: "appetizer", type: "non-veg", rating: 4.6, prepTime: 18, desc: "Spicy Indian egg curry" },

        // Drinks
        { id: 10, name: "Mango Lassi", price: 120, image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", category: "drinks", type: "veg", rating: 4.8, prepTime: 5, desc: "Refreshing yogurt mango drink" },
        { id: 11, name: "Masala Chai", price: 80, image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", category: "drinks", type: "veg", rating: 4.9, prepTime: 7, desc: "Spiced Indian tea" },
        { id: 12, name: "Fresh Lime Soda", price: 90, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", category: "drinks", type: "veg", rating: 4.5, prepTime: 3, desc: "Tangy soda with lime and mint" },
        { id: 13, name: "Virgin Mojito", price: 130, image: "mojito.jpg", category: "drinks", type: "veg", rating: 4.6, prepTime: 6, desc: "Minty lime mocktail" },

        // Desserts
        { id: 14, name: "Gulab Jamun", price: 140, image: "gulab jamun.jpg", category: "dessert", type: "veg", rating: 4.9, prepTime: 8, desc: "Sweet milk balls in syrup" },
        { id: 15, name: "Kulfi", price: 110, image: "kulphi.jpg", category: "dessert", type: "veg", rating: 4.7, prepTime: 5, desc: "Traditional Indian ice cream" },
        { id: 16, name: "Rasmalai", price: 150, image: "rasmalai.jpg", category: "dessert", type: "veg", rating: 4.8, prepTime: 7, desc: "Cottage cheese in sweet milk" },
        { id: 17, name: "Gajar Halwa", price: 160, image: "halwa.jpg", category: "dessert", type: "veg", rating: 4.6, prepTime: 20, desc: "Carrot pudding with nuts" }
    ];

    // Shopping cart array
    let cart = [];

    // Current filters
    let currentCategory = 'all';
    let currentType = 'all';
    let currentSearch = '';

    // DOM elements
    const foodItemsContainer = document.querySelector('.food-items');
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmountElement = document.getElementById('totalAmount');
    const subtotalAmountElement = document.getElementById('subtotalAmount');
    const taxAmountElement = document.getElementById('taxAmount');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const typeButtons = document.querySelectorAll('.type-option');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const notification = document.getElementById('notification');
    const searchInput = document.getElementById('searchInput');
    const themeToggle = document.getElementById('themeToggle');
    const mobileCartTotal = document.querySelector('.mobile-cart-total');
    const mobileCheckoutBtn = document.getElementById('mobileCheckoutBtn');

    // Initialize the application
    function init() {
        renderMenuItems();
        setupEventListeners();
        updateMobileCart();
    }

    // Render menu items based on filters
    function renderMenuItems() {
        foodItemsContainer.innerHTML = '';
        
        const filteredItems = menuItems.filter(item => {
            // Category filter
            const categoryMatch = currentCategory === 'all' || item.category === currentCategory;
            
            // Type filter
            const typeMatch = currentType === 'all' || item.type === currentType;
            
            // Search filter
            const searchMatch = currentSearch === '' || 
                item.name.toLowerCase().includes(currentSearch) || 
                item.desc.toLowerCase().includes(currentSearch);
            
            return categoryMatch && typeMatch && searchMatch;
        });
        
        if (filteredItems.length === 0) {
            foodItemsContainer.innerHTML = '<div class="empty-cart"><p>No items match your search</p><p>Try different filters</p></div>';
            return;
        }
        
        filteredItems.forEach(item => {
            const foodItem = document.createElement('div');
            foodItem.className = 'food-item';
            
            // Generate star rating
            const stars = Array(Math.floor(item.rating)).fill(0).map((_, i) => 
                `<i class="fas fa-star"></i>`
            ).join('');
            
            foodItem.innerHTML = `
                <div class="veg-indicator ${item.type}">
                    ${item.type === 'veg' ? '🌿' : '🍗'}
                </div>
                <img src="${item.image}" alt="${item.name}">
                <div class="food-name">${item.name}</div>
                <div class="food-desc">${item.desc}</div>
                <div class="food-meta">
                    <div class="food-price">₹${item.price}</div>
                    <div class="rating">
                        ${stars} ${item.rating}
                    </div>
                </div>
                <div class="prep-time">Ready in ${item.prepTime} mins</div>
                <button class="add-btn" data-id="${item.id}">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
            `;
            foodItemsContainer.appendChild(foodItem);
        });
    }

    // Update cart display
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                    <p>Add delicious items from our menu</p>
                </div>
            `;
            totalAmountElement.textContent = '0';
            subtotalAmountElement.textContent = '0';
            taxAmountElement.textContent = '0';
            updateMobileCart();
            return;
        }
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">
                        ${item.type === 'veg' ? '🌿' : '🍗'} ${item.name}
                    </div>
                    <div class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-btn" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        calculateTotal();
        updateMobileCart();
    }

    // Calculate cart total
    function calculateTotal() {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.05;
        const total = subtotal + tax;
        
        subtotalAmountElement.textContent = subtotal.toFixed(2);
        taxAmountElement.textContent = tax.toFixed(2);
        totalAmountElement.textContent = total.toFixed(2);
    }

    // Update mobile cart display
    function updateMobileCart() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = total * 0.05;
        const grandTotal = total + tax;
        
        mobileCartTotal.textContent = grandTotal.toFixed(2);
    }

    // Add item to cart
    function addToCart(itemId) {
        const menuItem = menuItems.find(item => item.id === itemId);
        
        if (!menuItem) return;
        
        const existingItem = cart.find(item => item.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: menuItem.id,
                name: menuItem.name,
                price: menuItem.price,
                quantity: 1,
                type: menuItem.type
            });
        }
        
        updateCart();
        showNotification(`${menuItem.name} added to cart!`);
    }

    // Remove item from cart
    function removeFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        updateCart();
    }

    // Update item quantity
    function updateQuantity(itemId, change) {
        const item = cart.find(item => item.id === itemId);
        
        if (!item) return;
        
        item.quantity += change;
        
        if (item.quantity < 1) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }

    // Show notification
    function showNotification(message) {
        notification.querySelector('span').textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Save order to localStorage
    function saveOrder(orderData) {
        let orders = JSON.parse(localStorage.getItem('faujiDhabaOrders')) || [];
        orders.push(orderData);
        localStorage.setItem('faujiDhabaOrders', JSON.stringify(orders));
        return orders;
    }

    // Place order
    function placeOrder() {
        const tableNo = document.getElementById('tableNo').value;
        const customerName = document.getElementById('customerName').value;
        const customerPhone = document.getElementById('customerPhone').value;
        const specialInstructions = document.getElementById('specialInstructions').value;
        
        if (!tableNo) {
            showNotification('Please enter table number');
            return;
        }
        
        if (cart.length === 0) {
            showNotification('Your cart is empty');
            return;
        }
        
        // Calculate totals
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.05;
        const total = subtotal + tax;
        
        // Create order object
        const orderData = {
            tableNo: tableNo,
            customerName: customerName,
            customerPhone: customerPhone,
            specialInstructions: specialInstructions,
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                type: item.type
            })),
            subtotal: subtotal,
            tax: tax,
            total: total,
            date: new Date().toISOString()
        };
        
        // Save order to localStorage
        saveOrder(orderData);
        
        // Create order summary for WhatsApp
        let orderSummary = `🛎️ New Order - New Fauji Dhaba 🛎️\n\n`;
        orderSummary += `🪑 Table: ${tableNo}\n`;
        if (customerName) orderSummary += `👤 Customer: ${customerName}\n`;
        if (customerPhone) orderSummary += `📞 Phone: ${customerPhone}\n\n`;
        orderSummary += `📝 Order Details:\n`;
        
        cart.forEach(item => {
            orderSummary += `🍽️ ${item.name} (${item.type}) - ${item.quantity} x ₹${item.price}\n`;
        });
        
        orderSummary += `\n💵 Subtotal: ₹${subtotal.toFixed(2)}`;
        orderSummary += `\n📊 Tax (5%): ₹${tax.toFixed(2)}`;
        orderSummary += `\n💰 Total: ₹${total.toFixed(2)}\n`;
        
        if (specialInstructions) {
            orderSummary += `\n📌 Special Instructions: ${specialInstructions}\n`;
        }
        
        const now = new Date();
        orderSummary += `\n📅 ${now.toLocaleDateString('en-IN')} ⏰ ${now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}\n`;
        orderSummary += `\nPlease deliver on time, Thanks!`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(orderSummary);
        
        // Phone number to send to
        const phoneNumber = '7571991816';
        
        // Create WhatsApp link
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappLink, '_blank');
        
        // Reset cart after order
        cart = [];
        updateCart();
        document.getElementById('tableNo').value = '';
        document.getElementById('customerName').value = '';
        document.getElementById('customerPhone').value = '';
        document.getElementById('specialInstructions').value = '';
        
        showNotification('Order placed successfully!');
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        
        // Update icon
        themeToggle.innerHTML = newTheme === 'dark' ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
        
        // Save theme preference
        localStorage.setItem('theme', newTheme);
    }

    // Set up event listeners
    function setupEventListeners() {
        // Category buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentCategory = button.dataset.category;
                renderMenuItems();
            });
        });
        
        // Type filter buttons
        typeButtons.forEach(button => {
            button.addEventListener('click', () => {
                typeButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentType = button.dataset.type;
                renderMenuItems();
            });
        });
        
        // Search input
        searchInput.addEventListener('input', () => {
            currentSearch = searchInput.value.toLowerCase();
            renderMenuItems();
        });
        
        // Add to cart buttons (delegated)
        foodItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-btn') || e.target.closest('.add-btn')) {
                const button = e.target.closest('.add-btn');
                const itemId = parseInt(button.dataset.id);
                addToCart(itemId);
            }
        });
        
        // Cart controls (delegated)
        cartItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('minus') || e.target.closest('.minus')) {
                const button = e.target.closest('.minus');
                const itemId = parseInt(button.dataset.id);
                updateQuantity(itemId, -1);
            }
            
            if (e.target.classList.contains('plus') || e.target.closest('.plus')) {
                const button = e.target.closest('.plus');
                const itemId = parseInt(button.dataset.id);
                updateQuantity(itemId, 1);
            }
            
            if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) {
                const button = e.target.closest('.remove-btn');
                const itemId = parseInt(button.dataset.id);
                removeFromCart(itemId);
            }
        });
        
        // Checkout button
        checkoutBtn.addEventListener('click', placeOrder);
        
        // Theme toggle
        themeToggle.addEventListener('click', toggleTheme);
        
        // Mobile checkout button
        mobileCheckoutBtn.addEventListener('click', () => {
            document.querySelector('.cart-section').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Initialize the app
    init();

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        themeToggle.innerHTML = savedTheme === 'dark' ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    }
