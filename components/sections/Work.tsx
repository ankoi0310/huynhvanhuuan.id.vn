import ProjectDetail from '@/components/cards/ProjectDetail'
import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'
import { PROJECTS } from '@/lib/data'
import React from 'react'

const Work = ({}) => {
	return (
		<Container id={'work'}>
			<div className={'flex flex-col items-center gap-4'}>
				<Typography variant={'h2'} className={'uppercase'}>Work</Typography>
				<Typography variant={'subtitle'}>
					These are some of the projects that I have worked on
				</Typography>
			</div>
			
			{
				PROJECTS.map((project, index) => (
					<ProjectDetail key={index} {...project} type={index % 2 == 0 ? 'default' : 'reverse'} />
				))
			}
		</Container>
	)
}
export default Work
