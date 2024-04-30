/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    fontFamily: {
      intro: ['"Alata", sans-serif'],
      display: ['"Inconsolata", monospace']
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
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
      },
      animation: {
        'tracking-in-contract-bck-bottom': 'tracking-in-contract-bck-bottom 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'tracking-in-expand-fwd-top': 'tracking-in-expand-fwd-top 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both',
        'kenburns-top': 'kenburns-top 5s ease-out both',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'scale-in-hor-center': 'scale-in-hor-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        'tracking-in-contract-bck-bottom': {
          '0%': {
            'letter-spacing': '1em',
            '-webkit-transform': 'translateZ(400px) translateY(300px)',
            'transform': 'translateZ(400px) translateY(300px)',
            'opacity': '0',
          },
          '40%': {
            'opacity': '0.6',
          },
          '100%': {
            '-webkit-transform': 'translateZ(0) translateY(0)',
            'transform': 'translateZ(0) translateY(0)',
            'opacity': '1',
          },
        },
        'tracking-in-expand-fwd-top': {
          '0%': {
            'letter-spacing': '-0.5em',
            '-webkit-transform': 'translateZ(-700px) translateY(-500px)',
            'transform': 'translateZ(-700px) translateY(-500px)',
            'opacity': '0',
          },
          '40%': {
            'opacity': '0.6',
          },
          '100%': {
            '-webkit-transform': 'translateZ(0) translateY(0)',
            'transform': 'translateZ(0) translateY(0)',
            'opacity': '1',
          },
        },
        'kenburns-top': {
          '0%': {
            '-webkit-transform': 'scale(1) translateY(0)',
            'transform': 'scale(1) translateY(0)',
            '-webkit-transform-origin': '50% 16%',
            'transform-origin': '50% 16%',
          },
          '100%': {
            '-webkit-transform': 'scale(1.25) translateY(-15px)',
            'transform': 'scale(1.25) translateY(-15px)',
            '-webkit-transform-origin': 'top',
            'transform-origin': 'top',
          },
        },
        'scale-in-hor-center': {
          '0%': {
            '-webkit-transform': 'scaleX(0)',
            'transform': 'scaleX(0)',
            'opacity': '1',
          },
          '100%': {
            '-webkit-transform': 'scaleX(1)',
            'transform': 'scaleX(1)',
            'opacity': '1',
          },
        },
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')]
}