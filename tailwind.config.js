const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3b82f6", // أزرق احترافي
          foreground: "#f4f4f5",
        },
        secondary: {
          DEFAULT: "#6366f1", // بنفسجي احترافي
          foreground: "#f4f4f5",
        },
        destructive: {
          DEFAULT: "#ef4444", // أحمر للتنبيهات
          foreground: "#fff1f2",
        },
        muted: {
          DEFAULT: "#f3f4f6", // رمادي فاتح
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#10b981", // أخضر احترافي
          foreground: "#f4f4f5",
        },
        popover: {
          DEFAULT: "#fff",
          foreground: "#18181b",
        },
        card: {
          DEFAULT: "#1e293b", // رمادي داكن للبطاقات
          foreground: "#f4f4f5",
        },
        dark: {
          DEFAULT: "#18181b",
          foreground: "#f4f4f5",
        },
      },
      borderRadius: {
      	xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
}