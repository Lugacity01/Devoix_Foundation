import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#080312',
          navy: '#120726',
          purple: '#9D4EDD',
          violet: '#C77DFF',
          teal: '#9D4EDD',
          emerald: '#C77DFF',
          accent: '#7B2CBF',
          light: '#F8FAFC',
          card: '#0D071E',
          slate: '#334155',
          muted: '#94A3B8',
          border: '#2A1A4A',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'elevated': '0 12px 30px -4px rgba(15, 23, 42, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-16px) scale(1.015)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.12)' },
        },
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
        'text-gradient': 'text-gradient 3s ease infinite',
        marquee: 'marquee 15s linear infinite',
        shimmer: 'shimmer 2.5s infinite',
      },
    },
  },
  plugins: [],
}
export default config
