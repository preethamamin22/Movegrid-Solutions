/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy:       '#081426',
        'navy-mid': '#10233F',
        accent:     '#246BFD',
        highlight:  '#36CFFF',
        surface:    '#F7F9FC',
        ink:        '#17243A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
