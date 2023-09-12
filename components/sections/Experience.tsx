import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'
import React from 'react'

const Experience = () => {
	return (
		<Container id={'experience'} className={'bg-gray-50'}>
			<div className={'flex flex-col items-center gap-4'}>
				<Typography variant={'h2'} className={'uppercase'}>Experience</Typography>
				<Typography variant={'subtitle'}>
					Updating...
				</Typography>
			</div>
		</Container>
	)
}
export default Experience
