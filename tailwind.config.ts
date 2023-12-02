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
				'blue-gradient':
					'linear-gradient(360deg, #EBF8FF 0%, rgba(255, 255, 255, 0.00) 100%);',
				'blue-gradient-reverse':
					'linear-gradient(180deg, #EBF8FF 0%, rgba(255, 255, 255, 0.00) 100%);',
			},

			filter: {
				'shadow-default':
					'drop-shadow(0px 10px 24px rgba(112, 144, 176, 0.22))',
			},

			colors: {
				'brand-blue': '#04A9FF',
				'brand-blue-dark': '#00AAFF',
				'brand-text-dark': '#0D161B',
				'brand-bg-dark': '#10191F',
				'brand-bg-light': '#204354',
				'brand-orange': '#EA9324',
				'brand-white': '#FFF',
				'border-defaut': '#C3D5E5',
				'default-gray': '#F7F7F7',
				placeholder: 'rgba(13, 22, 27, 0.4)',
			},

			boxShadow: {
				'testimonial-card': '0px 21px 33px 0px rgba(16, 25, 31, 0.04)',
			},

			borderRadius: {
				'7': '20px',
			},

			border: {
				boxBorder: '1px solid #C3D5E5',
			},

			fontFamily: {
				display: ['"Open Sans"', 'sans-serif'],
				body: ['"Open Sans"', 'sans-serif'],
			},

			fontSize: {
				heading: '3.5rem', // 56px
				heading2: '2.8125rem', // 45px
				heading4: '1.375rem', // 22px
			},

			fontWeight: {
				semibold: 600,
				bolder: 800,
			},
		},
	},
}
