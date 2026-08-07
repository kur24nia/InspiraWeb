// Shared behavior across all pages

document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
    });
  }

  // Floating navbar on scroll
  function updateNavOnScroll() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    if (window.scrollY > 15) nav.classList.add('nav-scrolled');
    else nav.classList.remove('nav-scrolled');
  }
  window.addEventListener('scroll', updateNavOnScroll);
  updateNavOnScroll();

  // Close mobile menu after clicking a link
  document.querySelectorAll('.mobile-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
  });

  // Events strip horizontal scroll controls (home page)
  var strip = document.getElementById('eventsStrip');
  var leftBtn = document.getElementById('eventsLeft');
  var rightBtn = document.getElementById('eventsRight');
  if (strip && rightBtn) {
    rightBtn.addEventListener('click', function () {
      strip.scrollBy({ left: 280, behavior: 'smooth' });
    });
  }
  // Left arrow navigates into the events page (per spec)
  if (leftBtn) {
    leftBtn.addEventListener('click', function () {
      window.location.href = 'events.html';
    });
  }

  // Events page filter (client-side, cosmetic — all cards are "upcoming")
  var filterBtns = document.querySelectorAll('.efilter');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
  }
});
