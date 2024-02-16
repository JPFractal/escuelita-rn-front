import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/mainComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/themes/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      sky: { "10": "#0B85C3", "40": "#F0F9FF" },
      pink: { "10": "#C11574", "40": "#FDF2FA" },
      green: { "10": "#009688" },
      white: { "0": "#FFF", "10": "#F2F4F7" },
      gray: {
        "0": "#101828",
        "10": "#344054",
        "20": "#667085",
        "30": "#D0D5DD",
        "32": "#D9D9D9",
        "35": "#EAECF0",
        "40": "#F2F4F7",
        "50": "#F9FAFB",
      },
      red: {
        "0": "#ff0000",
        "10": "#F60034",
      },
    },
  },
  plugins: [],
};

export default config;
