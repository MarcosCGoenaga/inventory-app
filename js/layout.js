document.getElementById("navbar-placeholder").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light position-relative">
    <canvas id="nav-constellation"></canvas>
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
      </ul>
      <button id="dark-mode-toggle" class="btn btn-sm btn-dark ml-auto">
        <span id="dark-mode-icon">🌙</span>
      </button>
    </div>
  </nav>
`;

const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");
const body = document.body;
const canvas = document.getElementById("nav-constellation");
const ctx = canvas.getContext("2d");

let stars = [];
let animationFrame;

// Dark mode check
if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    disableDarkMode();
  } else {
    enableDarkMode();
    startConstellationEffect();
  }
});

function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");

  darkModeIcon.innerHTML = "☀️";
  darkModeIcon.style.transform = "rotate(180deg)";
  darkModeIcon.style.color = "#ffcc00";

  startConstellationEffect(); // Start the navbar stars
}

function disableDarkMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "disabled");

  darkModeIcon.innerHTML = "🌙";
  darkModeIcon.style.transform = "rotate(0deg)";
  darkModeIcon.style.color = "#c4cad5";

  canvas.style.opacity = "0";
  cancelAnimationFrame(animationFrame);
}

// ---- CONSTELLATION EFFECT (Navbar Only) ---- //
function startConstellationEffect() {
  canvas.width = document.querySelector(".navbar").offsetWidth;
  canvas.height = document.querySelector(".navbar").offsetHeight;
  stars = [];

  for (let i = 0; i < 30; i++) { // Adjust number of stars
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      alpha: Math.random(),
      speed: Math.random() * 0.5 + 0.2
    });
  }

  canvas.style.opacity = "1";
  animateStars();

  // Fade out after 5 seconds
  setTimeout(() => {
    canvas.style.opacity = "0";
  }, 5000);
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    star.alpha += star.speed * 0.01;
    if (star.alpha >= 1 || star.alpha <= 0) {
      star.speed *= -1; // Reverse fade direction
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  });

  animationFrame = requestAnimationFrame(animateStars);
}
