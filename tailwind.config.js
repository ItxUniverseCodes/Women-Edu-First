/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5f0ff',
          100: '#ede5ff',
          200: '#daccff',
          300: '#bfa3ff',
          400: '#a07aff',
          500: '#8054f8',
          600: '#6b33ee',
          700: '#5a22d9',
          800: '#4b1db5',
          900: '#3e1a93',
        },
        midnight: '#0b0a1a',
        surface: '#12112a',
        card: '#1a1837',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'node-drift': 'nodeDrift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        nodeDrift: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '33%': { transform: 'translate(30px, -20px) scale(1.1)', opacity: '0.6' },
          '66%': { transform: 'translate(-15px, 30px) scale(0.9)', opacity: '0.4' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
