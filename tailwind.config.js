module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          fontFamily: {
              'title': ['Montserrat', 'sans-serif'],
              'mono': ['Fira Mono', 'monospace']
          },
          backgroundImage: theme => ({
              'me': "../src/assets/me.png')",
          }), 
          textColor: theme => theme('colors'),
          backgroundColor: {
              'success': '#64ffda',
              'dark-navy': '#020c1b',
              'navy': '#0a192f',
              'light-navy': '#112240',
              'lightest-navy': '#233554',
              'navy-shadow': 'rgba(2,12,27,0.7)',
              'dark-slate': '#495670',
              'slate': '#8892b0',
              'light-slate': '#a8b2d1',
              'lightest-slate': '#ccd6f6',
          },
          textColor: {
              'success': '#64ffda',
              'dark-navy': '#020c1b',
              'navy': '#0a192f',
              'light-navy': '#112240',
              'lightest-navy': '#233554',
              'navy-shadow': 'rgba(2,12,27,0.7)',
              'dark-slate': '#495670',
              'slate': '#8892b0',
              'light-slate': '#a8b2d1',
              'lightest-slate': '#ccd6f6',
          },
          borderColor: theme => ({
              ...theme('colors'),
              DEFAULT: theme('colors.gray.300', 'currentColor'),
              'success': '#64ffda',
              'dark-slate': '#495670',
              'slate': '#8892b0',
              'light-slate': '#a8b2d1',
              'lightest-slate': '#ccd6f6',
              'dark-navy': '#020c1b',
              'navy': '#0a192f',
              'light-navy': '#112240',
              'lightest-navy': '#233554',
              'navy-shadow': 'rgba(2,12,27,0.7)',
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