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
      }
    },
  },
  plugins: [],
}
export default config
