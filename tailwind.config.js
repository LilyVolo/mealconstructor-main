/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',   // Минимальная ширина экрана для sm: (работает с 640px и больше)
      md: '768px',   // Минимальная ширина экрана для md: (работает с 768px и больше)
      lg: '1024px',  // Минимальная ширина экрана для lg: (работает с 1024px и больше)
      xl: '1280px',  // Минимальная ширина экрана для xl: (работает с 1280px и больше)
    },    
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        heroGradient: 'linear-gradient(90deg, rgba(9,108,17,1) 3%, rgba(47,163,95,1) 15%, rgba(129,227,126,0.9892550770308123) 37%, rgba(220,227,126,0.9500393907563025) 75%);',
        gradient: 'linear-gradient(90deg, rgb(9,108,17) 3%, rgb(47,163,95) 15%, rgb(129,227,126) 37%, rgb(220,227,126) 75%)'
      },
      colors: {
        myGreen: '#01260A',
        grayOpacity: 'rgba(107, 114, 128, 0.5)'
      },
      keyframes: {
        'fade-in': {
          from: {
              opacity: 0
          },
          to: {
              opacity: 1
          }
        }
      },
      animation: {
        fadeIn: '.5s fade-in ease-in-out'
      },
    },
  },
  plugins: [],
}

