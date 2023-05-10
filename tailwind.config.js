module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Bebas Neue',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      },
      margin: {
        DEFAULT: '1rem',
      },
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
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        /*site: "url('./assets/bg3.jpg')",*/
        about: "url('./assets/mc-pesas.jpg')",
        /*services: "url('./assets/services.png')",*/
      },
    },
  },
  plugins: [],
};
