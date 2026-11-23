import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#D61F26",
          dark: "#A8141A",
          soft: "#FDECEC",
        },
        ink: {
          DEFAULT: "#111418",
          soft: "#1B1F26",
          muted: "#5B6470",
        },
        surface: "#F5F6F8",
        line: "#E5E7EB",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,40,.06), 0 4px 16px rgba(16,24,40,.06)",
      },
    },
  },
  plugins: [],
};

export default config;
