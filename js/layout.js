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
      <button id="dark-mode-toggle" class="btn btn-sm btn-dark ml-auto">🌙 Dark Mode</button>
    </div>
  </nav>
`;

document.getElementById("footer-placeholder").innerHTML = `
  <footer class="text-center py-3">
    <p>&copy; 2025 Inventory Tracker. All rights reserved.</p>
  </footer>
`;

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if Dark Mode is stored in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
  darkModeToggle.textContent = "☀️ Light Mode";
  darkModeToggle.classList.remove("btn-dark");
  darkModeToggle.classList.add("btn-light");
}

function disableDarkMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
  darkModeToggle.textContent = "🌙 Dark Mode";
  darkModeToggle.classList.remove("btn-light");
  darkModeToggle.classList.add("btn-dark");
}
