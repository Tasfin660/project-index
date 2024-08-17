/** @type {import('tailwindcss').Config} */
export default {
	content: ['../client/index.html', '../client/src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: 'Work Sans',
			heading: 'Inconsolata'
		},
		container: {
			center: true,
			padding: '3rem'
		},
		extend: {
			colors: {
				'clr-primary': 'var(--color-primary)',
				'clr-primary-tints': 'var(--color-primary-tints)',
				'clr-primary-shades': 'var(--color-primary-shades)',
				'clr-secondary': 'var(--color-secondary)',
				'clr-red': 'var(--color-red)',
				'clr-green': 'var(--color-green)',
				'clr-yellow': 'var(--color-yellow)',
				'clr-gray-light': 'var(--color-gray-light)',
				'clr-gray-neutral': 'var(--color-gray-neutral)',
				'clr-gray-dark': 'var(--color-gray-dark)',
				'clr-white': 'var(--color-white)'
			},
			backgroundImage: {
				'clr-primary-grad': 'var(--color-primary-gradient)',
				'clr-secondary-grad': 'var(--color-secondary-gradient)',
				'clr-red-grad': 'var(--color-red-gradient)',
				'clr-green-grad': 'var(--color-green-gradient)',
				'clr-yellow-grad': 'var(--color-yellow-gradient)',
				'clr-gray-grad': 'var(--color-gray-gradient)'
			}
		}
	},
	darkMode: ['selector', '[theme="dark"]'],
	plugins: []
}
