module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Bebas Neue',
    },
    container: {
      height: {
        DEFAULT: '100vh',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        about: "url('./assets/mc-pesas.jpg')",
      },
    },
  },
  plugins: [],
};
