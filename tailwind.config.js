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
          foreground: 'var(--kis-foreground)',
          border: 'var(--kis-border)',
          primary: 'var(--kis-primary)',
          'primary-foreground': 'var(--kis-primary-foreground)',
          muted: 'var(--kis-muted)',
          'muted-foreground': 'var(--kis-muted-foreground)',
          accent: 'var(--kis-accent)',
          navy: 'var(--kis-navy)',
          'navy-light': 'var(--kis-navy-light)',
          cream: 'var(--kis-cream)',
        }
      },
      fontFamily: {
        "kis-body": "var(--font-kis-body)",
        "kis-headings": "var(--font-kis-headings)",
      }
    },
  },
  plugins: [],
}
