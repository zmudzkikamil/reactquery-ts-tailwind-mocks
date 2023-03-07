/*
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Nunito', 'Helvetica', 'Artial'],
		},
		fontWeight: {
			regular: 400,
			medium: 500,
			bold: 700,
		},
		colors: {
			purple: '#845AFE',
			'purple-darker': '#5729DE',
			'purple-lighter': '#252041',
			'black-background': '#121220',
			black: '#0E0E1B',
			'black-lighter': '#201F32',
			'black-lightest': '#232539',
			gray: '#78788A',
			'gray-darker': '#36344A',
			'gray-light': '#E4E4E4',
			white: '#FFFFFF',
			red: '#F20B5F',
			'red-transparent': '#FEF2F7',
			transparent: 'rgba(0, 0, 0, 0)',
			yellow: '#F4C862',
			backdrop: 'rgba(18, 18, 32, .9)',
			blacker: '#1A1A2C',
			blue: '#51E1ED',
			green: '#45B16B',
		},
		borderRadius: {
			DEFAULT: '4px',
			full: '9999px',
		},
	},
	plugins: [],
};
