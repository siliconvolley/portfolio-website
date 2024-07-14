/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-100": "var(--clr-dark-100)",
        "dark-300": "var(--clr-dark-300)",
        "dark-400": "var(--clr-dark-400)",
        "dark-500": "var(--clr-dark-500)",
        "light-100": "var(--clr-light-100)",
        "light-300": "var(--clr-light-300)",
        "primary-100": "var(--clr-primary-100)",
        "primary-200": "var(--clr-primary-200)",
      },
    },
    fontFamily: {
      sans: ["Helvetica", "Inter"],
    },
  },
  plugins: [],
};
