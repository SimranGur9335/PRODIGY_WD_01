const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const toggleMode = document.getElementById('toggle-mode');

// Toggle dark/light mode
toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleMode.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Scroll event for navbar background
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
