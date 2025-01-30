const app = Vue.createApp({
    data() {
      return {
        darkMode: localStorage.getItem("darkMode") === "true",
      };
    },
    mounted() {
      // Apply dark mode if previously enabled
      if (this.darkMode) {
        document.body.classList.add("dark-mode");
      }
    },
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle("dark-mode", this.darkMode);
        localStorage.setItem("darkMode", this.darkMode);
      },
    },
  });
  
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
            <button @click="$emit('toggle-dark')" class="btn btn-outline-light ms-3 dark-mode-toggle">
              {{ isDarkMode ? '☀️' : '🌙' }}
            </button>
          </div>
        </div>
      </nav>
    `,
    props: ["isDarkMode"],
  });
  
  // ✅ Footer Component
  app.component("footer-component", {
    template: `
      <footer class="footer bg-dark text-white text-center py-3 mt-5">
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
  const mountedApp = app.mount("#app");
  
  // ✅ Constellation Effect
  const canvas = document.getElementById("nav-constellation");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 60;
    const stars = [];
    const shootingStars = [];
  
    // Create stars
    for (let i = 0; i < 50; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
      });
    }
  
    // Create shooting stars
    for (let i = 0; i < 2; i++) {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 30 + 10,
        speed: Math.random() * 2 + 2,
      });
    }
  
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
  
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
  
      shootingStars.forEach((star) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y - star.length / 2);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
        star.x += star.speed;
        star.y += star.speed / 2;
  
        // Reset shooting star when it goes off screen
        if (star.x > canvas.width || star.y > canvas.height) {
          star.x = Math.random() * canvas.width;
          star.y = 0;
        }
      });
  
      requestAnimationFrame(drawStars);
    }
  
    drawStars();
  }
  