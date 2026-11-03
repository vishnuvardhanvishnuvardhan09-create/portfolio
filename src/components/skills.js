/**
 * Skills Section Component
 * Grouped category cards with 3D hover tilt effect, icons, and structured proficiency data.
 */

import { skillsData } from '../data/skills.js';

// SVG Icon Helpers
function getCategoryIcon(type) {
  switch (type) {
    case 'code':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      `;
    case 'terminal':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      `;
    case 'network':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      `;
    case 'cpu':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="15" x2="23" y2="15"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="15" x2="4" y2="15"></line>
        </svg>
      `;
    case 'pcb':
      return `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      `;
    default:
      return '';
  }
}

export function renderSkills() {
  const cardsHtml = skillsData.map((group, index) => {
    const isAmber = group.accent === '#ffb454';

    const itemsHtml = group.skills.map(skill => `
      <li class="skill-item">
        <div class="skill-item-header">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-level-badge">${skill.level}</span>
        </div>
        <p class="skill-detail">${skill.detail}</p>
      </li>
    `).join('');

    return `
      <div class="skill-card tilt-card reveal-on-scroll delay-${(index % 4) + 1} ${isAmber ? 'amber' : ''}" data-tilt>
        <div class="skill-card-header">
          <div class="skill-icon-box" aria-hidden="true">
            ${getCategoryIcon(group.icon)}
          </div>
          <h3 class="skill-category-title">${group.category}</h3>
        </div>
        <p class="skill-summary">${group.summary}</p>
        <ul class="skill-items-list">
          ${itemsHtml}
        </ul>
      </div>
    `;
  }).join('');

  return `
    <section class="section" id="skills" aria-label="Technical Skills">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <div class="section-tag">Core Competencies</div>
          <h2 class="section-title">Technical Expertise</h2>
          <p class="section-subtitle">
            Specialized in low-level embedded software, operating systems concepts, and hardware prototyping.
          </p>
        </div>

        <div class="skills-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}

/**
 * Initialize 3D Tilt Effect on skill cards
 */
export function initSkillsTilt() {
  const cards = document.querySelectorAll('.skill-card[data-tilt]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) return;

  cards.forEach(card => {
    let bounds;

    function onMouseEnter() {
      bounds = card.getBoundingClientRect();
    }

    function onMouseMove(e) {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = mouseX / bounds.width - 0.5;
      const yPct = mouseY / bounds.height - 0.5;

      const rotateY = xPct * 12; // Max 12deg tilt
      const rotateX = -yPct * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    }

    function onMouseLeave() {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  });
}
