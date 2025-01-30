const app = Vue.createApp({});

// ✅ Navbar Component
app.component("nav-bar", {
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
      <canvas id="nav-constellation"></canvas>
      <div class="container">
        <a class="navbar-brand" href="index.html">Inventory Tracker</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="ppl.html">PPL</a></li>
            <li class="nav-item"><a class="nav-link" href="product-form.html">Add/Edit Products</a></li>
            <li class="nav-item"><a class="nav-link" href="reports.html">Reports</a></li>
            <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
            <li class="nav-item"><a class="nav-link" href="privacy-policy.html">Privacy Policy</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
          </ul>
          <button @click="toggleDarkMode" class="btn btn-outline-light ms-3">
            {{ darkMode ? '☀️' : '🌙' }}
          </button>
        </div>
      </div>
    </nav>
  `,
  data() {
    return { darkMode: false };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle("dark-mode", this.darkMode);
    },
  },
});

// ✅ Footer Component
app.component("footer-component", {
  template: `
    <footer class="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2025 Inventory Tracker. All rights reserved.</p>
    </footer>
  `,
});

// ✅ Dynamic Main Content
app.component("main-content", {
  template: getPageTemplate(),
});

// ✅ Function to Load Page-Specific Content
function getPageTemplate() {
  const page = window.location.pathname.split("/").pop();
  const templates = {
    "index.html": `
      <div class="container text-center my-5">
        <h2 class="mb-4">Welcome to Inventory Tracker</h2>
        <p class="lead">Manage your inventory efficiently with our powerful tools.</p>
        <button class="btn btn-success" onclick="location.href='ppl.html'">Get Started</button>
      </div>`,
    "ppl.html": `<div class="container"><h2>PPL Page</h2><p>List your inventory here.</p></div>`,
    "product-form.html": `<div class="container"><h2>Add/Edit Products</h2><p>Form to add/edit products.</p></div>`,
    "reports.html": `<div class="container"><h2>Reports</h2><p>Generate inventory reports.</p></div>`,
    "about.html": `<div class="container"><h2>About Us</h2><p>Information about the Inventory Tracker.</p></div>`,
    "privacy-policy.html": `<div class="container"><h2>Privacy Policy</h2><p>Your data privacy details here.</p></div>`,
    "contact.html": `<div class="container"><h2>Contact Us</h2><p>Contact form here.</p></div>`,
  };
  return templates[page] || templates["index.html"];
}

// ✅ Mount Vue App
app.mount("#app");
