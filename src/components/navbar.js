/**
 * Navbar Component
 * Minimal sticky navigation with active link highlighting, mobile drawer, and keyboard accessibility.
 */

import { profileData } from '../data/profile.js';

export function renderNavbar() {
  return `
    <header class="navbar" id="navbar" role="banner">
      <div class="container nav-container">
        <a href="#hero" class="nav-brand" aria-label="D Vishnu Vardhan - Home">
          <div class="brand-chip-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="4" y="4" width="16" height="16" rx="2"/>
              <rect x="9" y="9" width="6" height="6"/>
              <line x1="9" y1="1" x2="9" y2="4"/>
              <line x1="15" y1="1" x2="15" y2="4"/>
              <line x1="9" y1="20" x2="9" y2="23"/>
              <line x1="15" y1="20" x2="15" y2="23"/>
              <line x1="20" y1="9" x2="23" y2="9"/>
              <line x1="20" y1="15" x2="23" y2="15"/>
              <line x1="1" y1="9" x2="4" y2="9"/>
              <line x1="1" y1="15" x2="4" y2="15"/>
            </svg>
          </div>
          <span class="brand-text">${profileData.name}</span>
        </a>

        <nav role="navigation" aria-label="Main Navigation">
          <ul class="nav-menu" id="nav-menu">
            <li><a href="#hero" class="nav-link active">Home</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#skills" class="nav-link">Skills</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#education" class="nav-link">Education</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
            <li>
              <a href="${profileData.hero.resumeLink}" class="btn btn-secondary nav-cta" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle navigation menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  `;
}

export function initNavbarInteractions() {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll effect on navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile menu toggle
  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}
