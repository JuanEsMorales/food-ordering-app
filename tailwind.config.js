/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffa400ff',
        celestial: '#009ffdff',
        royal: '#2a2a72ff',
        raisinBlack: '#232528ff',
        alice: '#eaf6ffff'
      }
    },
  },
  plugins: [],
};
