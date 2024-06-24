import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      animation: {
        "scroll-up": "scrollUp 12s cubic-bezier(0.55, 0, 0.2, 1) infinite",
        "drop-down": "dropDown 1s linear",
      },
      keyframes: {
        scrollUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "12.5%": {
            transform: "translateY(-2rem)",
          },
          "25%": {
            transform: "translateY(-4rem)",
          },
          "37.5%": {
            transform: "translateY(-6rem)",
          },
          "50%": {
            transform: "translateY(-8rem)",
          },
          "62.5%": {
            transform: "translateY(-10rem)",
          },
          "75%": {
            transform: "translateY(-12rem)",
          },
          "87.5%": {
            transform: "translateY(-14rem)",
          },
          "100%": {
            transform: "translateY(-14rem)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
