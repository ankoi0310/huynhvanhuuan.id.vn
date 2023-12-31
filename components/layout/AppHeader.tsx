'use client'

import Link from '@/components/navigation/Link'
import Typography from '@/components/ui/typography'
import {
	useScroll,
	useWindowSize,
} from '@/hooks'
import {
	APP_NAV_LINKS,
} from '@/lib/data'
import { cn } from '@/lib/utils'
import React, {
	Fragment,
	useEffect,
	useState,
} from 'react'

const Logo = ({ title }: { title?: string }) => (
	<Typography variant={'h3'} className={'font-bold'}>
		{
			title ?? 'Code With Koi'
		}
	</Typography>
)

interface AppHeaderProps {
	title?: string
	noMenu?: boolean
	customMenu?: React.ReactNode
}

const AppHeader = ({ title, noMenu, customMenu }: AppHeaderProps) => {
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
			scrolled ? 'bg-black/50 backdrop-blur-xl md:border-gray-100' : '',
		)}>
			<div className={'w-full max-w-7xl mx-auto flex items-center justify-between p-4 md:px-8'}>
				<Link href={'/'} noCustomization>
					<Logo title={title} />
				</Link>
				
				{
					noMenu ?? (
						customMenu ?? (
							<Fragment>
								<div className={'hidden items-center gap-6 md:flex'}>
									{/* menu items */}
									<ul className={'flex items-center gap-6 list-none'}>
										{
											APP_NAV_LINKS.map((link, index) => (
												<li key={index}>
													<Link href={link.href}>{link.label}</Link>
												</li>
											))
										}
									</ul>
								</div>
								
								{/* drawer mobile menu */}
							</Fragment>
						)
					)
				}
			</div>
		</header>
	)
}

export default AppHeader
