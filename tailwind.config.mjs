/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        "background-light": "rgb(var(--background-light))",
        "background-dark": "rgb(var(--background-dark))",
        "color-light": "rgb(var(--color-light))",
        "color-dark": "rgb(var(--color-dark))",
      },
      fontSize: {
        h1: "max(3rem, 8vw)",
        h1b: "max(3rem, 5vw)",
        h2: "max(2rem, 3vw)",
        lead: "max(1.2rem, 1.2vw)",
        sublead: "max(1rem, 1vw)",
        description: "max(1.2rem, 2vw)",
        subdescription: "max(1.2rem, 1.4vw)",
      },
      spacing: {
        "header-height": "100px",
        "footer-height": "60px",
        "content-px": "6vw",
        "space-p": "5vh",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
