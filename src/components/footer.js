/**
 * Footer Component
 * Minimalist footer with copyright, back-to-top anchor, and circuit aesthetic details.
 */

import { profileData } from '../data/profile.js';

export function renderFooter() {
  return `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-content">
          <div class="footer-left">
            <div class="footer-copy">
              ${profileData.footer.copyright}
            </div>
            <div class="footer-tagline">
              ${profileData.footer.tagline}
            </div>
          </div>

          <button class="back-to-top-btn" id="back-to-top-btn" aria-label="Back to top of page">
            <span>Back to Top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  `;
}

export function initFooterInteractions() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
