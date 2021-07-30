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
            'light': '#00000029',
            'lighter': '#E4E4E4',
            'lightest': '#F4F4F4',
            'warning--light': '#F29F05',
            'warning': '#FBA809',
            'warning--lighter': '#FEF5E6'
          },
          textColor: {
            'warning': '#E39400',
            'warning--light': '#F29F05',
            'dark': '#4D4D4D',
            'secondary': '#919191',
            'light': '#C9C9C9',
            'muted': '#4D4D4D',
            'ligher': '#707070'
          },
          borderColor: theme => ({
              'warning': '#FFB500',
              'warning--light': '#F29F05',
          }),
          fontSize: {
              'xm': '0.65rem',
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