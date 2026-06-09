# Erick Yorzeth Masis Cavero | QMS Automation Portfolio

React portfolio for presenting production-oriented ETQ Reliance, QMS automation, integrations, validation mindset, and regulated systems work.

## What This Shows

- Animated hero with dynamic positioning phrases.
- Dark mode and light mode.
- English / Spanish language switch.
- Recruiter-focused value proposition with remote and nearshore positioning.
- Interactive "My life dashboard" cards with experience, rate, availability, and languages.
- Real-life success-case showcase with progressive disclosure for challenge, solution, and impact.
- Skill level grid for platforms, languages, tools, and engineering methods.
- Live proof section with GitHub public API data, Costa Rica time, CV, certificates, email, and WhatsApp.
- ETQ Reliance certifications and downloadable CV.
- Contact form that builds a ready-to-send email.
- Public technical writing project linked from `../ETQ Scripts Personal documentation`.
- Hidden profile-photo interaction with an original conga-style rhythm loop.

## Architecture

```text
src/
├── App.jsx
├── App.module.css
├── main.jsx
├── reset.css
├── assets/
│   ├── profile.jpg
│   └── qms-automation-hero.png
├── components/
│   ├── AnimatedSection.jsx
│   ├── BentoSkills.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── EasterEggModal.jsx
│   ├── EtqGuide.jsx
│   ├── ExperienceTimeline.jsx
│   ├── Hero.jsx
│   ├── LifeDashboard.jsx
│   ├── LiveProof.jsx
│   ├── Navbar.jsx
│   └── SuccessShowcase.jsx
└── data/
    └── portfolioData.js
```

## Stack

- React
- Vite
- CSS Modules
- Framer Motion
- Functional components and hooks

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:5173
```

## Build

```bash
npm run build
```
