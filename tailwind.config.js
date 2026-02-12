/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a25',
          600: '#252533',
          500: '#2f2f40',
        },
        accent: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          dark: '#5b21b6',
          glow: 'rgba(124, 58, 237, 0.3)',
        },
        danger: {
          DEFAULT: '#ef4444',
          dark: '#dc2626',
        },
        success: {
          DEFAULT: '#10b981',
          dark: '#059669',
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.15)',
        'glow-lg': '0 0 40px rgba(124, 58, 237, 0.25)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
