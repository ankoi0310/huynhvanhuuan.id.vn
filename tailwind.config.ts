import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'h1-bold': [
        '60px',
        {
          lineHeight: '72px',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      'h1-semibold': [
        '36px',
        {
          lineHeight: '40px',
          fontWeight: '600',
        },
      ],
      'h2-semibold': [
        '36px',
        {
          lineHeight: '40px',
          fontWeight: '600',
        },
      ],
      'h3-bold': [
        '30px',
        {
          lineHeight: '36px',
          fontWeight: '700',
        },
      ],
      'h3-semibold': [
        '30px',
        {
          lineHeight: '36px',
          fontWeight: '600',
        },
      ],
      'subtitle-regular': [
        '20px',
        {
          lineHeight: '28px',
          fontWeight: '400',
        },
      ],
      'body-regular-1': [
        '18px',
        {
          lineHeight: '28px',
          fontWeight: '400',
        },
      ],
      'body-regular-2': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      'base-semibold': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '600',
        },
      ],
      'base-medium': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '500',
        },
      ],
      'base-regular': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      'small-medium': [
        '14px',
        {
          lineHeight: '20px',
          fontWeight: '500',
        },
      ],
      'small-regular': [
        '14px',
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        success: '#00C48C',
        warning: '#FFB800',
        danger: '#FF3B30',
      },
      textColor: {
        light: {
          1: colors.gray[600],
          2: colors.gray[900],
        },
        dark: {
          1: colors.gray[300],
          2: colors.gray[50],
        },
      },
      backgroundColor: {
        light: {
          1: colors.white,
          2: colors.gray[50],
        },
        dark: {
          1: colors.gray[950],
          2: colors.gray[900],
        },
      },
      backgroundImage: {
        about: 'url(\'/assets/images/about.png\')',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
