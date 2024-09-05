/** @type {import('tailwindcss').Config} */
export default {
  content: ['./source/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      padding: '32px',
      center: true,
    },
    fontSize: {
      base: ['16px', '150%'],
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

