/**
 * Projects Section Component
 * 3 cards displaying embedded systems projects with Problem, Contributions, Tools, Results, and GitHub link.
 */

import { projectsData } from '../data/projects.js';

export function renderProjects() {
  const cardsHtml = projectsData.map((project, index) => {
    const toolsHtml = project.tools.map(tool => `
      <span class="tool-tag">${tool}</span>
    `).join('');

    const contributionsHtml = project.whatIDid.map(point => `
      <li>${point}</li>
    `).join('');

    return `
      <article class="project-card reveal-on-scroll delay-${(index % 3) + 1}">
        <div class="project-header">
          <div class="project-badge-row">
            <span class="badge">${project.badge}</span>
            ${project.isPlaceholder ? `<span class="project-placeholder-note">[Placeholder • Easy to replace]</span>` : ''}
          </div>
          <h3 class="project-title">${project.title}</h3>
        </div>

        <div class="project-body">
          <div class="project-block">
            <span class="block-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              Problem Statement
            </span>
            <p class="block-desc">${project.problem}</p>
          </div>

          <div class="project-block">
            <span class="block-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              What I Did & Engineering Approach
            </span>
            <ul class="project-contributions-list">
              ${contributionsHtml}
            </ul>
          </div>

          <div class="project-block">
            <span class="block-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              Hardware, Protocols & Tools
            </span>
            <div class="project-tools">
              ${toolsHtml}
            </div>
          </div>

          <div class="project-block project-result-box">
            <span class="block-title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Measurable Result
            </span>
            <p class="block-desc" style="color: var(--text-primary); font-weight: 500;">
              ${project.result}
            </p>
          </div>
        </div>

        <div class="project-footer">
          <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer" style="width: 100%; justify-content: center;">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            View Repository
          </a>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section class="section" id="projects" aria-label="Featured Projects">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <div class="section-tag">Hands-on Engineering</div>
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">
            Demonstrating bare-metal firmware design, multi-threaded networking, and hardware PCB engineering.
          </p>
        </div>

        <div class="projects-grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}
