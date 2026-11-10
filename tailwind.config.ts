import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FFFBF1',
          50: '#FFFFFF',
          100: '#FFFBF1',
          200: '#FFF7E6',
        },
        surface: {
          DEFAULT: '#FFF2D0',
          hover: '#FFEBC0',
          border: '#FFE3A8',
        },
        accent: {
          soft: '#FFB2B2',
          softLight: '#FFCCCC',
          primary: '#E36A6A',
          primaryDark: '#C94E4E',
        },
        ink: {
          primary: '#2D2424',
          muted: '#6B5B5B',
          subtle: '#8C7B7B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(227, 106, 106, 0.08)',
        'soft-md': '0 8px 24px -4px rgba(227, 106, 106, 0.12)',
        'soft-lg': '0 16px 40px -8px rgba(227, 106, 106, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
