/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        sosmall: "400px"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e894e6",

          secondary: "#00000",

          accent: "#18f6f9",

          neutral: "#2a2432",

          "base-100": "#ffffff",

          info: "#3f9fe9",

          success: "#81e4b4",

          warning: "#eab043",

          error: "#f04279"
        }
      }
    ]
  }
};
