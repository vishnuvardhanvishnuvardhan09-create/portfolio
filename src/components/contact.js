/**
 * Contact Section Component
 * Provides direct mailto action, one-click email clipboard copy with toast feedback,
 * and social profiles for LinkedIn and GitHub (with placeholder indicators).
 * 
 * Strict Privacy Compliant: NO phone number, NO home address, NO DOB, NO father's name.
 */

import { profileData } from '../data/profile.js';

export function renderContact() {
  const { contact } = profileData;
  const mailtoUrl = `mailto:${contact.email}?subject=Opportunity%20Discussion%20-%20Embedded%20Systems%20Role&body=Hi%20Vishnu,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20Embedded%20Systems%20opportunity.`;

  return `
    <section class="section" id="contact" aria-label="Contact Vishnu Vardhan">
      <div class="container">
        <div class="section-header reveal-on-scroll" style="text-align: center; margin-left: auto; margin-right: auto;">
          <div class="section-tag">${contact.sectionTag}</div>
          <h2 class="section-title">${contact.title}</h2>
          <p class="section-subtitle">
            ${contact.subtitle}
          </p>
        </div>

        <div class="contact-wrapper reveal-on-scroll delay-1">
          <div class="contact-card">
            
            <!-- Email Display & Copy Box -->
            <div class="contact-email-box">
              <div>
                <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.35rem;">
                  Primary Direct Email
                </div>
                <div class="contact-email-text" id="email-address-text">${contact.email}</div>
              </div>

              <button class="copy-email-btn" id="copy-email-btn" aria-label="Copy email address to clipboard">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span id="copy-btn-text">Copy Address</span>
              </button>
            </div>

            <!-- Action Buttons Grid -->
            <div class="contact-actions-grid">
              <!-- Send Email Mailto CTA -->
              <a href="${mailtoUrl}" class="btn btn-primary" style="justify-content: center;">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Send Email
              </a>

              <!-- LinkedIn Profile Button -->
              <a href="${contact.linkedin}" class="social-link-btn" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile: Vishnu Vardhan D">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>

              <!-- GitHub Profile Button -->
              <a href="${contact.github}" class="social-link-btn" target="_blank" rel="noopener noreferrer" title="GitHub Profile: vishnuvardhanvishnuvardhan09-create">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            </div>

            <p class="contact-footer-note">
              ${contact.responseExpectation} • Based in ${contact.locationDisplay}
            </p>

          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Initialize Clipboard Copy interaction
 */
export function initContactInteractions() {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const toast = document.getElementById('toast');

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(profileData.contact.email);
        
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 3000);
        }

        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy Address';
        }, 2500);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = profileData.contact.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 3000);
        }
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy Address';
        }, 2500);
      }
    });
  }
}
