import Link from '@/components/navigation/Link'
import { Card } from '@/components/ui/card'
import Tag from '@/components/ui/tag'
import Typography from '@/components/ui/typography'
import { ProjectDetail as ProjectDetailType } from '@/lib/types'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type ProjectDetailProps = ProjectDetailType & {
	type: 'default' | 'reverse';
};

const ProjectDetail = ({
	name,
	description,
	technologies,
	url,
	image,
	type = 'default',
}: ProjectDetailProps) => {
	return (
		<Card className={'w-full max-w-6xl mx-auto flex flex-col md:flex-row'}>
			<div
				className={cn(
					'project-image',
					type === 'default'
						? 'md:rounded-l-xl md:border-r'
						: 'md:order-last md:rounded-r-xl md:border-l',
				)}
			>
				<Link href={url} noCustomization externalLink>
					<Image
						src={image}
						alt={`${name} preview`}
						className={'rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105 object-cover'}
					/>
				</Link>
			</div>
			<div
				className={cn(
					'project-content',
					type === 'default' ? '' : 'md:order-first',
				)}
			>
				<Typography variant={'subtitle'} className={'font-semibold text-gray-900'}>
					{name}
				</Typography>
				<Typography>{description}</Typography>
				<div className={'flex flex-wrap gap-2'}>
					{technologies.map((technology, index) => (
						<Tag label={technology} key={index} />
					))}
				</div>
				<Link
					href={url}
					noCustomization
					externalLink
					className={'self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500'}
				>
					<ExternalLink />
				</Link>
			</div>
		</Card>
	)
}

export default ProjectDetail
