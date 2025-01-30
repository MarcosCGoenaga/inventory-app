function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
  
  // Change icon & animate rotation
  darkModeIcon.innerHTML = "☀️";
  darkModeIcon.style.transition = "transform 0.3s ease, color 0.3s ease";
  darkModeIcon.style.transform = "rotate(180deg)";
  darkModeIcon.style.color = "#ffcc00";  // Warmer yellow for sun icon
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
