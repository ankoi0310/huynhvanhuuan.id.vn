import ProjectNLU from '@/public/assets/images/project-nlu.png'

import {
	ProjectDetail,
	Technology,
} from '@/lib/types'
import {
	LuFacebook,
	LuGithub,
	LuYoutube,
} from 'react-icons/lu'

export const HOME_NAV_LINKS = [
	{
		label: 'About',
		to: 'about',
	},
	{
		label: 'Experience',
		to: 'experience',
	},
	{
		label: 'Work',
		to: 'work',
	},
	{
		label: 'Blog',
		to: 'blog',
	},
	{
		label: 'Contact',
		to: 'contact',
	},
]

export const APP_NAV_LINKS = [
	{
		label: 'Trang chủ',
		href: '/',
	},
	{
		label: 'Giới thiệu',
		href: '/about',
	},
	{
		label: 'Tài liệu',
		href: '/docs',
	},
	{
		label: 'Quyền riêng tư',
		href: '/privacy',
	},
]

export const EXTERNAL_LINKS = []

export const SOCIAL_LINKS = [
	{
		icon: LuGithub,
		url: 'https://github.com/ankoi0310',
	},
	{
		icon: LuFacebook,
		url: 'https://www.facebook.com/KOI0310.IT',
	},
	{
		icon: LuYoutube,
		url: 'https://www.youtube.com/@code_with_koi',
	},
]

export const TECHNOLOGIES: Technology[] = [
	{
		label: 'JavaScript',
		logo: '/assets/icons/javascript.svg',
		darkLogo: '/assets/icons/javascript-dark.svg',
		url: '',
	},
	{
		label: 'TypeScript',
		logo: '/assets/icons/typescript.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'React',
		logo: '/assets/icons/react.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'Next.js',
		logo: '/assets/icons/nextjs.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'Node.js',
		logo: '/assets/icons/nodejs.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'Flutter',
		logo: '/assets/icons/flutter.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'TailwindCSS',
		logo: '/assets/icons/tailwindcss.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'PostgreSQL',
		logo: '/assets/icons/postgresql.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'MongoDB',
		logo: '/assets/icons/mongodb.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'MySQL',
		logo: '/assets/icons/mysql.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'Java',
		logo: '/assets/icons/java.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'Firebase',
		logo: '/assets/icons/firebase.svg',
		darkLogo: '',
		url: '',
	},
	{
		label: 'GitHub',
		logo: '/assets/icons/github.svg',
		darkLogo: '',
		url: '',
	},
]

export const PROJECTS: ProjectDetail[] = [
	{
		name: 'NLU',
		description:
			'Another version inspired by the course registration page of Nong Lam University.',
		url: 'https://nlu.huynhvanhuuan.id.vn',
		image: ProjectNLU,
		technologies: [
			'React',
			'Typescript',
			'React Bootstrap',
			'Firebase',
			'Express.js',
			'PostgreSQL',
			'Styled Components',
			'Redux',
		],
	},
	{
		name: 'NLU',
		description:
			'Another version inspired by the course registration page of Nong Lam University.',
		url: 'https://nlu.huynhvanhuuan.id.vn',
		image: ProjectNLU,
		technologies: [
			'React',
			'Typescript',
			'React Bootstrap',
			'Firebase',
			'Express.js',
			'PostgreSQL',
			'Styled Components',
			'Redux',
		],
	},
	{
		name: 'NLU',
		description:
			'Another version inspired by the course registration page of Nong Lam University.',
		url: 'https://nlu.huynhvanhuuan.id.vn',
		image: ProjectNLU,
		technologies: [
			'React',
			'Typescript',
			'React Bootstrap',
			'Firebase',
			'Express.js',
			'PostgreSQL',
			'Styled Components',
			'Redux',
		],
	},
]
