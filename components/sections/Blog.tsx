import Container from '@/components/ui/container'
import React from 'react'

const Blog = () => {
	return (
		<Container id={'blog'}>
			<section className={'section section-even'} id={'blog'}>
				<div className={'container mx-auto'}>
					<div className={'flex flex-col items-center mb-12'}>
						<h2 className={'text-h2-semibold uppercase mb-2'}>My blog</h2>
					</div>
				</div>
			</section>
		</Container>
	)
}
export default Blog
