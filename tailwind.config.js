/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'shimmer': 'shimmer 2s infinite',
        'matrix-scroll': 'matrix-scroll 20s linear infinite',
        'typing': 'typing 2s steps(40, end)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' }
        },
        'matrix-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20px)' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        }
      }
    },
  },
  plugins: [],
}