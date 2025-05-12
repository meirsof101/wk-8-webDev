// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const showMenuBtn = document.getElementById('showMenu');
  const hideMenuBtn = document.getElementById('hideMenu');
  const navLinks = document.getElementById('navLinks');

  // Show the mobile menu when hamburger icon is clicked
  if (showMenuBtn) {
    showMenuBtn.addEventListener('click', function() {
      navLinks.classList.add('nav-active');
    });
  }

  // Hide the mobile menu when X icon is clicked
  if (hideMenuBtn) {
    hideMenuBtn.addEventListener('click', function() {
      navLinks.classList.remove('nav-active');
    });
  }

  // Close menu when clicking on navigation links (optional enhancement)
  const navItems = document.querySelectorAll('.nav-links ul li a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('nav-active');
      }
    });
  });

  // Close menu when clicking outside (optional enhancement)
  document.addEventListener('click', function(event) {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnMenuButton = showMenuBtn.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnMenuButton && navLinks.classList.contains('nav-active')) {
      navLinks.classList.remove('nav-active');
    }
  });
});