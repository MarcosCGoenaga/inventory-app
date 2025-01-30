document.addEventListener("DOMContentLoaded", function () {
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
  let shootingStars = [];
  let animationFrame;

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = document.querySelector(".navbar").offsetWidth;
    canvas.height = document.querySelector(".navbar").offsetHeight;
  }

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

    startConstellationEffect();
  }

  function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");

    darkModeIcon.innerHTML = "🌙";
    darkModeIcon.style.transform = "rotate(0deg)";
    darkModeIcon.style.color = "#c4cad5";

    if (canvas) {
      canvas.style.opacity = "0";
      cancelAnimationFrame(animationFrame);
    }
  }

  function startConstellationEffect() {
    if (!canvas || !ctx) return;
    resizeCanvas();
    stars = [];
    shootingStars = [];

    // Generate static stars
    for (let i = 0; i < 50; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        alpha: Math.random(),
        speed: Math.random() * 0.5 + 0.1
      });
    }

    canvas.style.opacity = "1";
    animateStars();

    setTimeout(() => {
      if (canvas) canvas.style.opacity = "0";
    }, 5000);
  }

  function createShootingStar() {
    shootingStars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height / 2, // Upper half of navbar
      length: Math.random() * 80 + 30, // Longer streak
      speed: Math.random() * 5 + 2, // Faster movement
      opacity: 1
    });

    // Add a new shooting star every 2-4 seconds
    setTimeout(createShootingStar, Math.random() * 3000 + 2000);
  }

  function animateStars() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw static stars
    stars.forEach((star) => {
      star.alpha += star.speed * 0.01;
      if (star.alpha >= 1 || star.alpha <= 0) {
        star.speed *= -1;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    });

    // Draw shooting stars
    for (let i = 0; i < shootingStars.length; i++) {
      let star = shootingStars[i];
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x - star.length, star.y + star.length);
      ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      star.x += star.speed;
      star.y += star.speed;
      star.opacity -= 0.02;

      if (star.opacity <= 0) {
        shootingStars.splice(i, 1);
        i--;
      }
    }

    animationFrame = requestAnimationFrame(animateStars);
  }

  createShootingStar(); // Start shooting stars
  window.addEventListener("resize", resizeCanvas);
});
