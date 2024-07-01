import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      animation: {
        "scroll-up": "scrollUp 12s cubic-bezier(0.55, 0, 0.2, 1) infinite",
        "drop-down": "dropDown 400ms ease-in-out forwards",
        "close-up": "closeUp 400ms ease-in-out forwards"
      },
      keyframes: {
        scrollUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "12.5%": {
            transform: "translateY(-1.75rem)",
          },
          "25%": {
            transform: "translateY(-3.5rem)",
          },
          "37.5%": {
            transform: "translateY(-5.25rem)",
          },
          "50%": {
            transform: "translateY(-7rem)",
          },
          "62.5%": {
            transform: "translateY(-8.75rem)",
          },
          "75%": {
            transform: "translateY(-10.5rem)",
          },
          "87.5%": {
            transform: "translateY(-12.25rem)",
          },
          "100%": {
            transform: "translateY(-12.25rem)",
          },
        },
        dropDown: {
          "0%": {
            height: "0%"
          },
          "100%": {
            height: "100%"
          },
        },
        closeUp: {
          "0%": {
            height: "100%"
          },
          "100%": {
            height: "0%"
          }
        }
      },
    },
  },
  plugins: [],
};
export default config;
