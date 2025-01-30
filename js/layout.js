document.addEventListener("DOMContentLoaded", () => {
  const checkNavbar = setInterval(() => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const canvas = document.getElementById("nav-constellation");

    if (!darkModeToggle || !navbar) return; // Wait for the navbar to load

    clearInterval(checkNavbar); // Stop checking once navbar exists

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
      }, 60000); // 60 seconds
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
      }, 6000); // Shooting star lasts 6 sec
    }

    function startShootingStars() {
      setInterval(() => {
        createShootingStar();
      }, Math.random() * 5000 + 3000); // Slowed down (3-5 sec)
    }

    startShootingStars();
  }, 100); // Check every 100ms until navbar loads
});
