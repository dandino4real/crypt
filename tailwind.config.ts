import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'card-bg': "url('/wallet-bg-5.png')",

      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        'text-light': '#000000', // Light mode text color
        'text-dark': '#FFFFFF', // Dark mode text color
        'text-modern': '#FF00FF', // Modern mode text color (example)
        'bg-light': '#FFFFFF', // Light mode background color
        'bg-dark': '#0A0C0F', // Dark mode background color
        light_gray: "#26304E",
        dark: "#0A0C0F",
        primary: "#0025A4",
        primary1: "#2E5FFF",
        'primary-hover': "#1e4ac2",
        'input-label': "#949DB7",
        'input-background': "#5275EC",
        'border-bottom': "#95ABF3",
        link: "#5275EC",
        'link-hover': "#7592F0",
      },
      gradientColorStops: {
        'start-color': "#97ABFF",
        'end-color': "#123597",
      },
    },
  },
  plugins: [
    require("daisyui"),
    nextui({
      addCommonColors: true, // Enabling common colors
      themes: {
        light: {
          layout: {},
          colors: {},
        },
        dark: {
          layout: {},
          colors: {},
        },
        modern: {
          extend: "dark",
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
        },
      },
    }),
  ],
};

export default config;
