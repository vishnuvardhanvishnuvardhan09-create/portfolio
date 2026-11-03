/**
 * About Section Component
 * Features D Vishnu Vardhan's verified profile portrait,
 * career objective, personal traits, languages, and technical mindset.
 */

import { profileData } from '../data/profile.js';

export function renderAbout() {
  const { about } = profileData;

  const highlightsHtml = about.highlights.map(item => `
    <div class="stat-card">
      <div class="stat-label">${item.label}</div>
      <div class="stat-value">${item.value}</div>
    </div>
  `).join('');

  const traitsHtml = about.personalTraits ? about.personalTraits.map(trait => `
    <span class="badge" style="font-size: 0.82rem; padding: 0.4rem 0.85rem; border-color: rgba(53, 224, 255, 0.35);">
      ✦ ${trait}
    </span>
  `).join('') : '';

  const languagesHtml = about.languages ? about.languages.map(lang => `
    <span class="tool-tag" style="padding: 0.35rem 0.75rem; font-size: 0.82rem;">${lang}</span>
  `).join('') : '';

  const hobbiesHtml = about.hobbies ? about.hobbies.map(hobby => `
    <span class="tool-tag" style="background: rgba(255, 180, 84, 0.12); color: #ffc47d; border-color: rgba(255, 180, 84, 0.3); padding: 0.35rem 0.75rem; font-size: 0.82rem;">${hobby}</span>
  `).join('') : '';

  return `
    <section class="section" id="about" aria-label="About Me">
      <div class="container">
        <div class="section-header reveal-on-scroll">
          <div class="section-tag">${about.sectionTag}</div>
          <h2 class="section-title">${about.title}</h2>
          <p class="section-subtitle">
            A proactive engineering student combining rigorous theoretical foundations with practical bare-metal implementation.
          </p>
        </div>

        <div class="about-grid">
          <!-- Left Main Card -->
          <div class="about-main-card reveal-on-scroll">
            
            <div style="margin-bottom: 1.75rem;">
              <span class="block-title" style="margin-bottom: 0.5rem; color: var(--accent-cyan);">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                Career Objective
              </span>
              <p class="about-lead" style="font-size: 1.15rem; margin-bottom: 1.25rem; line-height: 1.7;">
                "${about.careerObjective || about.bio}"
              </p>
            </div>

            <div class="about-paragraphs">
              ${about.detailedBio.map(p => `<p>${p}</p>`).join('')}
            </div>

            <!-- Personal Traits from Resume -->
            <div style="margin-top: 1.75rem; padding-top: 1.5rem; border-top: 1px solid rgba(30, 46, 84, 0.6);">
              <span class="block-title" style="margin-bottom: 0.75rem;">Personal Traits & Work Ethic</span>
              <div style="display: flex; flex-wrap: wrap; gap: 0.6rem;">
                ${traitsHtml}
              </div>
            </div>

            <!-- Languages & Hobbies -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; margin-top: 1.5rem;">
              <div>
                <span class="block-title" style="margin-bottom: 0.5rem;">Languages Known</span>
                <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
                  ${languagesHtml}
                </div>
              </div>
              <div>
                <span class="block-title" style="margin-bottom: 0.5rem;">Interests & Hobbies</span>
                <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
                  ${hobbiesHtml}
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Visual Portrait & Stats -->
          <div class="reveal-on-scroll delay-1" style="display: flex; flex-direction: column; gap: 1.5rem;">
            
            <!-- Portrait Card -->
            <div class="glass-card" style="padding: 1.75rem; text-align: center; display: flex; flex-direction: column; align-items: center;">
              <div style="position: relative; width: 140px; height: 140px; margin-bottom: 1.25rem;">
                <img src="${profileData.profileImage}" alt="${profileData.name}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; border: 3px solid var(--accent-cyan); box-shadow: 0 0 30px rgba(53, 224, 255, 0.35);" />
                <span style="position: absolute; bottom: 6px; right: 6px; width: 18px; height: 18px; border-radius: 50%; background: #10b981; border: 3px solid #0b1020; box-shadow: 0 0 10px #10b981;"></span>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.25rem;">${profileData.name}</h3>
              <p style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--accent-cyan); margin-bottom: 1rem;">
                ${profileData.shortTitle}
              </p>
              <div style="display: flex; gap: 0.5rem; justify-content: center; width: 100%;">
                <a href="${profileData.hero.resumeLink}" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; flex: 1;" target="_blank">
                  Resume PDF
                </a>
                <a href="#contact" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1rem; flex: 1;">
                  Connect
                </a>
              </div>
            </div>

            <!-- Stats Grid -->
            <div class="about-stats-grid">
              ${highlightsHtml}
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
