import type { Config } from 'tailwindcss'

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
				'drawer-open': 'open 0.3s ease-in-out',
				'drawer-close': 'close 0.3s ease-in-out',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
export default config
