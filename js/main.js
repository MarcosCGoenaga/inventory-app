// js/main.js

// Function to initialize the application
document.addEventListener("DOMContentLoaded", function() {
    console.log("Application initialized");

    // Add any initialization code here
    // For example, you might want to set up event listeners or fetch data

    // Example: Set up an event listener for form submission
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', function(event) {
            event.preventDefault();
            handleFormSubmit();
        });
    }
});

// Function to handle form submission
function handleFormSubmit() {
    // Get form values
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;

    // Validate form values
    if (productName && productDescription && productPrice) {
        console.log("Form submitted successfully");
        console.log("Product Name:", productName);
        console.log("Product Description:", productDescription);
        console.log("Product Price:", productPrice);

        // You can add code here to send the form data to a server or update the UI
    } else {
        alert("Please fill in all the fields");
    }
}

// Function to fetch inventory items
function fetchInventoryItems() {
    // Example: Fetch inventory items from a server or local storage
    // For now, we'll use a static list of items
    const inventoryItems = [
        { id: 1, name: "Product 1", description: "Description 1", price: 100 },
        { id: 2, name: "Product 2", description: "Description 2", price: 200 },
        { id: 3, name: "Product 3", description: "Description 3", price: 300 }
    ];

    // Display inventory items in the UI
    displayInventoryItems(inventoryItems);
}

// Function to display inventory items in the UI
function displayInventoryItems(items) {
    const inventoryList = document.getElementById('inventoryList');

    if (inventoryList) {
        inventoryList.innerHTML = '';

        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.description} - $${item.price}`;
            inventoryList.appendChild(listItem);
        });
    }
}

// Call the fetchInventoryItems function to display items on page load
fetchInventoryItems();
