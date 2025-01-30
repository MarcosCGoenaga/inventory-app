document.addEventListener("DOMContentLoaded", function () {
  // Load Navbar
  fetch("components/navbar.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("navbar-placeholder").innerHTML = data;
          setupDarkModeToggle();  // Ensure dark mode toggle works
      })
      .catch(error => console.error("Error loading navbar:", error));

  // Load Footer
  fetch("components/footer.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(error => console.error("Error loading footer:", error));
});
