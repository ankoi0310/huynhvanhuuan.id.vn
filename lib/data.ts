import ProjectNLU from '@/public/assets/images/project-nlu.png'
import ProjectNLUer from '@/public/assets/images/project-nluer.png'

import {
	ProjectDetail,
	Technology,
} from '@/lib/types'
import {
	Facebook,
	Github,
	Youtube,
} from 'lucide-react'

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

export const EXTERNAL_LINKS = {
	GITHUB: 'https://github.com/ankoi0310',
	FACEBOOK: 'https://www.facebook.com/KOI0310.IT',
	YOUTUBE: 'https://www.youtube.com/@code_with_koi',
}

export const SOCIAL_LINKS = [
	{
		icon: Github,
		url: 'https://github.com/ankoi0310',
	},
	{
		icon: Facebook,
		url: 'https://www.facebook.com/KOI0310.IT',
	},
	{
		icon: Youtube,
		url: 'https://www.youtube.com/@code_with_koi',
	},
]

export const TECHNOLOGIES: Technology[] = [
	{
		label: 'JavaScript',
		logo: '/assets/icons/javascript.svg',
		darkLogo: '',
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
			'Express.js',
			'React.js',
			'Typescript',
			'Redux',
			'TailwindCSS',
		],
	},
	{
		name: 'NLUer',
		description:
			'A mobile application for students of Nong Lam University.',
		url: 'https://huynhvanhuuan.id.vn/app/nluer',
		image: ProjectNLUer,
		technologies: [
			'Flutter',
			'Dart',
			'Firebase',
		],
	},
]

export const WAVE_TITLE = {
	TIKTOK: 'Download TikTok video',
	FACEBOOK: 'Download Facebook video',
	INSTAGRAM: 'Download Instagram video',
}
