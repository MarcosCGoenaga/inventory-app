document.addEventListener("DOMContentLoaded", function () {
  // Load Navbar
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      setupDarkMode();
    })
    .catch(error => console.error("Error loading navbar:", error));

  // Load Footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});

function setupDarkMode() {
  const toggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const navbar = document.querySelector(".navbar");

  // Check local storage for dark mode setting
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    navbar.classList.add("dark-mode-nav");
    addConstellationEffect();
  }

  // Add event listener for toggle
  toggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mode-nav");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      addConstellationEffect();
    } else {
      localStorage.setItem("darkMode", "disabled");
      removeConstellationEffect();
    }
  });
}

// 🌌 Add Constellation Effect (Dark Mode)
function addConstellationEffect() {
  let starsContainer = document.getElementById("stars-container");
  if (!starsContainer) {
    starsContainer = document.createElement("div");
    starsContainer.id = "stars-container";
    document.querySelector(".navbar").appendChild(starsContainer);
  }
  starsContainer.innerHTML = "";

  for (let i = 0; i < 50; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    starsContainer.appendChild(star);
  }

  addShootingStars();
}

// 💫 Add Shooting Stars
function addShootingStars() {
  let starsContainer = document.getElementById("stars-container");

  for (let i = 0; i < 3; i++) {
    let shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    starsContainer.appendChild(shootingStar);

    setTimeout(() => {
      shootingStar.style.left = "100%";
      shootingStar.style.top = `${Math.random() * 100}%`;
    }, Math.random() * 5000 + 1000);
  }
}

// 🚀 Remove Constellation Effect (Light Mode)
function removeConstellationEffect() {
  let starsContainer = document.getElementById("stars-container");
  if (starsContainer) {
    starsContainer.remove();
  }
}
