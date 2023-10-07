import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Rubik"', ' sans-serif'],
      },
    },
    colors: {
      // DARK
      darkBg: '#242526',
      darkGray: '#3a3b3c',
      darkText: '#e4e6eb',
      // LIGHT
      lightGray: '#f0f2f5',
      lightBlue: '#f0f2f5',
    },
    screens: {
      sm: '320px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
});
