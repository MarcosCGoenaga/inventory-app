document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const navbar = document.querySelector(".navbar");
  const canvas = document.getElementById("nav-constellation");

  let isDarkMode = localStorage.getItem("darkMode") === "enabled";

  function enableDarkMode() {
    body.classList.add("dark-mode");
    navbar.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
    showConstellation();
  }

  function disableDarkMode() {
    body.classList.remove("dark-mode");
    navbar.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
    canvas.style.opacity = "0";
  }

  darkModeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    isDarkMode ? enableDarkMode() : disableDarkMode();
  });

  if (isDarkMode) enableDarkMode();

  function showConstellation() {
    if (!canvas) return;
    canvas.style.opacity = "1";

    setTimeout(() => {
      if (canvas) canvas.style.opacity = "0";
    }, 60000); // Lasts 60 seconds
  }

  function createShootingStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    document.body.appendChild(star);

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * 50;

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    setTimeout(() => {
      star.remove();
    }, 6000);
  }

  function startShootingStars() {
    setInterval(() => {
      createShootingStar();
    }, Math.random() * 5000 + 3000);
  }

  startShootingStars();
});
