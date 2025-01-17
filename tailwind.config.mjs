/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ranga: ["var(--font-ranga-bold)"],
        roboto: ["var(--font-roboto-condensed)"],
      },
    },
  },
  plugins: [],
};
