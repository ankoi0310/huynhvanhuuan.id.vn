import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import theme from 'tailwindcss/defaultTheme'

const config: Config = {
	darkMode: 'media',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				success: '#00C48C',
				warning: '#FFB800',
				danger: '#FF3B30',
				gray: {
					DEFAULT: 'rgb(var(--app-gray-default) / <alpha-value>)',
					50: 'rgb(var(--app-gray-50) / <alpha-value>)',
					100: 'rgb(var(--app-gray-100) / <alpha-value>)',
					200: 'rgb(var(--app-gray-200) / <alpha-value>)',
					300: 'rgb(var(--app-gray-300) / <alpha-value>)',
					400: 'rgb(var(--app-gray-400) / <alpha-value>)',
					500: 'rgb(var(--app-gray-500) / <alpha-value>)',
					600: 'rgb(var(--app-gray-600) / <alpha-value>)',
					700: 'rgb(var(--app-gray-700) / <alpha-value>)',
					800: 'rgb(var(--app-gray-800) / <alpha-value>)',
					900: 'rgb(var(--app-gray-900) / <alpha-value>)',
					950: 'rgb(var(--app-gray-950) / <alpha-value>)',
				},
			},
			dropShadow: {
				'accent': '0 0 0.75rem var(--accent-color)',
			},
			backgroundImage: {
				about: 'url(\'/assets/images/about.png\')',
			},
			keyframes: {
				open: {
					'0%': {
						opacity: '1',
						transform: 'translateX(100%)',
					},
				},
				close: {
					to: {
						opacity: '0',
						transform: 'translateX(100%)',
					},
				},
				waving: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
			},
			animation: {
				'drawer-open': 'open 0.3s ease-in-out',
				'drawer-close': 'close 0.3s ease-in-out',
				'waving-hand': 'waving 2s linear 3',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
export default config
