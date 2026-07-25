/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kis: {
          cream: '#FDFBF7',
          navy: '#1A2E44',
          border: '#E2E8F0',
          foreground: '#334155',
          primary: '#0F172A',
          'primary-foreground': '#FFFFFF',
          'muted-foreground': '#64748B'
        }
      },
      fontFamily: {
        'kis-headings': ['Inter', 'sans-serif'],
        'kis-body': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
