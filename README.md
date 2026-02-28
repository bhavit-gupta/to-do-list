# 📝 To-Do List App

A beautiful, minimal, and high-performance To-Do List application designed to help you stay organized and focused. Built with a focus on modern aesthetics (Glassmorphism) and smooth user experience.

## 🚀 Live Demo
**Check out the live website here:** [Live Demo Link](https://bg-to-do-list.onrender.com)

## ✨ Features
- **Modern UI/UX**: Sleek dark mode with glassmorphism effects and neon accents.
- **Micro-animations**: Smooth transitions and hover effects for a premium feel.
- **Task Management**: Add, complete, and delete tasks with ease.
- **Persistence**: Your tasks are saved locally using `localStorage`—they won't disappear when you refresh!
- **Real-time Stats**: Track your progress with a dynamic stats bar (Total, Done, Pending).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack
- **HTML5**: Semantic structure.
- **Tailwind CSS**: Modern styling and layout.
- **JavaScript (Vanilla)**: Core logic and DOM manipulation.
- **Font Awesome**: Premium iconography.

## 📦 Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bhavit-gupta/to-do-list.git
   cd to-do-list
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build Tailwind CSS (Watch mode):**
   ```bash
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```

4. **Launch the app:**
   Simply open `src/index.html` in your browser or use a Live Server extension.

## 🌐 Deployment (Render)

This project is optimized for deployment as a **Static Site** on Render.

**Settings used:**
- **Branch:** `main`
- **Build Command:** `npm install && npx tailwindcss -i ./src/input.css -o ./src/output.css`
- **Publish Directory:** `src`
- **Environment Variables:** None required.

---
Built with ❤️ by [Bhavit Gupta](https://github.com/bhavit-gupta)
