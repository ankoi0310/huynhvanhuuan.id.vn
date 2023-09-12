import TechnologyDetail from '@/components/cards/TechnologyDetail'
import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'
import { TECHNOLOGIES } from '@/lib/data'
import React from 'react'

const Skills = async () => {
	return (
		<Container>
			<div className={'flex flex-col items-center gap-4'}>
				<Typography variant={'h2'} className={'uppercase'}>Skills</Typography>
				<Typography variant={'subtitle'}>
					Some of technologies and tools that I use on a daily
				</Typography>
			</div>
			
			<div className={'w-full grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-7 lg:gap-y-12'}>
				{TECHNOLOGIES.map((technology, index) => (
					<TechnologyDetail {...technology} key={index} />
				))}
			</div>
		</Container>
	)
}
export default Skills
