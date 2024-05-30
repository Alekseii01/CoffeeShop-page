const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const testimonialSlide = document.querySelector('.testimonial-slide');
const currentSlideIndicator = document.getElementById('current-slide');
const progressBar = document.querySelector('.brown-bar');

let currentIndex = 1;

window.addEventListener('resize', updateCurrentSlideIndicator);

function updateCurrentSlideIndicator() {
  if (document.documentElement.clientWidth < 1000) {
    currentSlideIndicator.textContent = 1;
  } else {
    currentSlideIndicator.textContent = 2;
  }
}

updateCurrentSlideIndicator();

prevButton.addEventListener('click', () => {
  updateIndex(-1); 
  updateSlidePosition();
});

nextButton.addEventListener('click', () => {
  updateIndex(1);
  updateSlidePosition();
});

function updateIndex(delta) {
  const totalSlides = testimonialSlide.children.length;
  currentIndex += delta;
  if (currentIndex < 1) {
    currentIndex = 1;
  } else if (currentIndex >= totalSlides) {
    if (document.documentElement.clientWidth > 1000) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = totalSlides;
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const footerBtn = document.querySelector('.footer-btn');
  const mobileNav = document.querySelector('.nav.mobile:not(.nav-footer)');
  const footerNav = document.querySelector('.nav.mobile.nav-footer');

  menuBtn.addEventListener('click', function() {
    toggleNav(mobileNav);
  });

  footerBtn.addEventListener('click', function() {
    toggleNav(footerNav);
  });

  function toggleNav(navElement) {
    if (navElement.classList.contains('active')) {
      navElement.classList.remove('active');
      setTimeout(() => {
        navElement.style.display = 'none';
      }, 300);
    } else {
      navElement.style.display = 'flex';
      setTimeout(() => {
        navElement.classList.add('active');
      }, 0); 
    }
  }

  function resizeMobileNav() {
    if (document.documentElement.clientWidth > 1000) {
      mobileNav.classList.remove('active');
      mobileNav.style.display = 'none';
      footerNav.classList.remove('active');
      footerNav.style.display = 'none';
    }
  }

  window.addEventListener('resize', resizeMobileNav);
  resizeMobileNav();
});
