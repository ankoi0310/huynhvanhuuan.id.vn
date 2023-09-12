'use client'

import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import AboutImage from '@/public/assets/images/about.png'

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	})
	
	return (
		<Container id={'about'} className={'bg-gray-50'}>
			<div className={'flex flex-col items-center mb-8'}>
				<Typography variant={'h2'} className={'uppercase'}>About me</Typography>
			</div>
			<div className={'w-full flex-1 flex flex-col items-center justify-between lg:flex-row lg:justify-center'}>
				<div className={'hidden flex-1 lg:flex lg:items-center lg:justify-center lg:order-first'}>
					<Image
						alt={'about-image'}
						priority
						width={400}
						height={400}
						className={'h-[300px] scale-150 drop-shadow-accent object-top object-cover'}
						src={AboutImage}
					/>
				</div>
				<div className={'max-w-screen-xl lg:max-w-xl flex flex-col gap-6'}>
					<Typography variant={'h3'}>
						Curious about me? <br />
						Here&#39;s a little bit about myself.
					</Typography>
					<Typography>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
						doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
					</Typography>
					<Typography>
						I started getting acquainted with Java in 2019. During that time, I taught myself some UI Frameworks like
						Angular, React.js, then Flutter, I have constantly grown and improved myself, always learning and
						cultivating new knowledge and technologies along the way. Currently, I am learning and have built some
						cutting-edge web and native applications using modern technologies such as Node.js, Next.js, TypeScript,
						TailwindCSS, Flutter and so on.
					</Typography>
					<Typography>
						I&#39;m truly a forward thinker and enjoy working on products end to end, from ideation to development.
					</Typography>
					<Typography>
						When I&#39;m not in full-on development mode, you can find me through my social media, watching movies,
						playing games, or reading books. Sometimes I also like to go out and take some photos.
					</Typography>
					<Typography>
						One last thing, I&#39;m currently available for freelance work, so feel free to reach out and say hello!
						I promise I won&#39;t bite 😉
					</Typography>
				</div>
			</div>
		</Container>
	)
}

export default About
