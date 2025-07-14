/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '768px'},
      },
      colors: {
        background: 'var(--page-bg)',
        foreground: 'var(--text-color)',
        'primary-light': 'var(--primary-light)',
        accent: 'var(--accent)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-dark': 'var(--secondary-dark)',
      },
      fontFamily: {
        sans: ['var(--font-argentum)', 'sans-serif'],
        sumana: ['var(--font-sumana)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};