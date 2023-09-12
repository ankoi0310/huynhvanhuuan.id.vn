import Typography from '@/components/ui/typography'
import React from 'react'
import { LuCopyright } from 'react-icons/lu'

const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<footer className={'w-full bg-gray-50 py-6'}>
			<div className={'flex items-center justify-center gap-1'}>
				<Typography variant={'body3'} className={'flex items-center'}>
          <span className={'mr-1'}>
            <LuCopyright />
          </span>
					<span>
            2023 {year > 2023 ? ` - ${year}` : ''} |&nbsp;Code With Koi
          </span>
				</Typography>
			</div>
		</footer>
	)
}

export default Footer
