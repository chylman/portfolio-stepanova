/** @type {import('tailwindcss').Config} */
export default {
  content: ['./source/**/*.{html,js}'],
  theme: {
    screens: {
      xl: '1440px',
    },
    container: {
      padding: '32px',
      center: true,
    },
    fontSize: {
      s: ['14px', '171%'],
      base: ['16px', '150%'],
      l: ['24px', '133%'],
      xl: ['32px', '137%'],
    },
    extend: {
      colors: {
        'hawkes-blue': '#D7DCE9',
        'periwinkle': '#CED3E1',
        'black-russian': '#141517',
        'ebony': '#2B303B',
        'east-bay': '#4A5368',
      },
      width: {
        '214px': '214px',
      },
      height: {
        '214px': '214px',
      }
    },
  },
  plugins: [],
}

