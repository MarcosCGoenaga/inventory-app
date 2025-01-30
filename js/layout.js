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
      <button id="dark-mode-toggle" class="btn btn-sm btn-dark ml-auto">
        <span id="dark-mode-icon">🌙</span>
      </button>
    </div>
  </nav>
`;

// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");
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
  
  // Change icon & animate rotation
  darkModeIcon.innerHTML = "☀️";
  darkModeIcon.style.transition = "transform 0.3s ease, color 0.3s ease";
  darkModeIcon.style.transform = "rotate(180deg)";
  darkModeIcon.style.color = "#ffcc00";  // Warm yellow for sun icon
}

function disableDarkMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");
  
  // Change icon & animate rotation back
  darkModeIcon.innerHTML = "🌙";
  darkModeIcon.style.transition = "transform 0.3s ease, color 0.3s ease";
  darkModeIcon.style.transform = "rotate(0deg)";
  darkModeIcon.style.color = "#c4cad5";  // Soft gray for moon icon
}

// Footer Placeholder
document.getElementById("footer-placeholder").innerHTML = `
  <footer class="text-center p-3">
    <p>&copy; 2025 Inventory Tracker. All rights reserved.</p>
  </footer>
`;
