'use client'

import {
	DownloadCVButton,
	ThemeSwitcher,
} from '@/components/layout/index'
import Link from '@/components/navigation/Link'
import Typography from '@/components/ui/typography'
import {
	useScroll,
	useWindowSize,
} from '@/hooks'
import { HOME_NAV_LINKS } from '@/lib/data'
import { cn } from '@/lib/utils'
import * as rs from 'react-scroll'
import React, {
	useEffect,
	useState,
} from 'react'

const Logo = () => (
	<Typography variant={'h3'} className={'font-bold'}>
		Code With Koi
	</Typography>
)

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const scrolled = useScroll(40)
	const size = useWindowSize()
	
	useEffect(() => {
		if (size?.width && size?.width > 768 && isOpen) {
			setIsOpen(false)
		}
	}, [size, isOpen])
	
	return (
		<header className={cn(
			'header',
			scrolled ? 'bg-gray/50 backdrop-blur-xl md:border-gray-100' : '',
		)}>
			<div className={'w-full max-w-7xl mx-auto flex items-center justify-between p-4 md:px-8'}>
				<Link href={'/'} noCustomization>
					<Logo />
				</Link>
				
				<div className={'hidden items-center gap-6 md:flex'}>
					{/* menu items */}
					<ul className={'flex items-center gap-6 list-none'}>
						{
							HOME_NAV_LINKS.map((link, index) => (
								<li key={index}>
									<rs.Link
										to={link.to}
										activeClass='active'
										smooth={true}
										spy={true}
										onClick={() => {
											const timeoutId = setTimeout(() => {
												setIsOpen(false)
												clearTimeout(timeoutId)
											}, 500)
										}}
									>
										{link.label}
									</rs.Link>
								</li>
							))
						}
					</ul>
					
					{/* vertical divider */}
					<div className={'h-6 w-0.5 bg-gray-100'}></div>
					
					<div className={'flex items-center gap-x-6'}>
						{/* theme switcher */}
						<ThemeSwitcher />
						
						{/* download CV button */}
						<DownloadCVButton />
					</div>
				</div>
				
				{/* drawer mobile menu */}
			</div>
		</header>
	)
}

export default Header
