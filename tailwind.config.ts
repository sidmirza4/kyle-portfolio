import { radixThemePreset } from 'radix-themes-tw'

/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [radixThemePreset],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'orange-gradient':
					'linear-gradient(92deg, #EA9324 22.66%, #EB7723 62.41%);',
			},

			colors: {
				'brand-blue': '#04A9FF',
				'brand-blue-dark': '#00AAFF',
				'brand-text-dark': '#0D161B',
				'brand-bg-dark': '#10191F',
				'brand-bg-light': '#204354',
				'brand-orange': '#EA9324',
				'brand-white': '#FFF',
			},
		},

		fontFamily: {
			display: ['"Open Sans"', 'sans-serif'],
			body: ['"Open Sans"', 'sans-serif'],
		},

		fontSize: {
			heading: '3.5rem',
		},

		fontWeight: {
			semibold: 600,
			bolder: 800,
		},
	},
}
