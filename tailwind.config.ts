const { fontFamily } = require("tailwindcss/defaultTheme");
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        openSans: ["var(--font-openSans)", ...fontFamily.sans],
        josefinSans: ["var(--font-josefin-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.sans],
      },
      fontSize: {
        xs: ['0.75rem', {
          lineHeight: '1rem',
          fontWeight: '200',
        }],
        sm: ['0.875rem', {
          lineHeight: '1.25rem',
          fontWeight: '300',
        }],
        base: ['1.125rem', {
          lineHeight: '1.5rem',
          fontWeight: '400',
        }],
        lg: ['1.35rem', {
          lineHeight: '1.75rem',
          fontWeight: '500',
        }],
        xl: ['1.62rem', {
          lineHeight: '2rem',
          fontWeight: '600',
        }],
        '2xl': ['1.944rem', {
          lineHeight: '2.5rem',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        '3xl': ['2.333rem', {
          lineHeight: '3rem',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        '4xl': ['2.799rem', {
          lineHeight: '3.5rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        '5xl': ['3.359rem', {
          lineHeight: '4rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        '6xl': ['3.815rem', {
          lineHeight: '7rem',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        successive: {
          DEFAULT: "hsl(var(--successive))",
          foreground: "hsl(var(--successive-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        stroke: {
          DEFAULT: "hsl(var(--stroke))",
        },
        typeface: {
          DEFAULT: "hsl(var(--typeface-1))",
          1: "hsl(var(--typeface-1))",
          2: "hsl(var(--typeface-2))",
          3: "hsl(var(--typeface-3))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          1: "hsl(var(--card-1))",
          2: "hsl(var(--card-2))",
          3: "hsl(var(--card-3))",
          4: "hsl(var(--card-4))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        'out': '1512px',
        // => @media (min-width: 1512px) { ... }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        wobble: {
          '0%': { transform: 'rotate(90deg)' },
          '15%': { transform: 'rotate(80deg)' },
          '30%': { transform: 'rotate(100deg)' },
          '45%': { transform: 'rotate(85deg)' },
          '60%': { transform: 'rotate(95deg)' },
          '75%': { transform: 'rotate(88deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        reveal : {
          '0%': { transform: 'translate(0,100%)'},
          '100%': { transform: 'translate(0,0)' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        wobble: 'wobble 1s ease-in-out',
        reveal: 'reveal 1.1s linear'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config