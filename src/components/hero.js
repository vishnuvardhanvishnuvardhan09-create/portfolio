/**
 * Hero Section Component
 * Futuristic Hero featuring D Vishnu Vardhan's clean profile photo,
 * recruiter-focused headline, action CTAs, and interactive 3D Holographic Silicon Core.
 */

import { profileData } from '../data/profile.js';

export function renderHero() {
  return `
    <section class="hero-section" id="hero" aria-label="Introduction">
      <div class="container">
        <div class="hero-grid">
          
          <!-- Hero Text Content -->
          <div class="hero-content reveal-on-scroll">
            
            <!-- Profile Avatar & Engineering Badge -->
            <div class="hero-profile-row">
              <div class="hero-avatar-wrapper">
                <img src="${profileData.profileImage}" alt="${profileData.name}" class="hero-avatar-img" />
                <div class="avatar-pulse-ring" aria-hidden="true"></div>
              </div>

              <div class="hero-status-pill">
                <span class="status-indicator" aria-hidden="true"></span>
                <span class="status-text">${profileData.hero.badge}</span>
              </div>
            </div>

            <h1 class="hero-title">
              Hi, I'm <span class="name-highlight">${profileData.name}</span>
            </h1>

            <div class="hero-subtitle">
              <span>${profileData.title}</span>
            </div>

            <p class="hero-intro">
              ${profileData.hero.tagline}
            </p>

            <div class="hero-actions">
              <a href="#projects" class="btn btn-primary">
                ${profileData.hero.ctaPrimary}
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>

              <a href="${profileData.hero.resumeLink}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                ${profileData.hero.ctaSecondary}
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>

              <a href="#contact" class="btn btn-amber">
                Get In Touch
              </a>
            </div>

            <div class="hero-meta-strip">
              <div class="hero-meta-item">
                <span class="hero-meta-label">Domain</span>
                <span class="hero-meta-value">Embedded Systems</span>
              </div>
              <div class="hero-meta-item">
                <span class="hero-meta-label">Core Language</span>
                <span class="hero-meta-value">Embedded C</span>
              </div>
              <div class="hero-meta-item">
                <span class="hero-meta-label">OS Focus</span>
                <span class="hero-meta-value">Linux Internals</span>
              </div>
              <div class="hero-meta-item">
                <span class="hero-meta-label">Hardware</span>
                <span class="hero-meta-value">MCUs & PCB Design</span>
              </div>
            </div>
          </div>

          <!-- Hero 3D Holographic Silicon Core Canvas -->
          <div class="hero-canvas-wrapper" aria-label="Interactive 3D Holographic Microcontroller Core">
            <div class="canvas-header-badge">
              <span class="canvas-core-tag">HOLOGRAPHIC 3D MCU CORE</span>
              <span class="canvas-live-tag">● 168 MHz CLOCK</span>
            </div>

            <div class="canvas-loader" id="canvas-loader">
              <div class="loader-circuit-spinner" aria-hidden="true"></div>
              <span class="loader-text">Synthesizing 3D Quantum Core...</span>
            </div>

            <div class="canvas-container" id="pcb-canvas-container"></div>

            <div class="canvas-hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke-width="2"/>
                <circle cx="12" cy="12" r="3" stroke-width="2"/>
              </svg>
              <span>Move mouse to orbit • Click canvas to pulse energy</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
