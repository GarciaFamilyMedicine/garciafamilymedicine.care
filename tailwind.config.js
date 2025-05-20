/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--page-bg)',
        foreground: 'var(--text-color)',
      },
      fontFamily: {
        sans: ['var(--font-argentum)'],
        sumana: ['var(--font-sumana)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
