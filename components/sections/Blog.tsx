import Link from '@/components/navigation/Link'
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import Typography from '@/components/ui/typography'
import React from 'react'

const Blog = () => {
	return (
		<Container id={'blog'} className={'bg-gray-50'}>
			<div className={'flex flex-col items-center gap-4'}>
				<Typography variant={'h2'} className={'uppercase'}>My blog</Typography>
				<Typography variant={'subtitle'}>
					Updating...
				</Typography>
			</div>
			
			<div className={'flex items-center justify-center'}>
				<Button>
					<Link href={'/blog'} noCustomization>
						Visit my blog
					</Link>
				</Button>
			</div>
		</Container>
	)
}
export default Blog
