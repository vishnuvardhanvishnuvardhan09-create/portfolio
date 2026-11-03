# D Vishnu Vardhan - Embedded Systems Engineer Portfolio

A modern, high-performance, single-page portfolio website engineered for **D Vishnu Vardhan**, an Electronics and Communication Engineering student targeting **Embedded Systems, Firmware Engineering, and Linux Kernel Internals** roles.

Featuring an interactive **Three.js 3D Microcontroller on a dark PCB board with glowing cyan traces and pulsing real-time data-flow lights**, calm aesthetic layout, subtle scroll reveals, and 3D hover-tilt interactions.

---

## 🚀 Live Demo & Tech Stack

- **Framework**: Vite + Vanilla Modern JavaScript (ES Modules)
- **3D Graphics**: Three.js (Procedural 32-bit MCU chip, ENIG solder pads, gull-wing pins, PCB copper traces, pulsing data photon packets)
- **Styling**: Modern CSS3 (CSS Variables, Flexbox/CSS Grid, Glassmorphism, 3D CSS transforms)
- **Typography**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Technical tags)
- **Performance**: Lazy-loaded 3D WebGL scene, capped 2x pixel ratio, visibility API pause on hidden tabs, zero backend requirements, Lighthouse 90+ optimized.

---

## 📁 Project Structure

All textual content is decoupled into standalone data files under `src/data/` so you can edit your profile details, skills, and projects without touching any 3D rendering or UI code:

```text
portfolio/
├── index.html                  # Main HTML with complete SEO, Open Graph & accessibility tags
├── package.json                # Dependencies and build scripts
├── vite.config.js              # Vite configuration with chunk splitting
├── public/
│   ├── favicon.svg             # Glowing silicon chip SVG favicon
│   └── resume.pdf              # Your downloadable resume (PDF format)
├── src/
│   ├── data/
│   │   ├── profile.js          # Bio, contact, education, workshops, social links
│   │   ├── skills.js           # Grouped technical skills (Embedded C, Linux, etc.)
│   │   └── projects.js         # Project cards (Problem, What I Did, Tools, Result)
│   ├── components/
│   │   ├── navbar.js           # Sticky header & mobile drawer
│   │   ├── hero.js             # Hero headline, CTAs & 3D canvas container
│   │   ├── about.js            # Recruiter-focused career narrative & stats
│   │   ├── skills.js           # 5 grouped skill cards with 3D tilt on hover
│   │   ├── projects.js         # 3 detailed technical project cards
│   │   ├── education.js        # Education timeline & PCB workshop card
│   │   ├── contact.js          # Email copy button, mailto action & social buttons
│   │   └── footer.js           # Copyright notice & back-to-top button
│   ├── three/
│   │   └── pcbScene.js         # 3D Microcontroller WebGL scene & animation loop
│   ├── styles/
│   │   ├── main.css            # Base styles, color palette, buttons
│   │   ├── hero.css            # Hero grid, status badge, loader skeleton
│   │   ├── components.css      # Component layouts & mobile responsiveness (360px+)
│   │   └── animations.css      # Scroll reveals & reduced motion rules
│   └── main.js                 # App mount & lazy-load initialization
└── README.md
```

---

## 🛠️ Getting Started (Local Development)

### 1. Prerequisites
Ensure Node.js (v18 or higher) is installed on your computer.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed in your terminal).

### 4. Build for Production
```bash
npm run build
```
This generates a minified, production-ready `dist/` directory ready for deployment.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Your Content

### 1. Update Profile & Contact Links
Open `src/data/profile.js`:
- Replace the placeholder LinkedIn URL:
  ```javascript
  linkedin: "https://www.linkedin.com/in/your-actual-profile",
  ```
- Replace the placeholder GitHub URL:
  ```javascript
  github: "https://github.com/your-actual-username",
  ```
- Edit your bio, education details, or workshop achievements.

### 2. Replace Placeholder Projects
Open `src/data/projects.js`:
- Each project object has fields for:
  - `title`: Project title
  - `problem`: The core engineering challenge
  - `whatIDid`: Array of bullet points describing your technical solution
  - `tools`: Array of MCU families, protocols, and tools used
  - `result`: Quantifiable outcomes (e.g. latency, memory reduction)
  - `githubUrl`: Your GitHub repository link

### 3. Add Your Real Resume PDF
1. Save your finalized resume as `resume.pdf`.
2. Place it in the `public/` directory (replacing `public/resume.pdf`).
3. The "Download resume" button in the Hero section and Navbar will automatically serve your PDF file.

---

## 🌐 Deploy to the Web (Free Public Link)

### Option A: Deploy to Vercel (Recommended)
1. Push your repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Embedded Systems Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select your portfolio repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Within 60 seconds, you will receive a live public URL (e.g., `https://vishnu-vardhan.vercel.app`).

### Option B: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Select **"Import from Git"** and choose your repository.
3. Set the build command to `npm run build` and publish directory to `dist`.
4. Click **"Deploy Site"**.

---

## 🔒 Privacy Guarantee
This portfolio strictly adheres to privacy standards:
- **No** father's name
- **No** date of birth
- **No** home address
- **No** phone number

Only professional email communication (`v6562257@gmail.com`) and social profiles are included.

---

## 📄 License
© 2026 D Vishnu Vardhan. All rights reserved.
