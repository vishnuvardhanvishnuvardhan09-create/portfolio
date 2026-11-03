/**
 * Education & Workshops Component
 * Displays the official ACADEMIC QUALIFICATIONS table directly from the resume,
 * followed by detailed coursework cards and the PCB Design workshop.
 */

import { profileData } from '../data/profile.js';

export function renderEducation() {
  const { educationTable, education, workshops } = profileData;

  // 1. Official Table Rows matching the resume format
  const tableRowsHtml = educationTable.map(row => `
    <tr class="table-row-${row.type}">
      <td class="col-course">
        <span class="course-badge">${row.course}</span>
      </td>
      <td class="col-institution">
        <strong>${row.institution}</strong>
      </td>
      <td class="col-board">
        <span>${row.board}</span>
      </td>
      <td class="col-year">
        <span class="year-pill">${row.year}</span>
      </td>
      <td class="col-aggregate">
        <span class="score-highlight">${row.aggregate}</span>
      </td>
    </tr>
  `).join('');

  // 2. Timeline cards
  const educationCardsHtml = education.map((edu, index) => {
    return `
      <div class="timeline-item" id="edu-card-${index}">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <span class="badge ${edu.grade.includes('8.67') ? 'badge-amber' : ''}" style="margin-bottom: 0.4rem; font-size: 0.75rem;">
                ${edu.status}
              </span>
              <h3 class="timeline-degree">${edu.degree}</h3>
            </div>
            <span class="timeline-period">${edu.period}</span>
          </div>

          <div class="timeline-institution">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; vertical-align: -2px; margin-right: 4px; stroke: var(--accent-cyan);">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <strong>${edu.institution}</strong>
            ${edu.affiliation ? `<div class="timeline-affiliation">${edu.affiliation}</div>` : ''}
          </div>

          <div class="timeline-grade-badge grade-cyan">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Aggregate: <strong>${edu.grade}</strong></span>
          </div>

          <p class="timeline-desc" style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.85rem; line-height: 1.6;">
            ${edu.description}
          </p>

          <ul class="timeline-focus-list">
            ${edu.keyFocus.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }).join('');

  // 3. Workshop Card
  const workshopsHtml = workshops.map(ws => `
    <div class="workshop-card">
      <div class="workshop-header">
        <div>
          <span class="badge badge-amber" style="margin-bottom: 0.5rem;">${ws.badge}</span>
          <h3 style="font-size: 1.45rem; color: var(--text-primary); margin-bottom: 0.35rem;">${ws.title}</h3>
          <div style="font-size: 0.95rem; color: var(--accent-amber); font-family: var(--font-mono);">
            🏛️ ${ws.organization} • 📅 ${ws.date}
          </div>
        </div>
      </div>

      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65; margin-top: 1rem;">
        ${ws.description}
      </p>

      <div class="workshop-topics-grid">
        ${ws.topics.map(topic => `
          <div class="workshop-topic-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${topic}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  return `
    <section class="section" id="education" aria-label="Academic Qualifications and Education">
      <div class="container">
        
        <!-- Header -->
        <div class="section-header">
          <div class="section-tag">Scholastic Records</div>
          <h2 class="section-title">Education & Qualifications</h2>
          <p class="section-subtitle">
            Formal training in Electronics and Communication Engineering with consistent academic performance.
          </p>
        </div>

        <!-- Official Academic Qualifications Table (from resume) -->
        <div class="academic-table-container glass-card" style="margin-bottom: 3.5rem;">
          <div class="academic-table-header">
            <div class="table-title-row">
              <div class="blue-accent-bar"></div>
              <h3 class="table-main-title">ACADEMIC QUALIFICATIONS</h3>
            </div>
          </div>

          <div class="table-responsive-wrapper">
            <table class="academic-table" aria-label="Official Academic Qualifications Table">
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Institution</th>
                  <th scope="col">Board / University</th>
                  <th scope="col">Year of Completion</th>
                  <th scope="col">Aggregate</th>
                </tr>
              </thead>
              <tbody>
                ${tableRowsHtml}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Detailed Timeline Stream -->
        <div class="section-header" style="margin-bottom: 2rem;">
          <h3 style="font-size: 1.6rem; color: var(--text-primary); margin-bottom: 0.5rem;">Detailed Coursework & Milestones</h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary);">Comprehensive breakdown of subjects, engineering labs, and technical foundations.</p>
        </div>

        <div class="timeline-container">
          ${educationCardsHtml}
        </div>

        <!-- Workshops Subsection -->
        <div style="margin-top: 5rem;">
          <div class="section-header">
            <div class="section-tag" style="background: var(--accent-amber-dim); color: var(--accent-amber); border-color: rgba(255,180,84,0.3);">
              Technical Training
            </div>
            <h2 class="section-title">Workshops Attended</h2>
            <p class="section-subtitle">
              Intensive practical training in industry-standard printed circuit board prototyping and fabrication.
            </p>
          </div>

          <div style="max-width: 860px; margin: 0 auto;">
            ${workshopsHtml}
          </div>
        </div>

      </div>
    </section>
  `;
}
