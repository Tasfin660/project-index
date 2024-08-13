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
				'cl-primary-tints': 'var(--color-primary-tints)',
				'cl-primary': 'var(--color-primary)',
				'cl-primary-shades': 'var(--color-primary-shades)',
				'cl-secondary': 'var(--color-secondary)',
				'cl-gray-light': 'var(--color-gray-light)',
				'cl-gray-neutral': 'var(--color-gray-neutral)',
				'cl-gray-dark': 'var(--color-gray-dark)',
				'cl-white': 'var(--color-white)'
			},
			backgroundImage: {
				'cl-primary-grad': 'var(--color-primary-gradient)',
				'cl-secondary-grad': 'var(--color-secondary-gradient)',
				'cl-gray-grad': 'var(--color-gray-gradient)'
			}
		}
	},
	darkMode: ['selector', '[theme="dark"]'],
	plugins: []
};
