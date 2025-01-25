/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          50: "#f3faf9",
          100: "#d5f2ee",
          200: "#ace3dc",
          300: "#7acec5",
          400: "#4eb3ab",
          500: "#359792",
          600: "#287976",
          700: "#236260",
          800: "#204f4f",
          900: "#1f4242",
          950: "#103031",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          50: "#faf7fc",
          100: "#f4edfa",
          200: "#e8dbf3",
          300: "#d9bee9",
          400: "#c297db",
          500: "#a76ec7",
          600: "#8a4faa",
          700: "#733f8c",
          800: "#5f3573",
          900: "#512f60",
          950: "#401c4f",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
