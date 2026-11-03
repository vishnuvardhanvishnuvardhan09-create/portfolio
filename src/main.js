/**
 * Application Entry Point - D Vishnu Vardhan Portfolio
 * 
 * Features:
 * - Mounts all modular components
 * - Initializes interactive event listeners
 * - Safe GSAP + ScrollTrigger entrance animations (100% visible by default)
 * - Lazy-loads Three.js 3D Holographic Silicon Quantum Core scene
 */

import './styles/main.css';
import './styles/hero.css';
import './styles/components.css';
import './styles/animations.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { renderNavbar, initNavbarInteractions } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderSkills, initSkillsTilt } from './components/skills.js';
import { renderProjects } from './components/projects.js';
import { renderEducation } from './components/education.js';
import { renderContact, initContactInteractions } from './components/contact.js';
import { renderFooter, initFooterInteractions } from './components/footer.js';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${renderNavbar()}
    <main id="main-content">
      ${renderHero()}
      ${renderAbout()}
      ${renderSkills()}
      ${renderProjects()}
      ${renderEducation()}
      ${renderContact()}
    </main>
    ${renderFooter()}
    
    <!-- Copy feedback toast -->
    <div class="toast" id="toast" role="status" aria-live="polite">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>Email copied to clipboard!</span>
    </div>
  `;

  // Initialize interactive features
  initNavbarInteractions();
  initSkillsTilt();
  initContactInteractions();
  initFooterInteractions();
  
  // Safe GSAP Animations
  initGsapAnimations();

  // Lazy-load Three.js 3D Holographic Scene
  initLazy3DScene();
}

/**
 * GSAP + ScrollTrigger animations
 * Safe: Elements are 100% visible by default so no content is ever hidden.
 */
function initGsapAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // 1. Hero entrance animation
  gsap.from('.hero-content > *', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
    delay: 0.1
  });

  // 2. Safe section reveals with ScrollTrigger
  const sections = document.querySelectorAll('.section-header');
  sections.forEach(header => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 88%',
        toggleActions: 'play none none none'
      },
      y: 18,
      duration: 0.6,
      ease: 'power2.out'
    });
  });

  // Refresh ScrollTrigger calculations
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
}

/**
 * Lazy-load Three.js 3D Holographic Silicon scene
 */
function initLazy3DScene() {
  const container = document.getElementById('pcb-canvas-container');
  const loader = document.getElementById('canvas-loader');

  if (!container) return;

  const loadScene = () => {
    import('./three/pcbScene.js')
      .then(({ PCBScene }) => {
        new PCBScene(container, loader);
        ScrollTrigger.refresh();
      })
      .catch(err => {
        console.error('Failed to load 3D Holographic scene:', err);
        if (loader) {
          loader.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 1rem;">
              <span style="color: var(--accent-cyan); display: block; font-weight: 600; margin-bottom: 0.25rem;">Holographic MCU Core</span>
              Interactive WebGL ready
            </div>
          `;
        }
      });
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadScene, { timeout: 1000 });
  } else {
    setTimeout(loadScene, 200);
  }
}

// Start app
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
