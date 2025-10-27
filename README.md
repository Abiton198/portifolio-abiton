
# Abiton Portfolio

A modern, responsive developer portfolio showcasing projects, skills, and experience. Built for clarity, performance, and credibility — with a focus on real work, not just pretty UI.

Live site: `https://portfolio-abiton.netlify.app/`

## 🔍 Overview

This portfolio is designed to:

* Present who I am and what I do in a clean, professional way.
* Highlight my strongest projects with context (problem → solution → tech → impact).
* Make it easy for potential clients, collaborators, or employers to contact me.
* Load fast and work on all screen sizes.

It’s deployed on Netlify for reliability and ease of updates.

---

## ✨ Features

### 🧑‍💻 About Me

A short, focused introduction: what I build, what I care about, and the kind of work I’m interested in.

### 🚀 Projects Showcase

Each featured project includes:

* Title and brief summary
* Core tech stack
* What makes it interesting / hard / valuable
* Links to live demo and/or source code (if public)

### 🛠 Tech Stack / Skills

Quick overview of tools and technologies I actually use in production.

### 📞 Contact / Call to Action

Can contact or reach out for work, collaboration, or questions.

### 📱 Fully Responsive

Mobile-first layout with smooth scaling up to desktop.

### ⚡ Performance Focus

Lightweight front-end bundle and static hosting for fast load times.

---

## 🏗 Tech Stack

**Frontend**

* React (component-driven UI)

  * Vite for fast local dev and optimized builds
 
* Tailwind CSS (utility-first responsive styling)

**Hosting / Deployment**

* Netlify (CI/CD from main branch)

**Tooling / Other**

* Modern ES modules
* Mobile-first responsive layout
* Reusable, self-contained components

---

## 📂 Project Structure

```txt
root
├─ public/               # Static assets (favicons, images, etc.)
├─ src/
│  ├─ components/        # Reusable UI components (Navbar, Footer, ProjectCard, etc.)
│  ├─ sections/          # Page sections (Hero, About, Projects, Contact)
│  ├─ data/              # Project data / skills data as JSON or JS objects
│  ├─ styles/            # Global styles or Tailwind config hooks
│  ├─ App.jsx            # Main app layout
│  └─ main.jsx           # Entry point / React DOM render
├─ package.json
├─ tailwind.config.js    # Tailwind customization
├─ postcss.config.js     # PostCSS pipeline for Tailwind
└─ vite.config.js        # (or similar build config)
```

---

## 🚦Getting Started (Local Development)

These steps assume Node.js and npm are installed.

1. **Clone the repo**

   ```bash
   git clone git@github.com:Abiton198/portifolio-abiton.git
   cd <portfolio-abiton>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run dev server**

   ```bash
   npm run dev
   ```

   * This spins up a local development server (typically on `http://localhost:5173` )for Vite 
   * Saves hot-reload automatically when you edit files in `src/`.

4. **Build for production**

   ```bash
   npm run build
   ```

   * Outputs an optimized production build to `/dist`.
   * Minified, tree-shaken, ready to deploy.

5. **Preview production build locally (optional, Vite only)**

   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

This project is deployed on Netlify.

Typical Netlify setup:

* Connect the GitHub repo.
* Set the build command:

  * `npm run build`
* Set the publish directory:

  * `dist` (Vite)
 
* Push to `main` → Netlify auto-builds and redeploys.


## 🤝 Contributing

This is a personal portfolio, so I'm not actively looking for outside contributors.
That said, feedback, suggestions, and opportunities are very welcome.

If you see an issue:

1. Open an Issue in the repo describing the bug / typo / layout problem.
2. Bonus: include screenshots or steps to reproduce.

---

## 📬 Contact

* 📧 Email: abitonp@gmail.com
* 💼 LinkedIn: https://www.linkedin.com/in/abiton-padera-232a6a9a/
* 🌍 Live Portfolio: https://portfolio-abiton.netlify.app/

If you’d like to collaborate, hire me, or ask about any of the projects on this site — reach out. I’m open to freelance, contract, or full-time work.

---

## 📄 License

This portfolio source code is provided for learning and reference.
Please do not clone and republish it as your own public portfolio.

If you’d like to reuse a specific pattern (project card component, leaderboard logic, onboarding flow logic, etc.), that’s cool — just credit.

---

