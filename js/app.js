const app = Vue.createApp({});

app.component("nav-bar", {
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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

app.component("main-content", {
  template: `
    <div class="container text-center my-5">
      <h2 class="mb-4">Welcome to Inventory Tracker</h2>
      <p class="lead">Manage your inventory efficiently with our powerful tools.</p>
      <button class="btn btn-success" onclick="location.href='ppl.html'">Get Started</button>
    </div>
  `,
});

app.component("footer-component", {
  template: `
    <footer class="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2025 Inventory Tracker. All rights reserved.</p>
    </footer>
  `,
});

app.mount("#app");
