document.getElementById("navbar-placeholder").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index.html">Inventory Tracker</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="ppl.html">PPL</a></li>
        <li class="nav-item"><a class="nav-link" href="product-form.html">Add/Edit Products</a></li>
        <li class="nav-item"><a class="nav-link" href="reports.html">Generate Reports</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="privacy.html">Privacy Policy</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
      </ul>
      <button id="dark-mode-toggle" class="btn btn-outline-dark ml-auto">🌙 Dark Mode</button>
    </div>
  </nav>
`;
