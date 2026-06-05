// Select navigation elements
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

// Open and close navigation menu
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Close navigation after clicking a link
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
  });
});

// Rotaiont of titles on home page
const titleText = document.querySelector('#home p');

const titles = [
  'AWS Cloud Support Engineer',
  'Software Engineer',
  'Continuous Learner',
];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % titles.length;
  titleText.textContent = titles[currentIndex];
}, 3000);
