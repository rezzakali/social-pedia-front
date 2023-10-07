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
  },
  plugins: [],
});
