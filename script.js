'use strict';

/* ── SCROLL: sticky navbar ─────────────────────── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ── HAMBURGER ─────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

function closeMenu() {
  if (!navLinks || !hamburger) return;
  navLinks.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
}

/* ── TYPED ANIMATION ───────────────────────────── */
const lines = [
  'Developer | Learner | Builder',
  'Building Real Projects',
  'Learning Advanced JavaScript',
  'Practicing DSA Daily',
  'Consistency Beats Everything',
];

const typedEl = document.getElementById('typed-text');
let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typedEl) return;
  const current = lines[lineIndex];

  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
    setTimeout(typeLoop, 70);
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      setTimeout(typeLoop, 400);
      return;
    }
    setTimeout(typeLoop, 35);
  }
}

typeLoop();

/* ── AOS ────────────────────────────────────────── */
AOS.init({
  duration: 700,
  once: true,
  easing: 'ease-out-cubic',
  offset: 60,
});

/* ── PARTICLES ──────────────────────────────────── */
particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: '#a78bfa' },
    shape: { type: 'circle' },
    opacity: { value: 0.25, random: true },
    size: { value: 2, random: true },
    line_linked: {
      enable: true,
      distance: 140,
      color: '#7c3aed',
      opacity: 0.18,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
    },
    modes: {
      grab: { distance: 160, line_linked: { opacity: 0.45 } },
      push: { particles_nb: 3 },
    },
  },
  retina_detect: true,
});

/* ── SMOOTH ACTIVE NAV LINK ─────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => observer.observe(s));
