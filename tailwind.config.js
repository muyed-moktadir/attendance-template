/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#cc5e0a",

          "secondary": "#9ebae2",

          "accent": "#87e5e0",

          "neutral": "#312136",

          "base-100": "#ffffff",

          "info": "#8B9CE4",

          "success": "#1CCA84",

          "warning": "#9C6011",

          "error": "#E4645E",
        },
      },
      {
        dark: {
          primary: "#9b00d3",

          secondary: "#c0c5f7",

          accent: "#e6e6fa",

          neutral: "#2F2730",

          "base-100": "#FFFFFF",

          info: "#97AEE2",

          success: "#1CD964",

          warning: "#B18906",

          error: "#ED4551",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
