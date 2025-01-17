const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: {
    files: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.vue',
      './plugins/**/*.{js,ts}',
    ],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      red: {
        900: '#351008',
        800: '#7C2513',
        700: '#9F2F19',
        600: '#C23A1E',
        500: '#DE4527',
        400: '#E3674F',
        300: '#E98672',
        200: '#F1B3A7',
        100: '#F7D2CA',
        50: '#FCF0ED',
      },
      green: {
        800: '#040B09',
        700: '#1A392F',
        600: '#316654',
        500: '#209678',
        400: '#59B595',
        300: '#6AD0AD',
        200: '#7CD8BB',
        100: '#91DFC8',
        50: '#9EE3CF',
      },
      orange: {
        900: '#4D2E0D',
        800: '#814D1A',
        700: '#B56D27',
        600: '#E98C35',
        500: '#FBA239',
        400: '#F2B76F',
        300: '#F5C992',
        200: '#F8DBB6',
        100: '#FBEDDB',
        50: '#FFF7ED',
      },
      blue: {
        900: '#0A181A',
        800: '#1F4147',
        700: '#336B74',
        600: '#4994A2',
        500: '#2EBFD2',
        400: '#71C7D6',
        300: '#89D2DE',
        200: '#A3DCE6',
        100: '#BEE7EE',
        50: '#CDECF2',
      },
      'royal-blue': {
        900: '#000945',
        800: '#00147A',
        700: '#001EB0',
        600: '#0028E5',
        500: '#2C3CFD',
        400: '#5466F4',
        300: '#7D8AF6',
        200: '#A5AEF8',
        100: '#CED2FB',
        50: '#E2E4FD',
      },
      black: {
        500: '#000000',
        400: '#141414',
        300: '#292929',
        200: '#3D3D3D',
        100: '#525252',
        50: '#5C5C5C',
      },
      grey: {
        900: '#000000',
        800: '#000000',
        700: '#1A1A1A',
        600: '#363636',
        500: '#525252',
        400: '#666666',
        300: '#7B7B7B',
        200: '#8F8F8F',
        100: '#A4A4A4',
        50: '#AEAEAE',
      },
      zinc: {
        900: '#030303',
        800: '#1F1F1F',
        700: '#3B3B3B',
        600: '#575757',
        500: '#737373',
        400: '#878787',
        300: '#9C9C9C',
        200: '#B0B0B0',
        100: '#C5C5C5',
        50: '#CFCFCF',
      },
      slate: {
        900: '#31343A',
        800: '#4A4F59',
        700: '#949494',
        600: '#7E8695',
        500: '#9CA3AF',
        400: '#B4B8C0',
        300: '#CACDD2',
        200: '#E0E2E6',
        100: '#F6F7F8',
      },
      neutral: {
        900: '#5C5C5C',
        800: '#787878',
        700: '#949494',
        600: '#B0B0B0',
        500: '#CCCCCC',
        400: '#E0E0E0',
        300: '#F5F5F5',
      },
      white: {
        900: '#8F8F8F',
        800: '#ABABAB',
        700: '#C7C7C7',
        600: '#E3E3E3',
        500: '#FFFFFF',
      },
      'blue-sky': {
        200: '#BFDBFE',
      },
      'yellow-sun': {
        100: '#FEF9C3',
      },
    },
    extend: {
      height: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',
        '184': '46rem',
        '192': '48rem',
        '200': '50rem',
        '208': '52rem',
        '216': '54rem',
        '232': '58rem',
      },
      backgroundImage: (theme) => ({
        favicon: "url( './favicon.png')",
        'favicon-transp': "url( './icon-without-top-border.png')",
      }),
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 6fr))',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        caption: [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0px',
          },
        ],
        body: [
          '16px',
          {
            lineHeight: '20px',
            letterSpacing: '0em',
          },
        ],
        subtitle: [
          '16px',
          {
            lineHeight: '22px',
            letterSpacing: '0em',
          },
        ],
        'headline-6': [
          '22px',
          {
            lineHeight: '30px',
            letterSpacing: '0em',
          },
        ],
        'headline-5': [
          '25px',
          {
            lineHeight: '34px',
            letterSpacing: '0em',
          },
        ],
        'headline-4': [
          '36px',
          {
            lineHeight: '50px',
            letterSpacing: '0em',
          },
        ],
        'headline-3': [
          '50px',
          {
            lineHeight: '68px',
            letterSpacing: '0em',
          },
        ],
        'headline-2': [
          '64px',
          {
            lineHeight: '88px',
            letterSpacing: '0em',
          },
        ],
        'headline-1': [
          '100px',
          {
            lineHeight: '138px',
            letterSpacing: '0em',
          },
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }),
    require('@neojp/tailwindcss-line-clamp-utilities'),
  ],
}
