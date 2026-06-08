export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nala: {
          bg:      '#0F0A1E',
          surface: '#1A1330',
          card:    '#231B42',
          purple:  '#7C3AED',
          violet:  '#A855F7',
          pink:    '#EC4899',
          text:    '#E2D9F3',
          muted:   '#7A6FA8',
        }
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
