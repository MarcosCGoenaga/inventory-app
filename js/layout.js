document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("dark-mode-toggle");
  const navbar = document.querySelector(".navbar");
  const body = document.body;

  // Load Dark Mode preference from local storage
  const currentMode = localStorage.getItem("darkMode");

  if (currentMode === "enabled") {
      enableDarkMode();
  } else {
      disableDarkMode();
  }

  // Toggle button click event
  toggleSwitch.addEventListener("click", function () {
      if (body.classList.contains("dark-mode")) {
          disableDarkMode();
      } else {
          enableDarkMode();
      }
  });

  function enableDarkMode() {
      body.classList.add("dark-mode");
      navbar.classList.add("dark-navbar"); // Ensure navbar updates
      toggleSwitch.classList.add("active"); // Toggle button animation
      localStorage.setItem("darkMode", "enabled");
  }

  function disableDarkMode() {
      body.classList.remove("dark-mode");
      navbar.classList.remove("dark-navbar"); // Ensure navbar updates
      toggleSwitch.classList.remove("active"); // Toggle button animation
      localStorage.setItem("darkMode", "disabled");
  }
});
