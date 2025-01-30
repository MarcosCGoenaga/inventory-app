document.addEventListener("DOMContentLoaded", function () {
  // Load navbar
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => document.getElementById("navbar-placeholder").innerHTML = data)
    .catch(error => console.error("Error loading navbar:", error));

  // Load footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data)
    .catch(error => console.error("Error loading footer:", error));
});
