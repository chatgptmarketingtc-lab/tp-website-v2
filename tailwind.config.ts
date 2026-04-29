import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tp-blue': {
          50:  '#EEEEFF',
          100: '#D8D8FA',
          200: '#B5B4F2',
          300: '#8E8DE8',
          400: '#6C6BDE',
          500: '#4B4AD5',
          600: '#3C3BB5',
          700: '#2E2D96',
          800: '#212077',
          900: '#161558',
        },
        'tp-violet': {
          50:  '#FAF5FE',
          500: '#A461D8',
          700: '#703A9E',
          900: '#3E1C64',
        },
        'tp-amber': {
          50:  '#FFFBEB',
          500: '#F5B832',
          700: '#B47D10',
        },
        'tp-slate': {
          0:   '#FFFFFF',
          50:  '#FAFAFB',
          100: '#F1F1F5',
          200: '#E2E2EA',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#717179',
          600: '#545460',
          700: '#454551',
          800: '#2C2C35',
          900: '#171725',
        },
        'tp-success': '#10B981',
        'tp-warning': '#F59E0B',
        'tp-error':   '#E11D48',
      },
      fontFamily: {
        display: ['Mulish', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(40px,5.6vw,56px)', { lineHeight: '1.14', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display':    ['clamp(36px,4.6vw,48px)', { lineHeight: '1.17', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1':         ['36px', { lineHeight: '44px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2':         ['30px', { lineHeight: '38px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3':         ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'h4':         ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'h5':         ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'body-xl':    ['20px', { lineHeight: '32px' }],
        'body-lg':    ['18px', { lineHeight: '28px' }],
        'body':       ['16px', { lineHeight: '24px' }],
        'body-sm':    ['14px', { lineHeight: '20px' }],
        'meta':       ['13px', { lineHeight: '18px' }],
      },
      borderRadius: {
        'tp-sm':  '6px',
        'tp-md':  '10px',
        'tp-card': '20px',
        'tp-hero': '24px',
        'tp-pill': '42px',
      },
      boxShadow: {
        'tp-xs': '0 1px 2px 0 rgba(23,23,37,0.04)',
        'tp-sm': '0 1px 3px rgba(23,23,37,0.08)',
        'tp-md': '0 4px 8px -2px rgba(23,23,37,0.08)',
        'tp-lg': '0 12px 24px -4px rgba(23,23,37,0.10)',
        'tp-xl': '0 20px 40px -8px rgba(23,23,37,0.14)',
      },
      maxWidth: {
        'wrap': '1240px',
      },
      spacing: {
        'section':       '96px',
        'section-tight': '64px',
        'section-mob':   '56px',
        'section-mob-tight': '40px',
      },
    },
  },
  plugins: [],
}

export default config
