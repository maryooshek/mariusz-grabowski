/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f2ece0',
          warm: '#ebe4d4',
          dark: '#dfd6c4',
        },
        ink: {
          DEFAULT: '#1a1510',
          mid: '#5c5048',
          light: '#9c8f83',
          ghost: '#d4c9bc',
        },
        rule: '#c4b8a8',
        field: {
          DEFAULT: '#3b5834',
          light: '#4d7043',
          pale: '#eaf0e7',
        },
        gold: {
          DEFAULT: '#b08030',
          light: '#c8983c',
          pale: '#f5ecd8',
        },
        surface: '#f8f3e8',
        dark: {
          DEFAULT: '#171210',
          surface: '#211a12',
          border: '#30241a',
          text: '#efe8d8',
          mid: '#a89880',
          muted: '#6b5c4c',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      animation: {
        'line-grow': 'lineGrow 0.8s ease forwards',
      },
      keyframes: {
        lineGrow: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
