// js/navbar.js
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("navbar-placeholder").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="index.html">Inventory Tracker</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="ppl.html">PPL</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="product-form.html">Add Product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="reports.html">Reports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
});
