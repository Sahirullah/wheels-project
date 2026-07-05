// Simple Vanilla JavaScript Mobile Menu
// No jQuery required - Pure JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // Get elements
  const toggleBtn = document.querySelector('.sidebar__toggle');
  const offcanvasInfo = document.querySelector('.offcanvas__info');
  const offcanvasOverlay = document.querySelector('.offcanvas__overlay');
  const closeBtn = document.querySelector('.offcanvas__close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  // Log to console for debugging
  console.log('Mobile Menu Script Loaded');
  console.log('Toggle Button:', toggleBtn);
  console.log('Offcanvas Info:', offcanvasInfo);

  // Check if elements exist
  if (!toggleBtn || !offcanvasInfo || !offcanvasOverlay) {
    console.error('Mobile menu elements not found!');
    return;
  }

  // Open menu function
  function openMenu() {
    console.log('Opening menu...');
    offcanvasInfo.classList.add('info-open');
    offcanvasOverlay.classList.add('overlay-open');
    document.body.style.overflow = 'hidden';
  }

  // Close menu function
  function closeMenu() {
    console.log('Closing menu...');
    offcanvasInfo.classList.remove('info-open');
    offcanvasOverlay.classList.remove('overlay-open');
    document.body.style.overflow = 'auto';
  }

  // Open menu on hamburger click
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Hamburger clicked!');
      openMenu();
    });
  }

  // Close menu on overlay click
  if (offcanvasOverlay) {
    offcanvasOverlay.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Overlay clicked!');
      closeMenu();
    });
  }

  // Close menu on close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Close button clicked!');
      closeMenu();
    });
  }

  // Close menu when clicking navigation links
  mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      console.log('Menu link clicked:', link.href);
      closeMenu();
    });
  });

  // Close menu on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
      console.log('ESC key pressed!');
      closeMenu();
    }
  });

  console.log('Mobile Menu Script Initialized Successfully!');
});
