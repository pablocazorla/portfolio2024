/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF00FF",
        secondary: "#113",
        "background-light": "#d4ddf1",
        "background-dark": "#13141a",
        "color-light": "#001122",
        "color-dark": "#e4ecf7",
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
