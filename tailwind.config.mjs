/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: 'rgb(var(--color-secondary))',
        "background-light": "rgb(var(--background-light))",
        "background-dark": "rgb(var(--background-dark))",
        "color-light": "rgb(var(--color-light))",
        "color-dark": "rgb(var(--color-dark))",
      },
      spacing: {
        "header-height": "100px",
        "footer-height": "70px",
        "content-px": "6vw",
        "space-p":'5vh'
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
