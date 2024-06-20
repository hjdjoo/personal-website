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
        "scroll-up": "scrollUp 10s cubic-bezier(0.55, 0, 0.2, 1) infinite",
      },
      keyframes: {
        scrollUp: {
          "0%": {
            transform: "translateY(0)",
          },
          "20%": {
            transform: "translateY(-2rem)",
          },
          "40%": {
            transform: "translateY(-4rem)",
          },
          "60%": {
            transform: "translateY(-6rem)",
          },
          "80%": {
            transform: "translateY(-8rem)",
          },
          "100%": {
            transform: "translateY(-10rem)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
