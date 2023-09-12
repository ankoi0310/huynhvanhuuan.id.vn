import Link from '@/components/navigation/Link'
import { ImageWrapper } from '@/components/shared'
import Typography from '@/components/ui/typography'
import { Technology } from '@/lib/types'
import React from 'react'

const TechnologyDetail = ({ label, logo, darkLogo, url }: Technology) => {
	return (
		<div className='flex flex-col items-center justify-between gap-2'>
			<Link noCustomization href={url} externalLink>
				<ImageWrapper
					src={logo}
					srcForDarkMode={darkLogo}
					alt={label}
					priority
					width={48}
					height={48}
					className='w-[48px] h-[48px] transition-transform duration-300 md:hover:scale-110'
				/>
			</Link>
			<Typography variant='body1'>{label}</Typography>
		</div>
	)
}
export default TechnologyDetail
