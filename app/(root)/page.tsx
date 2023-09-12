import {
	About,
	Hero,
	Blog,
	Contact,
	Experience,
	Skills,
	Work,
} from '@/components/sections'

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Experience />
			{/*<Work />*/}
			{/*<Blog />*/}
			<Contact />
		</>
	)
}
