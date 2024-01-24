/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Urbanist Variable"', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'brand-black': '#141414',
				'brand-dark-gray': '#242424',
				'brand-gray': '#343434',
				'brand-light-gray': '#545454',
				'brand-white': '#f5f5f5',
				'brand-accent': '#64f5b7',
				'brand-red': '#fd5c63'
			}
		}
	},
	plugins: []
}
