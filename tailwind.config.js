module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          fontFamily: {
              'title': ['Montserrat', 'sans-serif'],
              'mono': ['Fira Mono', 'monospace']
          },
          backgroundImage: theme => ({
            'home-background': "url('/images/home-background.jpg')"
          }), 
          backgroundColor: {
              'success': '#64ffda',
          },
          textColor: {
              'warning--text': '#E39400',
              'dark--text': '#4D4D4D',
          },
          borderColor: theme => ({
              'warning': '#FFB500',
          }),
          fontSize: {
              'xm': '0.8rem',
              'smallest': '0.5rem'
          },
          screens: {
              '2xs': { 'min': '330px', 'max': '474px' },
              'xs': { 'min': '475px', 'max': '639px' }
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}