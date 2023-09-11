// 'use client'

import { IconButton } from '@/components/shared/index'
import { SOCIAL_LINKS } from '@/lib/data'
import React from 'react'

const SocialIcon = () => {
	return (
		<div className='flex gap-1'>
			{SOCIAL_LINKS.map((socialLink, index) => (
				<IconButton
					key={index}
					onClick={() => window.open(socialLink.url, '_blank')}
				>
					<socialLink.icon />
				</IconButton>
			))}
		</div>
	)
}
export default SocialIcon
