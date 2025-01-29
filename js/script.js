document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const productForm = document.getElementById('productForm');
    const productDetails = document.getElementById('productDetails');
    
    let products = JSON.parse(localStorage.getItem('products')) || [];

    function saveProducts() {
        localStorage.setItem('products', JSON.stringify(products));
    }

    function renderProductList() {
        if (!productList) return;
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>${product.price}</td>
                <td>
                    <button onclick="viewProduct(${index})">View</button>
                    <button onclick="editProduct(${index})">Edit</button>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </td>
            `;
            productList.appendChild(row);
        });
    }

    function viewProduct(index) {
        if (!productDetails) return;
        const product = products[index];
        productDetails.innerHTML = `
            <h3>${product.name}</h3>
            <p>Quantity: ${product.quantity}</p>
            <p>Price: $${product.price}</p>
            <button onclick="editProduct(${index})">Edit</button>
            <button onclick="deleteProduct(${index})">Delete</button>
        `;
    }

    function editProduct(index) {
        const product = products[index];
        document.getElementById('productName').value = product.name;
        document.getElementById('productQuantity').value = product.quantity;
        document.getElementById('productPrice').value = product.price;
        productForm.onsubmit = (e) => {
            e.preventDefault();
            product.name = document.getElementById('productName').value;
            product.quantity = document.getElementById('productQuantity').value;
            product.price = document.getElementById('productPrice').value;
            saveProducts();
            renderProductList();
            window.location.href = 'products.html';
        };
    }

    function deleteProduct(index) {
        products.splice(index, 1);
        saveProducts();
        renderProductList();
        window.location.href = 'products.html';
    }

    if (productForm) {
        productForm.onsubmit = (e) => {
            e.preventDefault();
            const newProduct = {
                name: document.getElementById('productName').value,
                quantity: document.getElementById('productQuantity').value,
                price: document.getElementById('productPrice').value
            };
            products.push(newProduct);
            saveProducts();
            renderProductList();
            window.location.href = 'products.html';
        };
    }

    renderProductList();
});
// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });
});
