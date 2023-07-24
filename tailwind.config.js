/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#cc394a",

          secondary: "#97a3ed",

          accent: "#edc71e",

          neutral: "#252e37",

          "base-100": "#30324b",

          info: "#83a5dd",

          success: "#2db9a1",

          warning: "#f9920b",

          error: "#f9544e"
        }
      }
    ]
  }
};
