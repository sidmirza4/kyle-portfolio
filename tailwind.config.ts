// @ts-ignore
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
				'brand-bg-dark': '#101E28',
				'brand-bg-light': '#204354',
				'brand-orange': '#EA9324',
				'brand-white': '#FFF',
				'border-defaut': '#C3D5E5',
				'default-gray': '#F7F7F7',
				'brand-gray-blue': '#F6FCFF',
				placeholder: 'rgba(13, 22, 27, 0.4)',
				'brand-light-black': '#0F171F',
			},

			boxShadow: {
				'testimonial-card': '0px 21px 40px 0px rgba(16, 25, 31, 0.04)',
				'blue-shadow': '0px 11px 64px 0px rgba(4, 169, 255, 0.28)',
				'learning-step': '0px 30.24px 84.24px 6.48px rgba(4, 169, 255, 0.15);',
			},

			borderRadius: {
				'7': '20px',
				full: '999px',
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
				heading2: '3rem', // 45px
				headingLg: '1.875rem', // 30px
				heading3: '1.625rem', // 26px
				heading4: '1.375rem', // 22px
				heading6: '1rem', // 16px
			},

			fontWeight: {
				semibold: 600,
				bolder: 800,
			},

			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},

		screens: {
			xs: '360px',
			sm: '640px',
			md: '900px',
			lg: '1370px',
			xl: '1500px',
		},
	},

	plugins: [require('tailwindcss-animate')],
}
